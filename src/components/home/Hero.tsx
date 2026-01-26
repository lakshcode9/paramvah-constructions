"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center bg-background overflow-hidden">
      {/* Background Media */}
      <div className="absolute inset-0 w-full h-full opacity-60">
        {/* Desktop Assets */}
        <div className="hidden md:block w-full h-full relative">
            <Image
                src="/hero_realistic.png"
                alt="Paramvah Constructions Site"
                fill
                className="object-cover"
                priority
            />
            <video
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
                autoPlay
                muted
                playsInline
                onEnded={(e) => {
                    const target = e.target as HTMLVideoElement;
                    target.style.opacity = "0";
                }}
            >
                <source src="/HERO_COMPUTER_SCREEN.mp4" type="video/mp4" />
            </video>
        </div>

        {/* Mobile Assets */}
        <div className="block md:hidden w-full h-full relative">
             <Image
                src="/hero_realistic.png"
                alt="Paramvah Constructions Site"
                fill
                className="object-cover"
                priority
            />
            <video
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
                autoPlay
                muted
                playsInline
                onEnded={(e) => {
                     const target = e.target as HTMLVideoElement;
                     target.style.opacity = "0";
                }}
            >
                <source src="/HERO_MOBILE_SCREEN.mp4" type="video/mp4" />
            </video>
        </div>
      </div>

      {/* Overlay Content */}
      <div className="container mx-auto px-6 relative z-10 text-foreground py-20 pb-40 md:pb-32">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-black uppercase tracking-normal leading-tight mb-8">
            Building for <br />
            <span className="text-primary">Tomorrow</span>
          </h1>

          <p className="text-lg md:text-2xl text-foreground/80 max-w-2xl font-light mb-12 uppercase tracking-wide">
            Paramvah delivers complex projects with precision, safety, and operational excellence. 
          </p>

          <div className="flex gap-4">
             <Button className="bg-primary hover:bg-primary/90 text-background text-base md:text-lg font-bold px-6 py-5 md:px-8 md:py-7 rounded-none uppercase tracking-widest transition-all hover:scale-105 active:scale-95">
               View Our Work
             </Button>
          </div>
        </div>
      </div>

      {/* Bottom Bar / Stats */}
      <div className="absolute bottom-0 left-0 w-full bg-background/90 backdrop-blur-md py-4 hidden md:block border-t border-primary/10">
        <div className="container mx-auto px-6 flex justify-between items-center text-foreground/80">
           <div className="flex gap-12">
              <div>
                <span className="block text-2xl font-bold text-foreground">ESTD</span>
                <span className="text-[10px] uppercase tracking-[0.2em] opacity-70">2026 VISION</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-foreground">100%</span>
                <span className="text-[10px] uppercase tracking-[0.2em] opacity-70">Safety Record</span>
              </div>
           </div>
           
           <div className="flex gap-4">
             <Button variant="outline" size="icon" className="rounded-full border-foreground/20 text-foreground hover:bg-foreground hover:text-background">
               <ArrowLeft className="w-4 h-4" />
             </Button>
             <Button variant="outline" size="icon" className="rounded-full border-foreground/20 text-foreground hover:bg-foreground hover:text-background">
               <ArrowRight className="w-4 h-4" />
             </Button>
           </div>
        </div>
      </div>
    </section>
  );
}
