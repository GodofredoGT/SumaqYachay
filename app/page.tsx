import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Niveles } from "@/components/niveles"
import { Cursos } from "@/components/cursos"
import { Docentes } from "@/components/docentes"
import { Carrusel } from "@/components/carrusel"
import { Precios } from "@/components/precios"
import { Contacto } from "@/components/contacto"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Niveles />
      <Cursos />
      <Docentes />
      <Carrusel />
      <Precios />
      <Contacto />
      <Footer />
    </main>
  )
}
