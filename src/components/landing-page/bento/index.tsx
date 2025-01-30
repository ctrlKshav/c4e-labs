"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

import { motion } from "framer-motion";
import {items} from "@/data/bentoData"

export function C4ELabsBentoGrid() {
  return (
    <div className="py-24 bg-gradient-radial-stripe">
    <BentoGrid className="max-w-5xl mx-auto md:auto-rows-[20rem] bg-gradient-radial-quad rounded-xl">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
    </div>
  );
}

export default C4ELabsBentoGrid;