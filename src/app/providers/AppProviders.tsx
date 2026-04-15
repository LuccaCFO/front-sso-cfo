import type { PropsWithChildren } from 'react'
import '../styles/global.css'

type AppProvidersProps = PropsWithChildren

export function AppProviders({ children }: AppProvidersProps) {
  return children
}
