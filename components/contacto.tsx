"use client"

import { useState } from "react"
import { Clock, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import SplitFlapText from './SplitFlapText'

// Datos de contacto de la academia (edítalos con los reales)
const WHATSAPP = "51999999999"
const CORREO = "informes@sumaqyachay.edu.pe"

export function Contacto() {
  const [nombre, setNombre] = useState("")
  const [curso, setCurso] = useState("")
  const [mensaje, setMensaje] = useState("")

  const texto = encodeURIComponent(
    `Hola, soy ${nombre || "[nombre]"}. Estoy interesado(a) en ${
      curso || "los cursos"
    } de la academia Sumaq Yachay.${mensaje ? ` ${mensaje}` : ""}`,
  )
  const whatsappUrl = `https://wa.me/${WHATSAPP}?text=${texto}`
  const mailUrl = `mailto:${CORREO}?subject=${encodeURIComponent(
    "Consulta de inscripción - Sumaq Yachay",
  )}&body=${texto}`

  return (
    <section id="contacto" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Contáctanos
          </span>
          <h2 className="mt-3 w-full overflow-visible font-heading text-3xl font-bold text-balance md:text-4xl">
            <SplitFlapText
              words={["¿Listo para empezar?", "     Escríbenos"]}
              flipDuration={0.12}
              stagger={0.06}
              cycleDelay={2400}
              charset="alphanumeric"
              flipsPerChar={8}
              tileColor="#040d27"
              textColor="#f8fafc"
              tileRadius={"clamp(3px, 1vw, 8px)"}
              gap={"clamp(2px, 0.5vw, 5px)"}
              fontSize={"clamp(13px, 4.2vw, 32px)"}
              loop
              padTo={20}
            />
          </h2>
          <p className="mt-4 text-muted-foreground text-pretty">
            Resolvemos tus dudas y te ayudamos con la matrícula por WhatsApp o correo.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Información de contacto */}
          <div className="flex flex-col gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-border/60 bg-card/60 p-5 backdrop-blur transition-all hover:border-primary/50 hover:glow-gold"
            >
              <div className="rounded-xl bg-primary/15 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <MessageCircle className="size-6" />
              </div>
              <div>
                <p className="font-heading font-bold text-foreground">WhatsApp</p>
                <p className="text-sm text-muted-foreground">+51 999 999 999 · Respuesta rápida</p>
              </div>
            </a>

            <a
              href={mailUrl}
              className="group flex items-center gap-4 rounded-2xl border border-border/60 bg-card/60 p-5 backdrop-blur transition-all hover:border-primary/50 hover:glow-gold"
            >
              <div className="rounded-xl bg-primary/15 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Mail className="size-6" />
              </div>
              <div>
                <p className="font-heading font-bold text-foreground">Correo electrónico</p>
                <p className="text-sm text-muted-foreground">{CORREO}</p>
              </div>
            </a>

            <div className="flex items-center gap-4 rounded-2xl border border-border/60 bg-card/60 p-5 backdrop-blur">
              <div className="rounded-xl bg-primary/15 p-3 text-primary">
                <Phone className="size-6" />
              </div>
              <div>
                <p className="font-heading font-bold text-foreground">Teléfono</p>
                <p className="text-sm text-muted-foreground">(01) 555 1234</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 rounded-2xl border border-border/60 bg-card/60 p-5 backdrop-blur">
                <MapPin className="size-5 shrink-0 text-primary" />
                <p className="text-sm text-muted-foreground">Av. Educación 123, tu ciudad</p>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-border/60 bg-card/60 p-5 backdrop-blur">
                <Clock className="size-5 shrink-0 text-primary" />
                <p className="text-sm text-muted-foreground">Lun a Sáb · 8:00 - 20:00</p>
              </div>
            </div>
          </div>

          {/* Formulario que arma el mensaje */}
          <form
            onSubmit={(e) => {
              e.preventDefault()
              window.open(whatsappUrl, "_blank")
            }}
            className="rounded-3xl border border-border/60 bg-card/60 p-6 backdrop-blur md:p-8"
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="nombre" className="mb-1.5 block text-sm font-medium text-foreground">
                  Nombre completo
                </label>
                <input
                  id="nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Tu nombre"
                  className="w-full rounded-lg border border-input bg-background/60 px-4 py-2.5 text-sm text-foreground outline-none ring-primary/40 focus:ring-2"
                />
              </div>
              <div>
                <label htmlFor="curso" className="mb-1.5 block text-sm font-medium text-foreground">
                  Curso o plan de interés
                </label>
                <input
                  id="curso"
                  value={curso}
                  onChange={(e) => setCurso(e.target.value)}
                  placeholder="Ej. Preuniversitaria, Matemática..."
                  className="w-full rounded-lg border border-input bg-background/60 px-4 py-2.5 text-sm text-foreground outline-none ring-primary/40 focus:ring-2"
                />
              </div>
              <div>
                <label htmlFor="mensaje" className="mb-1.5 block text-sm font-medium text-foreground">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  rows={4}
                  placeholder="Cuéntanos qué necesitas"
                  className="w-full resize-none rounded-lg border border-input bg-background/60 px-4 py-2.5 text-sm text-foreground outline-none ring-primary/40 focus:ring-2"
                />
              </div>
              <Button type="submit" size="lg" className="w-full font-semibold">
                <Send className="size-4" />
                Enviar por WhatsApp
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                También puedes escribirnos directo a nuestro{" "}
                <a href={mailUrl} className="text-primary underline-offset-2 hover:underline">
                  correo
                </a>
                .
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
