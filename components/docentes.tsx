import { Award, BadgeCheck } from "lucide-react"

const docentes = [
  { initials: "JC", area: "Matemática y Álgebra", exp: "10 años de experiencia preuniversitaria" },
  { initials: "MR", area: "Razonamiento Matemático", exp: "Especialista en lógica y problemas" },
  { initials: "LP", area: "Comunicación", exp: "Magíster en Lengua y Literatura" },
  { initials: "AV", area: "Trigonometría y Geometría", exp: "Ingeniero y docente certificado" },
]

export function Docentes() {
  return (
    <section id="docentes" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Plana docente
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold text-balance md:text-4xl">
              Docentes calificados y comprometidos
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">
              Nuestro equipo está formado por profesionales con amplia experiencia en preparación
              preuniversitaria. Cada docente domina su materia y acompaña de cerca el progreso de
              cada estudiante.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Profesionales titulados y especializados",
                "Metodología práctica y resolución de exámenes",
                "Seguimiento personalizado del alumno",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-foreground">
                  <BadgeCheck className="size-5 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {docentes.map((d) => (
              <div
                key={d.initials}
                className="rounded-2xl border border-border/60 bg-card/60 p-6 backdrop-blur transition-all hover:border-primary/50"
              >
                <div className="flex size-14 items-center justify-center rounded-full bg-primary font-heading text-xl font-bold text-primary-foreground">
                  {d.initials}
                </div>
                <h3 className="mt-4 flex items-center gap-2 font-heading text-base font-bold text-foreground">
                  <Award className="size-4 text-primary" />
                  {d.area}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{d.exp}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
