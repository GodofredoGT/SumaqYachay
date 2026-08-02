import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const planes = [
  {
    nombre: "Reforzamiento",
    mensual: 80,
    meses: 4,
    total: 320,
    destacado: false,
    features: [
      "Clases de refuerzo por curso",
      "Grupos reducidos",
      "Material de práctica incluido",
      "Horarios flexibles",
    ],
  },
  {
    nombre: "Preuniversitaria",
    mensual: 150,
    meses: 5,
    total: 750,
    destacado: true,
    features: [
      "Ciclo completo de admisión",
      "Simulacros semanales",
      "Todos los cursos incluidos",
      "Asesoría vocacional",
      "Material y separatas",
    ],
  },
  {
    nombre: "Colegio",
    mensual: 120,
    meses: 9,
    total: 1080,
    destacado: false,
    features: [
      "Acompañamiento de 1° a 5°",
      "Ciencias y letras",
      "Tareas y exámenes guiados",
      "Reportes a los padres",
    ],
  },
]

const formato = new Intl.NumberFormat("es-PE")

export function Precios() {
  return (
    <section id="precios" className="relative py-20 md:py-28">
      <div className="grid-bg absolute inset-0 opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Inversión
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-balance md:text-4xl">
            Costos mensuales y totales
          </h2>
          <p className="mt-4 text-muted-foreground text-pretty">
            Precios accesibles y transparentes. Elige el plan que se ajuste a tus objetivos.
          </p>
        </div>

        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-3">
          {planes.map((p) => (
            <div
              key={p.nombre}
              className={`relative flex flex-col rounded-3xl border p-8 backdrop-blur transition-all ${
                p.destacado
                  ? "border-primary bg-card glow-gold lg:-translate-y-3"
                  : "border-border/60 bg-card/60 hover:border-primary/50"
              }`}
            >
              {p.destacado && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold uppercase tracking-wide text-primary-foreground">
                  Más elegido
                </span>
              )}
              <h3 className="font-heading text-xl font-bold text-foreground">{p.nombre}</h3>

              <div className="mt-4 flex items-end gap-1">
                <span className="font-heading text-4xl font-bold text-gradient-gold">
                  S/ {formato.format(p.mensual)}
                </span>
                <span className="pb-1 text-sm text-muted-foreground">/ mes</span>
              </div>

              <div className="mt-2 rounded-lg bg-secondary/60 px-3 py-2 text-sm text-muted-foreground">
                Costo total del ciclo ({p.meses} meses):{" "}
                <span className="font-semibold text-foreground">S/ {formato.format(p.total)}</span>
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>

              <Button
                render={<a href="#contacto" />}
                nativeButton={false}
                className="mt-8 w-full font-semibold"
                variant={p.destacado ? "default" : "outline"}
              >
                Quiero este plan
              </Button>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          * Los precios son referenciales. Consulta promociones y descuentos por matrícula
          anticipada escribiéndonos por WhatsApp.
        </p>
      </div>
    </section>
  )
}
