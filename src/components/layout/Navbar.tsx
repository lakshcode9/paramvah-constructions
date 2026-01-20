"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import CinematicSwitch from "@/components/ui/cinematic-glow-toggle";

const navLinks = [
  { name: "Who We Are", href: "/about" },
  { name: "What We Do", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-background/90 backdrop-blur-md border-b border-border/10",
        scrolled ? "py-2 shadow-sm" : "py-4"
      )}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
           <div className="relative w-12 h-12">
             <Image 
              src="/logo-bg-removed.png" 
              alt="Paramvah Constructions"  
              fill
              className="object-contain dark:invert dark:filter"
             />
           </div>
           <div className="flex flex-col">
             <span className="text-2xl font-bold tracking-widest text-foreground leading-none">
               PARAMVAH
             </span>
             <span className="text-[0.7rem] uppercase tracking-[0.3em] text-primary/80 font-bold">
               Constructions
             </span>
           </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-semibold uppercase tracking-wider text-foreground/80 hover:text-primary transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all group-hover:w-full" />
            </Link>
          ))}
          <CinematicSwitch />
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-4">
          <CinematicSwitch />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-foreground">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-background text-foreground border-l-border">
              <SheetHeader className="text-left">
                <SheetTitle className="text-2xl font-black uppercase tracking-widest text-primary">Menu</SheetTitle>
                <SheetDescription className="sr-only">
                  Navigate through Paramvah Constructions's services and projects.
                </SheetDescription>
              </SheetHeader>
              <div className="mt-10 flex flex-col gap-6">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.name}>
                    <Link
                      href={link.href}
                      className="text-2xl font-bold uppercase text-foreground hover:text-primary transition-colors tracking-widest"
                    >
                      {link.name}
                    </Link>
                  </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

