import { GalaxyBackground } from "@/components/galaxy-background"
import { SocialLinks } from "@/components/social-links"

export default function Page() {
  return (
    <main className="relative flex min-h-dvh flex-col items-center justify-center px-5 py-16">
      <GalaxyBackground />

      <section className="w-full max-w-xl text-center">
        {/* Avatar / planet orb */}
        <div className="animate-fade-up mb-8 flex justify-center">
          <div className="animate-float-slow relative">
            <span className="absolute -inset-3 rounded-full bg-primary/40 blur-2xl" aria-hidden="true" />
            <span
              className="absolute -inset-1 rounded-full opacity-70 blur-md"
              aria-hidden="true"
              style={{ background: "conic-gradient(from 0deg, var(--primary), var(--accent), var(--primary))" }}
            />
            <div className="relative h-28 w-28 overflow-hidden rounded-full border border-border/80 bg-card/70 shadow-2xl backdrop-blur-md">
              <img
                src="/images/profile.jpg"
                alt="Therapon Thaochoo"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <h1
          className="animate-fade-up font-display text-4xl font-bold leading-tight text-balance sm:text-5xl"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Therapon Thaochoo
          </span>
        </h1>

        <p
          className="animate-fade-up font-thai mt-2 text-lg text-foreground/90"
          style={{ animationDelay: "0.12s" }}
        >
          ธีรพล เถาว์ชู
        </p>

        <p
          className="animate-fade-up mx-auto mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground"
          style={{ animationDelay: "0.15s" }}
        >
          Welcome. Please feel free to reach out or connect with me through any of the channels below.
        </p>

        <div className="mt-10">
          <SocialLinks />
        </div>

        <footer
          className="animate-fade-up mt-12 text-xs text-muted-foreground"
          style={{ animationDelay: "0.7s" }}
        >
          BY : AE_21  · {new Date().getFullYear()}
        </footer>
      </section>
    </main>
  )
}
