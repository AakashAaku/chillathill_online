import type { FC } from "react"

interface LogoProps {
  className?: string
}

export const Logo: FC<LogoProps> = ({ className }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-rose-500" fill="currentColor">
        <path d="M16 0C7.16 0 0 7.16 0 16s7.16 16 16 16 16-7.16 16-16S24.84 0 16 0zm0 27c-6.07 0-11-4.93-11-11S9.93 5 16 5s11 4.93 11 11-4.93 11-11 11zm5-11c0 2.76-2.24 5-5 5s-5-2.24-5-5 2.24-5 5-5 5 2.24 5 5z" />
      </svg>
      <span className="ml-2 text-xl font-bold text-rose-500">ChillAtHill</span>
    </div>
  )
}

