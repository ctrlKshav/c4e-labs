import type React from "react"
import { cn } from "@/lib/utils"

export const BentoGrid: React.FC<{
  className?: string
  children?: React.ReactNode
}> = ({ className, children }) => {
  return (
    <div className={cn("grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-8 min-w-[80vw] mx-auto", className)}>
      {children}
    </div>
  )
}

interface BentoGridItemProps {
  className?: string
  title?: string | React.ReactNode
  description?: string | React.ReactNode
  header?: React.ReactNode
  icon?: React.ReactNode
}

export const BentoGridItem: React.FC<BentoGridItemProps> = ({ className, title, description, header, icon }) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 bg-transparent/5 text-foreground border border-border justify-between flex flex-col space-y-4",
        className,
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200 text-foreground">
        <div className="">
          {icon}
          <div className="font-bold text-foreground mb-2 mt-2">{title}</div>
        </div>
        <div   className="font-normal text-foreground text-sm">{description}</div>
      </div>
    </div>
  )
}

