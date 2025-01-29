// components/navbar/Section.tsx
import React, { useState } from "react"
import { ChevronDown, MapPlus } from "lucide-react"
import { MobileSectionItem } from "@/components/navbar/mobile-menu/SectionItem"
import { ProductInterface } from "@/types/productTypes"

export const MobileSection = ( props : { title : string, items : ProductInterface[]} ) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const products = props.items.slice(0,3)
  const items = [...products, 
    { id: "explore", name: "Explore More", icon: () => <MapPlus />, link: "/products" }
  ]
  return (
    <div className="border-b">
      <div 
        className="flex justify-between items-center py-3 px-4 cursor-pointer" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-md">{props.title}</span>
        <ChevronDown 
          className={`w-5 h-5 transform transition-transform ${isOpen ? "rotate-180" : ""}`} 
        />
      </div>
      {isOpen && (
        <div className="pl-4 pb-2">
          {items.map((item) => (
           <MobileSectionItem 
              key={item.id} 
              title={item.name} 
              href={item.link ?? "/"} 
              icon={item.icon()}
            />
          ))}


          
        </div>
      )}
    </div>
  )
}