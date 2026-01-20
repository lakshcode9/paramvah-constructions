import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "General Construction",
    description: "Delivering complex construction projects with a focus on quality, safety, and timeliness.",
    image: "/HERO_MOBILE_STATIC.png", 
  },
  {
    title: "Interior Fit-Out",
    description: "Creating functional and inspiring interior spaces for commercial and residential clients.",
    image: "/HERO_MOBILE_STATIC.png", 
  },
  {
    title: "Construction Management",
    description: "Expert oversight and management ensuring project goals are met at every stage.",
    image: "/HERO_MOBILE_STATIC.png", 
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-background text-foreground">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-border/20 pb-8 gap-6">
          <div className="max-w-2xl">
            <h4 className="text-primary font-bold uppercase tracking-widest text-[10px] md:text-xs mb-4">Our Expertise</h4>
            <h2 className="text-3xl md:text-5xl font-black text-foreground uppercase tracking-tight leading-tight">
              We Don't Just Build. <br className="hidden md:block" /> We Create Solutions.
            </h2>
          </div>
          <Link href="/services" className="hidden md:flex items-center gap-2 text-foreground font-bold hover:text-primary transition-colors">
            VIEW ALL SERVICES <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group cursor-pointer border border-border/5 hover:border-primary/50 p-4 transition-all duration-300">
              <div className="relative aspect-[4/3] overflow-hidden bg-foreground/5 mb-6">
                 <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill 
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                 />
                 <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" /> 
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors uppercase tracking-wider">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6 font-light">
                {service.description}
              </p>
              <Link href="/services" className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest border-b border-primary/30 pb-1 hover:border-primary transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
        
        <div className="pt-12 md:hidden">
            <Link href="/services" className="flex items-center gap-2 text-foreground font-bold hover:text-primary transition-colors">
                VIEW ALL SERVICES <ArrowRight className="w-5 h-5" />
            </Link>
        </div>
      </div>
    </section>
  );
}
