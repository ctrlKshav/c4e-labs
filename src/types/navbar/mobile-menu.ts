import type { ReactNode } from "react"

export interface MobileMenuItemProps {
  href: string
  className?: string
  children: ReactNode
  onClick?: () => void
}

export interface MobileMenuSectionProps {
  title: string
  items: MobileMenuSectionItemProps[]
}

export interface MobileMenuSectionItemProps {
  title: string
  href: string
  description: string
  icon: ReactNode
  features?: string[]
  items?: MobileMenuSectionItemProps[]
}
