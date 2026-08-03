import { GraduationCap, Sparkles, Trophy, Users } from "lucide-react"
import { LogoSY } from "@/components/logo-sy"
import { Button } from "@/components/ui/button"

const stats = [
  { icon: Trophy, value: "+15", label: "Ingresantes destacados" },
  { icon: Users, value: "+500", label: "Alumnos formados" },
  { icon: GraduationCap, value: "100%", label: "Docentes calificados" },
]

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="grid-bg absolute inset-0 opacity-70" aria-hidden />
      <div
        className="absolute -top-32 left-1/2 size-[520px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <Sparkles className="size-4" />
            Tu camino a la universidad empieza aquí
          </span>

          <h1 className="mt-6 font-heading text-4xl font-bold leading-tight text-balance md:text-6xl">
            Forjamos tu futuro con{" "}
            <span className="text-gradient-gold">conocimiento de excelencia</span>
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Academia Preuniversitaria, Colegio y Escuela con reforzamiento escolar. En Sumaq
            Yachay preparamos a nuestros estudiantes con docentes calificados y una metodología
            moderna para alcanzar el ingreso a la universidad.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button render={<a href="#contacto" />} nativeButton={false} size="lg" className="font-semibold">
              Inscríbete ahora
            </Button>
            <Button render={<a href="#cursos" />} nativeButton={false} size="lg" variant="outline" className="font-semibold">
              Ver cursos
            </Button>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-border/60 bg-card/60 p-4 backdrop-blur"
              >
                <s.icon className="size-5 text-primary" />
                <dt className="mt-2 font-heading text-2xl font-bold text-foreground">{s.value}</dt>
                <dd className="text-xs text-muted-foreground">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative flex justify-center">
          <div
            className="absolute inset-0 m-auto size-72 animate-pulse-ring rounded-full border border-primary/30 md:size-96"
            aria-hidden
          />
          <div
            className="absolute inset-0 m-auto size-80 animate-spin-slow rounded-full border border-dashed border-primary/20 md:size-[26rem]"
            aria-hidden
          />
          <div className="logo3d-scene">
            <div className="logo3d-rotor relative w-64 md:w-80">
              {Array.from({ length: 17 }, (_, index) => -12 + index * 1.5).map((depth) => (
                <div
                  key={depth}
                  className="logo3d-edge absolute inset-0 w-full"
                  style={{ transform: `translateZ(${depth}px)` }}
                >
                  <LogoSY withName className="w-full" />
                </div>
              ))}
              {Array.from({ length: 17 }, (_, index) => -12 + index * 1.5).map((depth) => (
                <div
                  key={`back-${depth}`}
                  className="logo3d-edge absolute inset-0 w-full"
                  style={{ transform: `rotateY(180deg) translateZ(${depth}px)` }}
                >
                  <LogoSY withName className="w-full" />
                </div>
              ))}
              <div className="logo3d-face relative w-full" style={{ transform: "translateZ(14px)" }}>
                <LogoSY withName className="w-full drop-shadow-2xl" />
              </div>
              <div className="logo3d-face absolute inset-0 w-full" style={{ transform: "rotateY(180deg) translateZ(14px)" }}>
                <LogoSY withName className="w-full drop-shadow-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
