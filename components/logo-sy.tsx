import { useId } from "react"

import { cn } from "@/lib/utils"

type LogoSYProps = {
  className?: string
  withName?: boolean
}

/**
 * Versión SVG del emblema original de Sumaq Yachay.
 */
export function LogoSY({ className, withName = false }: LogoSYProps) {
  // Este es el único eje horizontal del logo. Todos los textos se anclan a él.
  const centerX = 210
  const shieldScale = 1.05
  const outlineScale = 1.14
  const shieldTransform = `translate(${centerX} 0) scale(${shieldScale}) translate(-${centerX} 0)`
  const outlineTransform = `translate(${centerX} 0) scale(${shieldScale}1) translate(-${centerX} 0)`
  const gradientId = `sy-gold-${useId().replace(/:/g, "")}`

  return (
    <svg
      viewBox={withName ? "0 0 420 525" : "0 0 420 430"}
      className={cn("h-auto w-full", className)}
      role="img"
      aria-label="Logo Academia Preuniversitaria Sumaq Yachay"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fbc908" />
          <stop offset="1" stopColor="#fbc908" />
        </linearGradient>
      </defs>

      {/* El escudo, título y monograma escalan juntos desde su centro. */}
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
      )}
    </svg>
  )
}
