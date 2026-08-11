"use client"

import Image from "next/image"
import { Award, BadgeCheck } from "lucide-react"

import OrbitImages from "@/components/OrbitImages"
import SpotlightCard from "@/components/SpotlightCard"

const docentes = [
  { initials: "JC", area: "Matemática y Álgebra", exp: "10 años de experiencia preuniversitaria", image: "/docente-placeholder.svg?docente=1" },
  { initials: "MR", area: "Razonamiento Matemático", exp: "Especialista en lógica y problemas", image: "/docente-placeholder.svg?docente=2" },
  { initials: "LP", area: "Comunicación", exp: "Magíster en Lengua y Literatura", image: "/docente-placeholder.svg?docente=3" },
  { initials: "AV", area: "Trigonometría y Geometría", exp: "Ingeniero y docente certificado", image: "/docente-placeholder.svg?docente=4" },
]

function TarjetaDocente({ docente }: { docente: (typeof docentes)[number] }) {
  return (
    <SpotlightCard
      spotlightColor="transparent"
      className="group h-[280px] w-full rounded-2xl border-border/60 bg-background p-0 shadow-xl transition-all duration-300 hover:scale-[1.03] hover:border-primary/60"
    >
      <div className="relative h-[130px] overflow-hidden border-b border-border/60 bg-white">
        <Image
          src={docente.image}
          alt={`Foto de docente de ${docente.area}`}
          fill
          sizes="(min-width: 1280px) 270px, (min-width: 640px) 45vw, 92vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="relative p-4">
        <div className="absolute -top-5 flex size-10 items-center justify-center rounded-full border-4 border-card bg-primary font-heading text-sm font-bold text-primary-foreground">
          {docente.initials}
        </div>
        <h3 className="mt-3 flex items-center gap-2 font-heading text-sm font-bold leading-tight text-foreground">
          <Award className="size-4 shrink-0 text-primary" />
          {docente.area}
        </h3>
        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{docente.exp}</p>
      </div>
    </SpotlightCard>
  )
}

export function Docentes() {
  const tarjetasDocentes = docentes.map((d) => (
    <div key={d.initials} className="w-[280px]">
      <TarjetaDocente docente={d} />
    </div>
  ))

  return (
    <section id="docentes" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 xl:grid-cols-[0.55fr_1.45fr]">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">Plana docente</span>
            <h2 className="mt-3 font-heading text-3xl font-bold text-balance md:text-4xl">Docentes calificados y comprometidos</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">
              Nuestro equipo está formado por profesionales con amplia experiencia en preparación preuniversitaria. Cada docente domina su materia y acompaña de cerca el progreso de cada estudiante.
            </p>
            <ul className="mt-6 space-y-3">
              {["Profesionales titulados y especializados", "Metodología práctica y resolución de exámenes", "Seguimiento personalizado del alumno"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-foreground">
                  <BadgeCheck className="size-5 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="xl:hidden grid gap-5 sm:grid-cols-2">
            {docentes.map((docente) => <TarjetaDocente key={docente.initials} docente={docente} />)}
          </div>
          <OrbitImages
            items={tarjetasDocentes}
            shape="circle"
            baseWidth={920}
            radius={300}
            duration={30}
            itemSize={280}
            rotation={0}
            showPath
            pathColor="rgba(225, 180, 62, 0.32)"
            pathWidth={1}
            responsive
            className="mx-auto hidden w-full max-w-[920px] xl:block"
            centerContent={
              <div className="rounded-full border border-primary/30 bg-background px-6 py-6 text-center shadow-lg backdrop-blur">
                <span className="block font-heading text-lg font-bold text-foreground">Sumaq Yachay</span>
                <span className="mt-1 block text-xs text-primary">Plana docente</span>
              </div>
            }
          />
        </div>
      </div>
    </section>
  )
}
