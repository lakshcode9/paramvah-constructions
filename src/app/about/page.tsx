import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground pt-20">
      <Navbar />

      {/* Hero */}
      <section className="py-20 container mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-black text-[#030C1D] mb-6 uppercase tracking-tighter">
          About <span className="text-primary">Paramvah</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl font-light leading-relaxed">
          Rooted in Mangalore, built on the pillars of integrity and precision. We are more than a construction company; we are partners in building your legacy.
        </p>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
           <div className="relative aspect-square md:aspect-[4/5] w-full max-w-md mx-auto overflow-hidden rounded-2xl group">
             <Image 
               src="/founder.jpg" 
               alt="Samvith Nair"
               fill
               className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
             />
             <div className="absolute inset-0 border border-primary/50 translate-x-4 translate-y-4 -z-10 hidden md:block" />
           </div>
           
           <div>
             <h3 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Founder's Note</h3>
             <h2 className="text-5xl md:text-7xl font-black text-foreground uppercase tracking-tight mb-8">Samvith Nair</h2>
             <div className="space-y-6 text-gray-300 font-light leading-relaxed">
               <p>
                 "Construction is not just about concrete and steel; it's about promises kept and dreams realized. At Paramvah, we believe in a disciplined, no-nonsense approach to building."
               </p>
               <p>
                 "Our mission is simple: To deliver structures that stand the test of time, both in durability and design. We are committed to the long-term growth of Mangalore and Karnataka."
               </p>
             </div>
             
             <div className="mt-10">
               <Image 
                src="/logo-new.png" 
                alt="Signature" 
                width={100} 
                height={50} 
                className="opacity-50"
               />
             </div>
           </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 container mx-auto px-6">
        <h2 className="text-3xl font-heading text-white mb-12 text-center">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Integrity", desc: "Honesty in every brick, transparency in every transaction." },
            { title: "Precision", desc: "Obsessive attention to detail in engineering and finishing." },
            { title: "Accountability", desc: "We own our work. No excuses, just results." },
            { title: "Durability", desc: "Building structures designed to last for generations." },
          ].map((val, i) => (
            <Card key={i} className="bg-transparent border border-white/10 hover:border-primary transition-colors rounded-none">
              <CardHeader>
                <CardTitle className="text-primary text-xl font-heading uppercase tracking-wide">{val.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 font-body">{val.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
