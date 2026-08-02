import { LogoSY } from "@/components/logo-sy"

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background/80 py-12">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <LogoSY className="h-12 w-auto" />
            <div>
              <p className="font-heading text-lg font-bold text-foreground">Sumaq Yachay</p>
              <p className="text-xs uppercase tracking-widest text-primary">
                Academia Preuniversitaria
              </p>
            </div>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Educación de calidad para escuela, colegio y preparación preuniversitaria con docentes
            calificados.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-bold text-foreground">Enlaces</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><a href="#niveles" className="hover:text-primary">Niveles</a></li>
            <li><a href="#cursos" className="hover:text-primary">Cursos</a></li>
            <li><a href="#docentes" className="hover:text-primary">Docentes</a></li>
            <li><a href="#precios" className="hover:text-primary">Precios</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold text-foreground">Contacto</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>WhatsApp: +51 999 999 999</li>
            <li>informes@sumaqyachay.edu.pe</li>
            <li>Av. Educación 123</li>
            <li>Lun a Sáb · 8:00 - 20:00</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-border/60 px-4 pt-6">
        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Academia Preuniversitaria Sumaq Yachay. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  )
}
