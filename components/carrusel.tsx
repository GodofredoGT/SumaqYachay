"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  { src: "/carousel-aula.png", title: "Aulas modernas", desc: "Espacios cómodos y equipados para aprender mejor." },
  { src: "/carousel-docente.png", title: "Clases dinámicas", desc: "Docentes que explican paso a paso cada tema." },
  { src: "/carousel-estudiantes.png", title: "Comunidad estudiantil", desc: "Un ambiente motivador rumbo a la universidad." },
  { src: "/carousel-logros.png", title: "Resultados reales", desc: "Nuestros alumnos logran el ingreso que buscan." },
]

export function Carrusel() {
  const [index, setIndex] = useState(0)

  const next = useCallback(() => setIndex((i) => (i + 1) % slides.length), [])
  const prev = useCallback(() => setIndex((i) => (i - 1 + slides.length) % slides.length), [])

  useEffect(() => {
    const id = setInterval(next, 5000)
    return () => clearInterval(id)
  }, [next])

  return (
    <section id="galeria" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Galería
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-balance md:text-4xl">
            Conoce nuestra academia
          </h2>
        </div>

        <div className="relative mt-12 overflow-hidden rounded-3xl border border-border/60 glow-gold">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {slides.map((s) => (
              <div key={s.src} className="relative aspect-[16/9] w-full shrink-0">
                <Image
                  src={s.src || "/placeholder.svg"}
                  alt={s.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  priority={s.src === slides[0].src}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 md:p-8">
                  <h3 className="font-heading text-xl font-bold text-foreground md:text-2xl">
                    {s.title}
                  </h3>
                  <p className="mt-1 max-w-md text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={prev}
            aria-label="Imagen anterior"
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/70 p-2 text-foreground backdrop-blur transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <ChevronLeft className="size-6" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Imagen siguiente"
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/70 p-2 text-foreground backdrop-blur transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <ChevronRight className="size-6" />
          </button>

          <div className="absolute bottom-4 right-6 flex gap-2">
            {slides.map((s, i) => (
              <button
                key={s.src}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Ir a la imagen ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-6 bg-primary" : "w-2 bg-foreground/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
