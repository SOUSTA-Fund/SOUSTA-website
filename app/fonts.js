import { PT_Sans, PT_Serif } from 'next/font/google'

export const pt_serif = PT_Serif({
  subsets: ['latin'],
  variable: '--font-pt_serif',
  weight: ['400'],
})

export const pt_sans = PT_Sans({
  subsets: ['latin'],
  variable: '--font-pt_sans',
  weight: ['400'],
})
