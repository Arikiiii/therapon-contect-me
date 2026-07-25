"use client"

import type { ReactNode } from "react"
import { useState } from "react"
import { Mail, Check, Copy } from "lucide-react"

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  )
}

function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.317 4.369A19.79 19.79 0 0 0 16.558 3.2a.074.074 0 0 0-.079.037c-.34.607-.719 1.4-.984 2.02a18.27 18.27 0 0 0-5.487 0 12.6 12.6 0 0 0-.997-2.02.077.077 0 0 0-.079-.037A19.74 19.74 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C1.533 7.55.943 10.65 1.233 13.71a.08.08 0 0 0 .031.055 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.1 13.1 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.009c.12.099.246.198.373.292a.077.077 0 0 1-.006.127 12.3 12.3 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.84 19.84 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-3.548-.838-6.624-2.573-9.314a.061.061 0 0 0-.031-.027ZM8.02 12.06c-1.183 0-2.157-1.086-2.157-2.42 0-1.333.955-2.42 2.157-2.42 1.21 0 2.176 1.096 2.157 2.42 0 1.334-.956 2.42-2.157 2.42Zm7.975 0c-1.183 0-2.157-1.086-2.157-2.42 0-1.333.955-2.42 2.157-2.42 1.21 0 2.176 1.096 2.157 2.42 0 1.334-.946 2.42-2.157 2.42Z" />
    </svg>
  )
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
    </svg>
  )
}

function LineIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2C6.201 2 1.5 5.858 1.5 10.616c0 4.264 3.728 7.834 8.766 8.509.341.074.806.225.923.517.106.265.069.68.034.947l-.15.897c-.045.265-.211 1.037.909.566 1.12-.471 6.038-3.556 8.236-6.089 1.518-1.665 2.282-3.351 2.282-5.347C22.5 5.858 17.799 2 12 2ZM8.06 13.203a.204.204 0 0 1-.204.203H5.008a.204.204 0 0 1-.204-.203V8.616a.204.204 0 0 1 .204-.204h.735a.204.204 0 0 1 .204.204v3.647h1.905a.204.204 0 0 1 .204.204v.736Zm1.77 0a.204.204 0 0 1-.204.203h-.735a.204.204 0 0 1-.204-.203V8.616a.204.204 0 0 1 .204-.204h.735a.204.204 0 0 1 .204.204v4.587Zm5.088 0a.204.204 0 0 1-.204.203h-.734a.203.203 0 0 1-.164-.083l-2.102-2.84v2.72a.204.204 0 0 1-.204.203h-.735a.204.204 0 0 1-.204-.203V8.616a.204.204 0 0 1 .204-.204h.755l.031.005.02.005.02.008.017.009.018.012.016.013.015.016.014.017 2.086 2.816V8.616a.204.204 0 0 1 .204-.204h.734a.204.204 0 0 1 .204.204v4.587Zm4.084-3.85a.204.204 0 0 1-.204.204h-1.905v.735h1.905a.204.204 0 0 1 .204.204v.735a.204.204 0 0 1-.204.204h-1.905v.735h1.905a.204.204 0 0 1 .204.204v.735a.204.204 0 0 1-.204.204h-2.844a.204.204 0 0 1-.204-.204V8.616a.204.204 0 0 1 .204-.204h2.844a.204.204 0 0 1 .204.204v.736Z" />
    </svg>
  )
}

type Social = {
  name: string
  handle: string
  icon: ReactNode
  color: string
} & (
  | { action: "link"; href: string }
  | { action: "copy"; value: string }
)

const socials: Social[] = [
  {
    name: "Instagram",
    handle: "@ae_00021",
    action: "link",
    href: "https://www.instagram.com/ae_00021/",
    icon: <InstagramIcon className="h-6 w-6" />,
    color: "oklch(0.7 0.13 330)",
  },
  {
    name: "Facebook",
    handle: "thir.phl.thea.w.chu",
    action: "link",
    href: "https://web.facebook.com/thir.phl.thea.w.chu",
    icon: <FacebookIcon className="h-6 w-6" />,
    color: "oklch(0.65 0.15 250)",
  },
  {
    name: "GitHub",
    handle: "@Arikiiii",
    action: "link",
    href: "https://github.com/Arikiiii?tab=repositories",
    icon: <GithubIcon className="h-6 w-6" />,
    color: "oklch(0.78 0.06 285)",
  },
  {
    name: "LINE",
    handle: "s1746sim",
    action: "copy",
    value: "s1746sim",
    icon: <LineIcon className="h-6 w-6" />,
    color: "oklch(0.72 0.16 150)",
  },
  {
    name: "Discord",
    handle: "ariki3797",
    action: "copy",
    value: "ariki3797",
    icon: <DiscordIcon className="h-6 w-6" />,
    color: "oklch(0.68 0.13 275)",
  },
  {
    name: "Gmail",
    handle: "therapon2334@gmail.com",
    action: "copy",
    value: "therapon2334@gmail.com",
    icon: <Mail className="h-6 w-6" />,
    color: "oklch(0.68 0.2 25)",
  },
]

const cardClass =
  "group relative flex w-full items-center gap-4 overflow-hidden rounded-2xl border border-border bg-card/60 p-4 text-left backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background cursor-pointer"

export function SocialLinks() {
  const [copied, setCopied] = useState<string | null>(null)

  async function handleCopy(name: string, value: string) {
    try {
      await navigator.clipboard.writeText(value)
    } catch {
      const el = document.createElement("textarea")
      el.value = value
      el.style.position = "fixed"
      el.style.opacity = "0"
      document.body.appendChild(el)
      el.select()
      document.execCommand("copy")
      document.body.removeChild(el)
    }
    setCopied(name)
    window.setTimeout(() => setCopied((c) => (c === name ? null : c)), 1600)
  }

  return (
    <ul className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
      {socials.map((social, i) => {
        const isCopied = copied === social.name

        const content = (
          <>
            {/* brand glow on hover */}
            <span
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(120% 120% at 0% 0%, color-mix(in oklab, var(--brand) 22%, transparent), transparent 60%)",
              }}
            />
            <span
              className="pointer-events-none relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors duration-300"
              style={{
                backgroundColor: "color-mix(in oklab, var(--brand) 18%, transparent)",
                color: "color-mix(in oklab, var(--brand) 82%, white)",
              }}
            >
              {social.icon}
            </span>
            <span className="pointer-events-none relative flex min-w-0 flex-col text-left">
              <span className="font-display text-base font-semibold text-foreground">{social.name}</span>
              <span className="truncate text-sm text-muted-foreground">{social.handle}</span>
            </span>
            <span
              className="pointer-events-none relative ml-auto flex items-center gap-1.5 text-xs font-medium text-muted-foreground"
              aria-hidden="true"
            >
              {social.action === "copy" ? (
                isCopied ? (
                  <>
                    <Check className="h-4 w-4" style={{ color: "var(--brand)" }} />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 opacity-60 transition-opacity group-hover:opacity-100" />
                    Copy
                  </>
                )
              ) : (
                <span className="text-base opacity-0 transition-all duration-300 -translate-x-1 group-hover:translate-x-0 group-hover:opacity-100">
                  →
                </span>
              )}
            </span>
          </>
        )

        return (
          <li
            key={social.name}
            className="animate-fade-up"
            style={{ animationDelay: `${0.15 + i * 0.09}s` }}
          >
            {social.action === "link" ? (
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cardClass}
                style={{ ["--brand" as string]: social.color }}
              >
                {content}
              </a>
            ) : (
              <button
                type="button"
                onClick={() => handleCopy(social.name, social.value)}
                className={cardClass}
                style={{ ["--brand" as string]: social.color }}
                aria-label={`Copy ${social.name}: ${social.value}`}
              >
                {content}
              </button>
            )}
          </li>
        )
      })}
    </ul>
  )
}