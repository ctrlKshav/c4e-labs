import React, { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import type { MenuSectionProps } from "@/types/navbar/menu"
import { MenuSectionItem } from "@/components/navbar/MenuSectionItem"

export const MenuSection: React.FC<MenuSectionProps> = ({ title, items }) => {

  return (  
        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 ">
          {items.map((item) => (
            <MenuSectionItem
              key={item.title}
              title={item.title}
              href={item.href}
              icon={item.icon}
              description={item.description}
            >
              {item.description}
            </MenuSectionItem>
          ))}
        </ul>
  )
}
