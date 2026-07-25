"use client"

import { useEffect, useRef } from "react"

type Star = {
  x: number
  y: number
  radius: number
  baseAlpha: number
  twinkleSpeed: number
  phase: number
  drift: number
}

type ShootingStar = {
  x: number
  y: number
  len: number
  speed: number
  angle: number
  life: number
  maxLife: number
}

export function GalaxyBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    let width = 0
    let height = 0
    let dpr = 1
    let stars: Star[] = []
    let shooting: ShootingStar[] = []
    let raf = 0
    let last = performance.now()
    let nextShoot = 1200

    const buildStars = () => {
      const count = Math.min(320, Math.floor((width * height) / 5200))
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.4 + 0.2,
        baseAlpha: Math.random() * 0.6 + 0.2,
        twinkleSpeed: Math.random() * 1.8 + 0.4,
        phase: Math.random() * Math.PI * 2,
        drift: Math.random() * 6 + 2,
      }))
    }

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = canvas.clientWidth
      height = canvas.clientHeight
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      buildStars()
    }

    const spawnShooting = () => {
      const fromLeft = Math.random() > 0.5
      shooting.push({
        x: fromLeft ? -50 : width + 50,
        y: Math.random() * height * 0.5,
        len: Math.random() * 120 + 90,
        speed: Math.random() * 380 + 320,
        angle: fromLeft ? Math.PI * 0.14 : Math.PI * 0.86,
        life: 0,
        maxLife: Math.random() * 0.7 + 0.6,
      })
    }

    const render = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05)
      last = now
      const t = now / 1000

      ctx.clearRect(0, 0, width, height)

      // Nebula haze (soft moving cosmic dust clouds)
      const drift1 = prefersReduced ? 0 : Math.sin(t * 0.06) * width * 0.05
      const maxDim = Math.max(width, height)
      const clouds: Array<{ x: number; y: number; r: number; c: string }> = [
        { x: width * 0.22 + drift1, y: height * 0.3, r: maxDim * 0.42, c: "rgba(140, 95, 240, 0.18)" },
        { x: width * 0.78 - drift1, y: height * 0.45, r: maxDim * 0.4, c: "rgba(235, 95, 190, 0.16)" },
        { x: width * 0.5, y: height * 0.82, r: maxDim * 0.36, c: "rgba(70, 190, 230, 0.13)" },
      ]
      for (const c of clouds) {
        const g = ctx.createRadialGradient(c.x, c.y, 0, c.x, c.y, c.r)
        g.addColorStop(0, c.c)
        g.addColorStop(1, "rgba(0,0,0,0)")
        ctx.fillStyle = g
        ctx.fillRect(0, 0, width, height)
      }

      // Stars
      for (const s of stars) {
        const alpha = s.baseAlpha * (0.55 + 0.45 * Math.sin(t * s.twinkleSpeed + s.phase))
        const y = prefersReduced ? s.y : (s.y + Math.sin(t * 0.05 + s.phase) * s.drift) % height
        ctx.beginPath()
        ctx.arc(s.x, y < 0 ? y + height : y, s.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(226, 232, 255, ${alpha})`
        ctx.fill()
      }

      // Shooting stars
      if (!prefersReduced) {
        nextShoot -= dt * 1000
        if (nextShoot <= 0) {
          spawnShooting()
          nextShoot = Math.random() * 3500 + 1800
        }
        shooting = shooting.filter((sh) => sh.life < sh.maxLife)
        for (const sh of shooting) {
          sh.life += dt
          sh.x += Math.cos(sh.angle) * sh.speed * dt
          sh.y += Math.sin(sh.angle) * sh.speed * dt
          const tailX = sh.x - Math.cos(sh.angle) * sh.len
          const tailY = sh.y - Math.sin(sh.angle) * sh.len
          const grad = ctx.createLinearGradient(sh.x, sh.y, tailX, tailY)
          const fade = 1 - sh.life / sh.maxLife
          grad.addColorStop(0, `rgba(180, 230, 255, ${fade})`)
          grad.addColorStop(1, "rgba(180, 230, 255, 0)")
          ctx.strokeStyle = grad
          ctx.lineWidth = 2
          ctx.beginPath()
          ctx.moveTo(sh.x, sh.y)
          ctx.lineTo(tailX, tailY)
          ctx.stroke()
        }
      }

      raf = requestAnimationFrame(render)
    }

    resize()
    window.addEventListener("resize", resize)
    raf = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background" aria-hidden="true">
      {/* Diagonal galactic band (Milky Way haze) */}
      <div
        className="absolute -inset-x-1/4 top-1/4 h-[46rem] -rotate-[18deg] opacity-90 blur-[60px]"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, oklch(0.7 0.13 330 / 0.28) 25%, oklch(0.78 0.14 205 / 0.34) 50%, oklch(0.7 0.15 300 / 0.28) 75%, transparent 100%)",
        }}
      />
      {/* Nebula glows */}
      <div className="animate-drift absolute left-[8%] top-[6%] h-[34rem] w-[34rem] rounded-full bg-primary/45 blur-[100px]" />
      <div className="animate-drift absolute right-[6%] top-[20%] h-[32rem] w-[32rem] rounded-full bg-accent/45 blur-[110px]" />
      <div className="animate-drift absolute bottom-[4%] left-[28%] h-[30rem] w-[30rem] rounded-full bg-primary/30 blur-[100px]" />
      <div
        className="animate-drift absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[110px]"
        style={{ background: "oklch(0.7 0.15 300 / 0.35)" }}
      />
      {/* Star canvas */}
      <canvas ref={canvasRef} className="h-full w-full" />
      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_65%,color-mix(in_oklab,var(--background)_92%,transparent)_100%)]" />
    </div>
  )
}
