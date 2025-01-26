import type { ReactNode } from "react";

export interface MenuSectionProps {
    title: string;
    items: MenuSectionItemProps[];
  };
  
export interface MenuSectionItemProps extends React.ComponentPropsWithoutRef<"a">{
    title: string
    href: string
    icon?: ReactNode
    description?: string
    items?: MenuSectionItemProps[]
  };
  