import { BookOpen, GraduationCap, School, Sparkles } from "lucide-react"

const niveles = [
  {
    icon: GraduationCap,
    title: "Preuniversitaria",
    desc: "Preparación intensiva para el ingreso a universidades nacionales y particulares con simulacros constantes.",
  },
  {
    icon: School,
    title: "Colegio (Secundaria)",
    desc: "Acompañamiento académico de 1° a 5° de secundaria con base sólida en ciencias y letras.",
  },
  {
    icon: BookOpen,
    title: "Escuela (Primaria)",
    desc: "Formación de hábitos de estudio y bases firmes en matemática y comunicación desde temprana edad.",
  },
  {
    icon: Sparkles,
    title: "Reforzamiento",
    desc: "Clases de refuerzo personalizadas por curso para superar dificultades y subir el rendimiento.",
  },
]

export function Niveles() {
  return (
    <section id="niveles" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Nuestros niveles
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-balance md:text-4xl">
            Educación integral en cada etapa
          </h2>
          <p className="mt-4 text-muted-foreground text-pretty">
            Acompañamos al estudiante desde la escuela hasta el ingreso a la universidad.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {niveles.map((n) => (
            <div
              key={n.title}
              className="group rounded-2xl border border-border/60 bg-card/60 p-6 backdrop-blur transition-all hover:-translate-y-1 hover:border-primary/50 hover:glow-gold"
            >
              <div className="inline-flex rounded-xl bg-primary/15 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <n.icon className="size-6" />
              </div>
              <h3 className="mt-4 font-heading text-lg font-bold text-foreground">{n.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{n.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
