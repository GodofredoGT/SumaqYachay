"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { LogoSY } from "@/components/logo-sy"
import { Button } from "@/components/ui/button"

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#niveles", label: "Niveles" },
  { href: "#cursos", label: "Cursos" },
  { href: "#docentes", label: "Docentes" },
  { href: "#galeria", label: "Galería" },
  { href: "#precios", label: "Precios" },
  { href: "#contacto", label: "Contacto" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#inicio" className="flex items-center gap-3">
          <LogoSY className="h-11 w-auto" />
          <span className="font-heading text-lg font-bold leading-none text-foreground">
            Sumaq Yachay
            <span className="block text-[10px] font-medium uppercase tracking-widest text-primary">
              Academia Preuniversitaria
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button render={<a href="#contacto" />} nativeButton={false} className="font-semibold">
            Inscríbete
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-foreground lg:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border/60 bg-background/95 px-4 py-3 lg:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-primary"
              >
                {l.label}
              </a>
            ))}
            <Button
              render={<a href="#contacto" onClick={() => setOpen(false)} />}
              nativeButton={false}
              className="mt-2 font-semibold"
            >
              Inscríbete
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
