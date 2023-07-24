import { ButtonHTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface ButtonRootProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export function ButtonRoot ({ children, ...rest }: ButtonRootProps) {
  return (
    <button {...rest}
      className={twMerge('flex items-center justify-center gap-2 text-sm text-zinc-50 font-semibold p-2 rounded-md bg-sky-800 hover:bg-sky-700', rest.className)}>
      {children}
    </button>
  )
}
