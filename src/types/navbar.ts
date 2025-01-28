import type { ReactNode } from "react"

export interface MenuSectionItemProps{
    title: string
    href: string
    icon?: ReactNode
    children?: ReactNode
  };

export interface MobileMenuItemProps {
  href: string
  className?: string
  children: ReactNode
  onClick?: () => void
}
