"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion, useAnimationFrame } from "motion/react"
import { Calculator, ChevronRight, Compass, FunctionSquare, MessageSquareText, Sigma, Triangle, X } from "lucide-react"
import SpotlightCard from "@/components/SpotlightCard"

const easeOutExpo = [0.16, 1, 0.3, 1] as const
const spring = { type: "spring" as const, stiffness: 200, damping: 20 }

const cursos = [
  { icon: Calculator, name: "Matemática", desc: "Aritmética, fracciones y resolución de problemas.", detail: "El cálculo mental se vuelve visual: descomponemos, compensamos y reunimos cantidades para llegar al resultado.", topics: ["Descomposición", "Fracciones", "Problemas"] },
  { icon: MessageSquareText, name: "Comunicación", desc: "Comprensión lectora, gramática y redacción.", detail: "Una lectura sólida conecta la información con una idea clave y una conclusión bien fundamentada.", topics: ["Lectura crítica", "Gramática", "Redacción"] },
  { icon: Sigma, name: "Razonamiento Matemático", desc: "Lógica, sucesiones y análisis de problemas.", detail: "No memorizamos una respuesta: hacemos visible la regla que transforma cada término de la secuencia.", topics: ["Lógica", "Sucesiones", "Estrategias"] },
  { icon: Triangle, name: "Trigonometría", desc: "Razones, identidades y resolución de triángulos.", detail: "El círculo unitario conecta ángulo, proyecciones y la curva senoidal en un mismo movimiento.", topics: ["Círculo unitario", "Seno y coseno", "Identidades"] },
  { icon: Compass, name: "Geometría", desc: "Figuras, áreas, volúmenes y demostraciones.", detail: "Una demostración visual del Teorema de Pitágoras: las áreas de los catetos equivalen al área de la hipotenusa.", topics: ["Pitágoras", "Áreas", "Demostraciones"] },
  { icon: FunctionSquare, name: "Álgebra", desc: "Ecuaciones, polinomios, funciones y sistemas.", detail: "Una función no es estática: su vértice se traslada y su ecuación describe exactamente ese cambio.", topics: ["Funciones", "Traslaciones", "Raíces"] },
]

function SvgDefs() {
  return (
    <defs>
      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="3.5" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <linearGradient id="strokeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.3" />
        <stop offset="100%" stopColor="var(--primary)" stopOpacity="1" />
      </linearGradient>
    </defs>
  )
}

function AnimatedTitle({ title }: { title: string }) {
  return <h3 id="course-dialog-title" aria-label={title} className="font-heading text-2xl font-bold text-gradient-gold sm:text-3xl">{Array.from(title).map((letter, index) => <motion.span aria-hidden key={`${letter}-${index}`} className="inline-block" initial={{ opacity: 0, y: 12, filter: "blur(5px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ delay: index * .055, duration: .4, ease: easeOutExpo }}>{letter === " " ? "\u00a0" : letter}</motion.span>)}</h3>
}

function MathVisual() {
  return (
    <svg viewBox="0 0 340 250" className="h-full w-full" role="img" aria-label="Estrategia de cálculo mental: doce más ocho se reorganiza para formar veinte">
      <SvgDefs />
      <motion.text x="34" y="37" className="fill-muted-foreground text-[14px]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>12 = 10 + 2</motion.text>
      <motion.text x="208" y="37" className="fill-muted-foreground text-[14px]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.08, duration: 0.4 }}>8 = 10 − 2</motion.text>

      <motion.rect x="30" y="57" width="120" height="42" rx="10" className="fill-primary/85" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.5, ease: easeOutExpo }} style={{ transformOrigin: "30px 78px" }} />
      <motion.rect x="154" y="57" width="24" height="42" rx="8" className="fill-primary/40" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, ...spring }} />
      <motion.rect x="192" y="57" width="120" height="42" rx="10" className="fill-primary/85" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.08, duration: 0.5, ease: easeOutExpo }} style={{ transformOrigin: "192px 78px" }} />

      {/* Partícula "+2/-2" viajando con estela */}
      <motion.circle
        r="9" className="fill-primary" filter="url(#glow)"
        initial={{ opacity: 0, cx: 166, cy: 78 }}
        animate={{ opacity: [0, 1, 1, 0], cx: [166, 176, 176], cy: [78, 130, 130] }}
        transition={{ delay: 0.55, duration: 0.65, ease: easeOutExpo }}
      />
      <motion.path
        d="M172 100v55m-7-7 7 7 7-7"
        className="stroke-primary" strokeWidth="2.5" filter="url(#glow)"
        initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
        transition={{ delay: 0.55, duration: 0.35 }}
      />

      <motion.rect
        x="70" y="180" width="200" height="42" rx="10" className="fill-primary" filter="url(#glow)"
        initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
        transition={{ delay: 1.05, duration: 0.5, ease: easeOutExpo }}
        style={{ transformOrigin: "170px 201px" }}
      />
      <motion.text
        x="170" y="208" textAnchor="middle" className="fill-primary-foreground text-[21px] font-bold"
        initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.35, ...spring }}
      >
        10 + 10 = 20
      </motion.text>
    </svg>
  )
}

function CommunicationVisual() {
  const nodes = [[30, 95, "TEXTO"], [132, 45, "IDEA"], [235, 95, "CONCLUSIÓN"]] as const
  return (
    <svg viewBox="0 0 340 250" className="h-full w-full" role="img" aria-label="Flujo de comprensión lectora desde un texto hasta una conclusión">
      <SvgDefs />
      <motion.path
        d="M108 111 C130 111 120 76 140 76 M205 76 C225 76 220 111 238 111"
        fill="none" stroke="url(#strokeGradient)" strokeWidth="3" strokeDasharray="6 6"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
        transition={{ delay: 0.2, duration: 0.6, ease: easeOutExpo }}
      />
      {nodes.map(([x, y, text], index) => (
        <motion.g
          key={text}
          initial={{ opacity: 0, y: 14, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: index * 0.08, ...spring }}
        >
          <motion.rect
            x={x} y={y} width={index === 2 ? 82 : 76} height="42" rx="10"
            className={index === 1 ? "fill-primary" : "fill-card stroke-primary"}
            strokeWidth="2"
            filter={index === 1 ? "url(#glow)" : undefined}
            animate={index === 1 ? { filter: ["url(#glow)", "brightness(1.15) url(#glow)", "url(#glow)"] } : undefined}
            transition={index === 1 ? { duration: 1.8, repeat: Infinity, ease: "easeInOut" } : undefined}
          />
          <text x={x + (index === 2 ? 41 : 38)} y={y + 26} textAnchor="middle" className={index === 1 ? "fill-primary-foreground text-[12px] font-bold" : "fill-foreground text-[11px] font-bold"}>{text}</text>
        </motion.g>
      ))}
      <motion.rect
        x="121" y="156" width="100" height="29" rx="8" className="fill-primary/15 stroke-primary" strokeWidth="1"
        initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.55, ...spring }}
      />
      <motion.text x="171" y="175" textAnchor="middle" className="fill-primary text-[12px] font-bold" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }}>comprender</motion.text>
    </svg>
  )
}

function ReasoningVisual() {
  const values = [2, 4, 8, 16]
  return (
    <svg viewBox="0 0 340 250" className="h-full w-full" role="img" aria-label="Secuencia de números duplicándose: dos, cuatro, ocho, dieciséis, treinta y dos">
      <SvgDefs />
      <defs>
        <marker id="arrow" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
          <path d="M0,0 L0,6 L7,3 z" className="fill-primary" />
        </marker>
      </defs>
      {values.map((value, index) => (
        <motion.g key={value} initial={{ opacity: 0, scale: 0.7, y: 10 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ delay: index * 0.07, ...spring }}>
          <rect x={18 + index * 76} y="88" width="48" height="48" rx="12" className="fill-primary/15 stroke-primary" strokeWidth="2" />
          <text x={42 + index * 76} y="119" textAnchor="middle" className="fill-primary text-[20px] font-bold">{value}</text>
          {index < 3 && (
            <>
              <motion.path
                d={`M ${67 + index * 76} 112 H ${88 + index * 76}`}
                stroke="url(#strokeGradient)" strokeWidth="2.5" markerEnd="url(#arrow)"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                transition={{ delay: 0.18 + index * 0.1, duration: 0.3 }}
              />
              <motion.text
                x={77 + index * 76} y="76" textAnchor="middle" className="fill-muted-foreground text-[13px] font-bold"
                initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.32 + index * 0.1 }}
              >
                ×2
              </motion.text>
            </>
          )}
        </motion.g>
      ))}
      <motion.g initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.75, ...spring }}>
        <motion.rect
          x="247" y="164" width="58" height="48" rx="12" className="fill-primary stroke-primary" strokeWidth="2" filter="url(#glow)"
          animate={{ filter: ["url(#glow)", "brightness(1.2) url(#glow)", "url(#glow)"] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        />
        <text x="276" y="195" textAnchor="middle" className="fill-primary-foreground text-[20px] font-bold">32</text>
      </motion.g>
      <motion.path d="M276 139v20" stroke="url(#strokeGradient)" strokeWidth="2.5" markerEnd="url(#arrow)" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.68, duration: 0.25 }} />
    </svg>
  )
}

function TrigonometryVisual() {
  const [angle, setAngle] = useState(0)
  useAnimationFrame((time) => setAngle((time % 4000) / 4000 * Math.PI * 2))
  const cx = 101, cy = 119, r = 64
  const px = cx + Math.cos(angle) * r, py = cy - Math.sin(angle) * r
  const trail = Array.from({ length: 8 }, (_, i) => {
    const a = angle - i * 0.09
    return { x: cx + Math.cos(a) * r, y: cy - Math.sin(a) * r, o: 1 - i / 8 }
  })
  const sinePoints = Array.from({ length: 71 }, (_, i) => {
    const a = Math.max(0, angle - Math.PI * 2) + (i / 70) * Math.min(angle, Math.PI * 2)
    return `${194 + i * 1.82},${119 - Math.sin(a) * 44}`
  }).join(" ")

  return (
    <svg viewBox="0 0 340 250" className="h-full w-full" role="img" aria-label="Círculo unitario con proyecciones seno, coseno y curva senoidal sincronizada">
      <SvgDefs />
      <path d="M25 119H177M101 35V203M187 119H327" className="stroke-muted-foreground" strokeWidth="1.5" />
      <circle cx={cx} cy={cy} r={r} className="fill-primary/10 stroke-primary" strokeWidth="2.5" />
      <path d={`M${cx} ${cy} L${px} ${py} L${px} ${cy} Z`} className="fill-primary/15 stroke-primary" strokeWidth="2" />
      <path d={`M${px} ${py} V${cy} M${cx} ${py} H${px}`} className="stroke-primary" strokeWidth="1.5" strokeDasharray="4 4" />

      {/* Estela del punto orbitando */}
      {trail.map((t, i) => (
        <circle key={i} cx={t.x} cy={t.y} r={4 - i * 0.35} fill="var(--primary)" opacity={t.o * 0.35} />
      ))}

      <circle cx={px} cy={py} r="6" className="fill-primary" filter="url(#glow)" />

      <polyline points={sinePoints} fill="none" stroke="url(#strokeGradient)" strokeWidth="3" strokeLinecap="round" filter="url(#glow)" />

      <text x="14" y="28" className="fill-primary text-[13px] font-bold">círculo unitario</text>
      <text x="213" y="45" className="fill-primary text-[14px] font-bold">sin(θ) = {Math.sin(angle).toFixed(2)}</text>
      <text x="213" y="67" className="fill-foreground text-[14px] font-bold">cos(θ) = {Math.cos(angle).toFixed(2)}</text>
      <text x={px + 8} y={py - 8} className="fill-primary text-[16px] font-bold">θ</text>
    </svg>
  )
}

function GeometryVisual() {
  return (
    <svg viewBox="0 0 340 260" className="h-full w-full" role="img" aria-label="Demostración del Teorema de Pitágoras con tres cuadrados sobre un triángulo rectángulo">
      {/* Triángulo base */}
      <path d="M105 160V80H185Z" className="fill-card stroke-foreground" strokeWidth="3" />

      {/* Marca de ángulo recto en el vértice A */}
      <motion.path
        d="M115 80V90H105"
        fill="none"
        className="stroke-foreground"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 0.3, duration: 0.35 }}
      />

      {/* Cuadrado a² — sobre el cateto AC (vertical) */}
      <motion.rect
        x="25" y="80" width="80" height="80"
        className="fill-primary/25 stroke-primary" strokeWidth="2"
        initial={{ opacity: 0, scale: 0.7, originX: 1, originY: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.55, ease: easeOutExpo }}
      />

      {/* Cuadrado b² — sobre el cateto AB (horizontal) */}
      <motion.rect
        x="105" y="0" width="80" height="80"
        className="fill-primary/40 stroke-primary" strokeWidth="2"
        initial={{ opacity: 0, scale: 0.7, originX: 0, originY: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.12, duration: 0.55, ease: easeOutExpo }}
      />

      {/* Cuadrado c² — sobre la hipotenusa BC */}
      <motion.polygon
        points="185,80 105,160 185,240 265,160"
        className="fill-primary/60 stroke-primary" strokeWidth="2"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.6, ease: easeOutExpo }}
        style={{ transformOrigin: "185px 160px" }}
      />

      {/* Redibuja el triángulo encima para que no quede tapado por c² */}
      <path d="M105 160V80H185Z" className="fill-card stroke-foreground" strokeWidth="3" />
      <path d="M115 80V90H105" fill="none" className="stroke-foreground" strokeWidth="2" />

      {/* Flechas de convergencia: demuestran a² + b² = c² */}
      <motion.path
        d="M65 120 Q125 145 175 158"
        fill="none" className="stroke-primary" strokeWidth="2" strokeDasharray="4 4"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
        transition={{ delay: 1.5, duration: 1.6, ease: "easeInOut", repeat: Infinity, repeatDelay: 1 }}
      />
      <motion.path
        d="M145 40 Q168 100 183 152"
        fill="none" className="stroke-primary" strokeWidth="2" strokeDasharray="4 4"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
        transition={{ delay: 1.65, duration: 1.6, ease: "easeInOut", repeat: Infinity, repeatDelay: 1 }}
      />
      <motion.circle
        cx="185" cy="160" r="10"
        className="fill-primary"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 1.3, 1], opacity: [0, 1, 0.9] }}
        transition={{ delay: 2.9, duration: 0.5, repeat: Infinity, repeatDelay: 2.7 }}
      />

      {/* Etiquetas */}
      <motion.text x="65" y="125" textAnchor="middle" className="fill-primary text-[17px] font-bold" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}>a²</motion.text>
      <motion.text x="145" y="45" textAnchor="middle" className="fill-primary text-[17px] font-bold" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.57 }}>b²</motion.text>
      <motion.text x="200" y="165" textAnchor="middle" className="fill-primary-foreground text-[18px] font-bold" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}>c²</motion.text>

      <motion.text x="170" y="255" textAnchor="middle" className="fill-foreground text-[15px] font-bold" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.25 }}>
        a² + b² = c²
      </motion.text>
    </svg>
  )
}

function AlgebraVisual() {
  const [progress, setProgress] = useState(0)
  useAnimationFrame((time) => setProgress((Math.sin((time / 2600) * Math.PI * 2 - Math.PI / 2) + 1) / 2))
  const point = (x: number) => {
    const localX = x / 38
    const y = (localX - 2 * progress) ** 2 + progress
    return [170 + x, 193 - y * 20]
  }
  const path = Array.from({ length: 61 }, (_, i) => {
    const [x, y] = point(-76 + i * 2.54)
    return `${i === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`
  }).join(" ")
  const [vx, vy] = point(2 * progress * 38)
  const vertexTrail = Array.from({ length: 6 }, (_, i) => {
    const p = Math.max(0, progress - i * 0.04)
    return point(2 * p * 38)
  })

  return (
    <svg viewBox="0 0 340 250" className="h-full w-full" role="img" aria-label="Parábola que se traslada desde f de x igual x al cuadrado hasta f de x igual x menos dos al cuadrado más uno">
      <SvgDefs />
      <path d="M35 193H315M170 30V214" className="stroke-muted-foreground" strokeWidth="1.5" />
      <path d={path} fill="none" stroke="url(#strokeGradient)" strokeWidth="4" strokeLinecap="round" filter="url(#glow)" />

      {/* Estela del vértice trasladándose */}
      {vertexTrail.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={5 - i * 0.6} fill="var(--primary)" opacity={(1 - i / 6) * 0.3} />
      ))}
      <circle cx={vx} cy={vy} r="6" className="fill-primary" filter="url(#glow)" />

      <motion.circle
        cx="170" cy="193" r="7" fill="none" className="stroke-primary" strokeWidth="2"
        animate={{ opacity: [1, 0.3, 1], scale: [1, 1.15, 1] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
      />

      <AnimatePresence mode="wait">
        <motion.text
          key={progress < 0.5 ? "a" : "b"}
          x="40" y="51" className="fill-primary text-[15px] font-bold"
          initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 4 }}
          transition={{ duration: 0.25 }}
        >
          {progress < 0.5 ? "f(x) = x²" : "f(x) = (x − 2)² + 1"}
        </motion.text>
      </AnimatePresence>

      <text x="40" y="73" className="fill-muted-foreground text-[13px]">vértice → ({(2 * progress).toFixed(1)}, {progress.toFixed(1)})</text>
      <text x="40" y="218" className="fill-muted-foreground text-[12px]">raíz doble: x = 0</text>
    </svg>
  )
}

function CourseVisual({ index }: { index: number }) { return [<MathVisual key="math" />, <CommunicationVisual key="communication" />, <ReasoningVisual key="reasoning" />, <TrigonometryVisual key="trig" />, <GeometryVisual key="geometry" />, <AlgebraVisual key="algebra" />][index] }

export function Cursos() {
  const [selectedCourse, setSelectedCourse] = useState<number | null>(null)
  const selected = selectedCourse === null ? null : cursos[selectedCourse]
  useEffect(() => { const close = (event: KeyboardEvent) => event.key === "Escape" && setSelectedCourse(null); window.addEventListener("keydown", close); return () => window.removeEventListener("keydown", close) }, [])
  return <section id="cursos" className="relative py-20 md:py-28"><div className="grid-bg absolute inset-0 opacity-40" aria-hidden /><div className="relative mx-auto max-w-6xl px-4"><div className="mx-auto max-w-2xl text-center"><span className="text-sm font-semibold uppercase tracking-widest text-primary">Cursos</span><h2 className="mt-3 font-heading text-3xl font-bold text-balance md:text-4xl">Cursos que dominamos</h2><p className="mt-4 text-muted-foreground text-pretty">Preparación completa en las materias clave para el examen de admisión y el colegio.</p></div><div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{cursos.map((c, index) => <SpotlightCard key={c.name} spotlightColor="oklch(from var(--primary) l c h / .2)" className="course-card rounded-2xl border-border/60 bg-card/60 p-0 shadow-none transition-[transform,border-color,box-shadow] duration-300 hover:border-primary/60 hover:shadow-[0_8px_30px_-8px_var(--primary)]"><button type="button" onClick={() => setSelectedCourse(index)} data-course={index} className="group block w-full p-6 text-left focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-primary"><div className="flex items-center gap-4"><div className="course-icon inline-flex rounded-xl bg-primary/15 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"><c.icon className="size-6" /></div><h3 className="font-heading text-lg font-bold text-foreground">{c.name}</h3></div><p className="mt-4 text-sm leading-relaxed text-muted-foreground">{c.desc}</p><span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">Explorar curso <ChevronRight className="size-4 transition-transform group-hover:translate-x-1" /></span></button></SpotlightCard>)}</div></div><AnimatePresence>{selected && selectedCourse !== null && <motion.div className="fixed inset-0 z-50 grid place-items-center bg-background/75 p-3 backdrop-blur-sm sm:p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={() => setSelectedCourse(null)}><motion.article role="dialog" aria-modal="true" aria-labelledby="course-dialog-title" className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-primary/40 bg-card shadow-[0_8px_40px_-8px_var(--primary)]" initial={{ opacity: 0, y: 20, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 18, scale: .98 }} transition={spring} onMouseDown={event => event.stopPropagation()}><motion.div className="absolute inset-x-0 top-0 h-px bg-primary" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: .1, duration: .65, ease: easeOutExpo }} /><button type="button" onClick={() => setSelectedCourse(null)} className="absolute right-4 top-4 z-10 grid size-10 place-items-center rounded-full bg-background/70 text-foreground transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-primary" aria-label="Cerrar detalle del curso"><X className="size-5" /></button><div className="grid md:grid-cols-2"><div className="relative min-h-64 overflow-hidden bg-linear-to-br from-primary/15 via-card to-secondary/40 p-4 sm:min-h-80 sm:p-8"><div className="absolute inset-0 opacity-40 [background:radial-gradient(circle_at_30%_20%,var(--primary),transparent_0%)]" aria-hidden /><div className="relative h-64 sm:h-72"><CourseVisual key={selected.name} index={selectedCourse} /></div></div><div className="p-7 sm:p-10"><div className="inline-flex rounded-xl bg-primary/15 p-3 text-primary"><selected.icon className="size-6" /></div><div className="mt-5"><AnimatedTitle title={selected.name} /></div><p className="mt-4 leading-relaxed text-muted-foreground">{selected.detail}</p><div className="mt-7 flex flex-wrap gap-2">{selected.topics.map((topic, index) => <motion.span key={topic} className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .3 + index * .07, ease: easeOutExpo }}>{topic}</motion.span>)}</div></div></div></motion.article></motion.div>}</AnimatePresence></section>
}


