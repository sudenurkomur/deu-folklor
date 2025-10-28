import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { path: "/", label: "Anasayfa" },
  { path: "/projeler", label: "Projeler" },
  { path: "/etkinlikler", label: "Etkinlikler" },
  { path: "/hakkimizda", label: "Hakkımızda" },
  { path: "/iletisim", label: "İletişim" },
]

export function Navbar() {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Skip to main content link */}
      <a href="#main-content" className="skip-link">
        Ana içeriğe atla
      </a>

      <nav className="sticky top-0 z-50 w-full border-b bg-background">
        <div className="container mx-auto px-4">
          <div className="flex h-24 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src="/images/dfat_logo.png"
                alt="9 Eylül Folklore Topluluğu"
                className="h-20 w-auto"
              />
              <span className="ml-3 text-xl font-semibold text-primary tracking-wide"></span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-6">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary/80",
                      isActive
                        ? "text-primary border-b-2 border-primary pb-1"
                        : "text-primary/70"
                    )}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </div>

            {/* Mobile Menu Button */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" aria-label="Menüyü aç">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[280px] sm:w-[300px]">
                <div className="flex flex-col space-y-4">
                  {navItems.map((item) => {
                    const isActive = location.pathname === item.path
                    return (
                      <SheetClose key={item.path} asChild>
                        <Link
                          to={item.path}
                          className={cn(
                            "text-lg font-medium transition-colors hover:text-primary/80",
                            isActive
                              ? "text-primary border-l-4 border-primary pl-3"
                              : "text-primary/70 pl-3"
                          )}
                        >
                          {item.label}
                        </Link>
                      </SheetClose>
                    )
                  })}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </>
  )
}

