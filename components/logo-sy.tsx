import { useId } from "react"

import { cn } from "@/lib/utils"

type LogoSYProps = {
  className?: string
  withName?: boolean
}

/** SVG del emblema de Sumaq Yachay, preparado para una rotación 3D externa. */
export function LogoSY({ className, withName = false }: LogoSYProps) {
  const centerX = 210
  const shieldScale = 1.05
  const outlineScale = 1.05
  const shieldTransform = `translate(${centerX} 0) scale(${shieldScale}) translate(-${centerX} 0)`
  const outlineTransform = `translate(${centerX} 0) scale(${outlineScale} 1) translate(-${centerX} 0)`
  const gradientId = `sy-gold-${useId().replace(/:/g, "")}`
  const depthStyle = { transform: "translateZ(-12px)", transformStyle: "preserve-3d" as const }

  return (
    <svg
      viewBox={withName ? "0 0 420 525" : "0 0 420 430"}
      className={cn("h-auto w-full", className)}
      role="img"
      aria-label="Logo Academia Preuniversitaria Sumaq Yachay"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transformStyle: "preserve-3d" }}
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fbc908" />
          <stop offset="1" stopColor="#fbc908" />
        </linearGradient>
      </defs>

      {/* Capa posterior amarilla: se ve solo cuando un contenedor rota el SVG. */}
      <g transform={shieldTransform}>
        <g data-logo-depth="shield" style={depthStyle}>
          <path
            d="M47 7 H373 V75 C373 203 313 332 210 421 C107 332 47 203 47 75 Z"
            fill="#fbc908"
            transform={outlineTransform}
          />
        </g>
      </g>

      {/* Cara frontal: escudo, título y monograma se escalan desde el mismo eje. */}
      <g transform={shieldTransform}>
        <path
          d="M47 7 H373 V75 C373 203 313 332 210 421 C107 332 47 203 47 75 Z"
          fill="#0a1137"
          stroke={`url(#${gradientId})`}
          strokeWidth="5"
          strokeLinejoin="round"
          transform={outlineTransform}
        />

        <path d="M56 16 H364" stroke={`url(#${gradientId})`} strokeWidth="7" />
        <text
          x={centerX}
          y="61"
          fill={`url(#${gradientId})`}
          fontFamily="Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif"
          fontSize="29"
          fontStretch="condensed"
          letterSpacing="-0.5"
          textAnchor="middle"
        >
          ACADEMIA PREUNIVERSITARIA
        </text>

        <g transform={`translate(${centerX} 275) skewX(-2) scale(.78 1.18) translate(-${centerX} -275)`}>
          <text
            x={centerX}
            y="337"
            fill={`url(#${gradientId})`}
            fontFamily="Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif"
            fontSize="278"
            fontWeight="900"
            letterSpacing="-28"
            textAnchor="middle"
          >
            S Y
          </text>
        </g>
      </g>

      {withName && (
        <>
          {/* Grosor amarillo de la firma, oculto por la cara frontal al verla de frente. */}
          <text
            data-logo-depth="name"
            x={centerX}
            y="503"
            fill="#fbc908"
            fontFamily="'Brush Script MT', 'Segoe Script', cursive"
            fontSize="72"
            fontStyle="italic"
            fontWeight="100"
            letterSpacing="-3"
            textAnchor="middle"
            style={depthStyle}
          >
            Sumaq Yachay
          </text>
          <text
            x={centerX}
            y="503"
            fill={`url(#${gradientId})`}
            fontFamily="'Brush Script MT', 'Segoe Script', cursive"
            fontSize="72"
            fontStyle="italic"
            fontWeight="100"
            letterSpacing="-3"
            textAnchor="middle"
          >
            Sumaq Yachay
          </text>
        </>
      )}
    </svg>
  )
}
