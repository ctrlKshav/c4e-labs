// components/navbar/MobileMenuItem.tsx
import React from "react"
import type { MobileMenuItemProps } from "@/types/navbar/mobile-menu"

export const MobileItem: React.FC<MobileMenuItemProps> = ({ href, children, onClick, className}) => (
  <a href={href} onClick={onClick} className={`block py-3 px-4 hover:bg-gray-100 transition-colors text-base  ${className}`} >
    {children}
  </a>
)