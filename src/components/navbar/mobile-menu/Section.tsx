// components/navbar/Section.tsx
import React, { useState } from "react"
import { ChevronDown } from "lucide-react"
import type { MobileMenuSectionProps } from "@/types/navbar/mobile-menu"
import { MobileSectionItem } from "@/components/navbar/mobile-menu/SectionItem"

export const MobileSection: React.FC<MobileMenuSectionProps> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div className="border-b">
      <div 
        className="flex justify-between items-center py-3 px-4 cursor-pointer" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-md">{title}</span>
        <ChevronDown 
          className={`w-5 h-5 transform transition-transform ${isOpen ? "rotate-180" : ""}`} 
        />
      </div>
      {isOpen && (
        <div className="pl-4 pb-2">
          {items.map((item) => (
           <MobileSectionItem key={item.title} item={item} />
          ))}
        </div>
      )}
    </div>
  )
}