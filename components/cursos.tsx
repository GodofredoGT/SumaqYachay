import {
  Calculator,
  Compass,
  FunctionSquare,
  MessageSquareText,
  Sigma,
  Triangle,
} from "lucide-react"

const cursos = [
  { icon: Calculator, name: "Matemática", desc: "Aritmética, fracciones y resolución de problemas." },
  { icon: MessageSquareText, name: "Comunicación", desc: "Comprensión lectora, gramática y redacción." },
  { icon: Sigma, name: "Razonamiento Matemático", desc: "Lógica, sucesiones y análisis de problemas." },
  { icon: Triangle, name: "Trigonometría", desc: "Razones, identidades y resolución de triángulos." },
  { icon: Compass, name: "Geometría", desc: "Figuras, áreas, volúmenes y demostraciones." },
  { icon: FunctionSquare, name: "Álgebra", desc: "Ecuaciones, polinomios, funciones y sistemas." },
]

export function Cursos() {
  return (
    <section id="cursos" className="relative py-20 md:py-28">
      <div className="grid-bg absolute inset-0 opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Cursos
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-balance md:text-4xl">
            Cursos que dominamos
          </h2>
          <p className="mt-4 text-muted-foreground text-pretty">
            Preparación completa en las materias clave para el examen de admisión y el colegio.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cursos.map((c) => (
            <div
              key={c.name}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/60 p-6 backdrop-blur transition-all hover:border-primary/50"
            >
              <div className="flex items-center gap-4">
                <div className="inline-flex rounded-xl bg-primary/15 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <c.icon className="size-6" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground">{c.name}</h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
