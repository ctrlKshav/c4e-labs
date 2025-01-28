// components/navbar/MobileLinkItem.tsx
import React from "react"
import { MenuSectionItemProps } from "@/types/navbar"

export const MobileSectionItem: React.FC<MenuSectionItemProps> = (
  ({ title, href, icon, children, ...props }) => {
  return (
    <a 
      href={href} 
      className="flex items-center gap-3 py-2 hover:bg-gray-100" 
      target={href.startsWith('http') ? "_blank" : undefined}
      rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
    >
      {icon}
      <div>
        <div className="font-medium text-base">{title}</div>
        <p className="text-sm text-gray-500 mt-1">{children}</p>
      </div>
    </a>
  )
} 
)
