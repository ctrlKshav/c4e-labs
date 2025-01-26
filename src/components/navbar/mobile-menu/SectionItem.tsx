// components/navbar/MobileLinkItem.tsx
import React from "react"
import type { MobileMenuSectionItemProps } from "@/types/navbar/mobile-menu"

export const MobileSectionItem: React.FC<{ item: MobileMenuSectionItemProps }> = ({ item }) => {
  return (
    <a 
      href={item.href} 
      className="flex items-center gap-3 py-2 hover:bg-gray-100" 
      target={item.href.startsWith('http') ? "_blank" : undefined}
      rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
    >
      {item.icon}
      <div>
        <div className="font-medium text-base">{item.title}</div>
        <p className="text-sm text-gray-500 mt-1">{item.description}</p>
      </div>
    </a>
  )
} 
