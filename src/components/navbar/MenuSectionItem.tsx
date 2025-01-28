﻿import React from "react"
import { NavigationMenuLink } from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { MenuSectionItemProps } from "@/types/navbar"


export const MenuSectionItem : React.FC<MenuSectionItemProps> = (
  ({ title, children, icon, ...props }) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            className={cn(
              "group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary hover:text-background focus:bg-primary focus:text-accent-foreground",
            )}
            {...props}
          >
            <div className="flex items-center gap-2">
              {icon}
              <div className="text-base font-medium leading-none">{title}</div>
            </div>
            {children && (
              <p className="line-clamp-2 text-base leading-snug text-muted-foreground group-hover:text-inherit">
                {children}
              </p>
            )}
          </a>
        </NavigationMenuLink>
      </li>
    )
  }
)
MenuSectionItem.displayName = "MenuSectionItem"
