// components/navbar/Section.tsx
import React, { useState } from "react"
import { ChevronDown, MapPlus } from "lucide-react"
import { MobileItem } from "@/components/navbar/mobile-menu/MobileMenuSectionItem"
import { MobileSectionProps } from "@/types/navbarTypes"
import { mvps } from "@/data/productData"
import { Link } from "@tanstack/react-router"
import { cn } from "@/lib/utils"

export const MobileSection: React.FC<MobileSectionProps> = ({title, setIsSheetOpen}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  
  const items = [...mvps, 
    // { id: "explore", name: "Explore More", icon: () => <MapPlus />, link: "/products" }
  ]
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
           <MobileItem 
              key={item.id} title={item.name} 
              href={item.link ?? "/"} 
              icon={item.icon()}
            />
          ))}

          <Link
            to="/products"
            className="flex items-center gap-3 py-2 hover:bg-gray-100" 
            onClick={() => setIsSheetOpen(false)}
          >
            <div className="flex items-center gap-2">
              <MapPlus className="" />
              <div className="text-base font-medium leading-none">
                Explore More
              </div>
            </div>
          </Link>
        </div>
      )}
    </div>
  )
}