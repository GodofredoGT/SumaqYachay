import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Niveles } from "@/components/niveles"
import { Cursos } from "@/components/cursos"
import { Docentes } from "@/components/docentes"
import { Carrusel } from "@/components/carrusel"
import { Precios } from "@/components/precios"
import { Contacto } from "@/components/contacto"
import { Footer } from "@/components/footer"
import SplashCursor from "@/components/SplashCursor"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <SplashCursor
        SIM_RESOLUTION={128}
        DYE_RESOLUTION={1440}
        DENSITY_DISSIPATION={3.5}
        VELOCITY_DISSIPATION={2}
        PRESSURE={0.1}
        CURL={3}
        SPLAT_RADIUS={0.2}
        SPLAT_FORCE={6000}
        COLOR_UPDATE_SPEED={10}
      />
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
