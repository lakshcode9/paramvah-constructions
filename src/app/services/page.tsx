import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Hammer, Home, Building2, PaintBucket, MoveRight } from "lucide-react";

const services = [
  {
    title: "Construction",
    desc: "From residential villas to commercial complexes, we handle end-to-end construction with a focus on structural integrity and timely delivery.",
    features: ["Turnkey Solutions", "Structural Engineering", "Site Management"],
    icon: Hammer,
  },
  {
    title: "Interiors",
    desc: "Transforming spaces into functional art. Our interior design team creates bespoke environments tailored to your lifestyle.",
    features: ["Space Planning", "Custom Furniture", "Lighting Design"],
    icon: PaintBucket,
  },
  {
    title: "Real Estate",
    desc: "Premium property development in Mangalore's most sought-after locations. Trustworthy documentation and clear titles.",
    features: ["Property Development", "Land Acquisition", "Legal Consultation"],
    icon: Building2,
  },
  {
    title: "PWD Projects",
    desc: "Executing public infrastructure projects with the highest standards of safety and quality control.",
    features: ["Roads & Bridges", "Public Buildings", "Govt Infrastructure"],
    icon: Home,
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-primary selection:text-white">
      <Navbar />

      {/* Header */}
      <section className="pt-40 pb-20 container mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">
          Our <span className="text-primary">Services</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl font-light">
           Comprehensive solutions for every stage of building. We deliver excellence across construction, interiors, and development.
        </p>
      </section>

      <Separators />

      {/* Services List */}
      <section className="py-20 container mx-auto px-6 space-y-24">
        {services.map((service, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center group">
            <div className={`order-2 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
              <div className="w-16 h-16 bg-white/5 flex items-center justify-center mb-6 text-primary border border-white/10 group-hover:border-primary transition-colors">
                <service.icon size={32} />
              </div>
              <h2 className="text-3xl font-heading text-white uppercase mb-4">{service.title}</h2>
              <p className="text-gray-400 text-lg mb-8 font-light leading-relaxed">
                {service.desc}
              </p>
              <ul className="space-y-3 mb-8">
                {service.features.map((feat, i) => (
                   <li key={i} className="flex items-center gap-3 text-gray-300">
                     <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                     {feat}
                   </li>
                ))}
              </ul>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black uppercase tracking-widest">
                Discuss Project <MoveRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
            
            <div className={`order-1 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
               <Card className="bg-white/5 border-0 aspect-video flex items-center justify-center rounded-none group-hover:bg-white/10 transition-colors">
                 <span className="text-gray-600 uppercase tracking-widest text-sm">Service Image Placeholder</span>
               </Card>
            </div>
          </div>
        ))}
      </section>

      <Footer />
    </main>
  );
}

function Separators() {
    return <Separator className="bg-white/10 max-w-7xl mx-auto" />
}
