import React, { useState, useEffect } from "react"
import { FlaskConical, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger, 
  NavigationMenuViewport 
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

import products from "@/data/productData"

import { MobileItem } from "@/components/navbar/mobile-menu/Item"
import { MobileSection } from "@/components/navbar/mobile-menu/Section"

import { MenuSection } from "@/components/navbar/MenuSection"
import { Link } from "@tanstack/react-router"

const Navbar: React.FC = () => {
  const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false)
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(null)
  const [prevScrollY, setPrevScrollY] = useState(0)
  const [isAtTop, setIsAtTop] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsAtTop(currentScrollY === 0)

      if (currentScrollY > prevScrollY) {
        setScrollDirection("down")
      } else if (currentScrollY < prevScrollY) {
        setScrollDirection("up")
      }

      setPrevScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [prevScrollY])

  const navbarClasses = cn("fixed top-0 left-0 right-0 w-full transition-all duration-300 z-50", {
    "bg-white/0 backdrop-blur-none": isAtTop,
    "bg-white/70 backdrop-blur-md shadow-sm": !isAtTop && scrollDirection === "down",
    "-translate-y-full": scrollDirection === "up" && !isAtTop,
  })

  return (
    <header className={navbarClasses}>
      <div className="flex h-16 items-center px-4 max-w-7xl mx-auto relative">
        <div className="flex items-center justify-between space-x-4 lg:space-x-12 w-full">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2"> 
            <FlaskConical className="h-6 w-6" color="#008080" />
            <span className="text-2xl font-semibold">C4E LABS</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList>
                {/* Products Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-auto p-2">
                    <Link to="/products">
                      <span className="flex items-center text-base">Products</span>
                    </Link>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-background">

                    <MenuSection items={products} />
                    
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    className={cn(
                      "group inline-flex h-auto w-max items-center justify-center rounded-md px-4 py-2 text-base font-medium transition-colors hover:bg-primary hover:text-background focus:bg-primary focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-primary/50 data-[state=open]:bg-primary/50",
                    )}
                    href="/"
                  >
                    Blog
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Pricing Menu Item */}
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className={cn(
                      "group inline-flex h-auto w-max items-center justify-center rounded-md px-4 py-2 text-base font-medium transition-colors hover:bg-primary hover:text-background focus:bg-primary focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-primary/50 data-[state=open]:bg-primary/50",
                    )}
                    href="/"
                  >
                    Community
                  </NavigationMenuLink>
                </NavigationMenuItem>

              </NavigationMenuList>
              <NavigationMenuViewport className="origin-top-center" />
            </NavigationMenu>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="hidden sm:block">
              <Button variant={"default"} className="text-base">
                Get in Touch
              </Button>
            </div>
          </div>

           {/* Mobile Menu */}
           <div className="lg:hidden order-last ml-4">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="default" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="w-[300px] p-0 flex flex-col"
              >
                <SheetHeader className="border-b p-4">
                  <SheetTitle className="flex items-center space-x-2">
                    <FlaskConical className="h-6 w-6" color="#008080" />
                    <span>C4E LABS</span>
                  </SheetTitle>
                </SheetHeader>

                {/* Scrollable Menu Content */}
                <div className="flex-grow overflow-y-auto">
                  <div className="space-y-2 pb-20">
                    <MobileSection title="Products" items={products} />

                    {/* Direct Links */}
                    <div className="border-b">
                      <MobileItem href="/" onClick={() => setIsSheetOpen(false)}>
                        Blog
                      </MobileItem>
                      <MobileItem href="/" onClick={() => setIsSheetOpen(false)}>
                        Community
                      </MobileItem>
                    </div>
                  </div>
                </div>

                {/* Sticky Bottom Auth Buttons */}
                <div className="sticky bottom-0 left-0 right-0 p-4 border-t bg-white">
                  <Button variant="default" className="w-full text-base">
                    Get in Touch
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>

        </div>
      </div>
    </header>
  )
}

export default Navbar