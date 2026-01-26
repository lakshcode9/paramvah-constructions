import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";

// Placeholder data
const projects = [
  {
    id: 1,
    title: "Skyline Residency",
    category: "Residential",
    location: "Mangalore",
    image: "/projects/residential.png",
  },
  {
    id: 2,
    title: "Tech Park One",
    category: "Commercial",
    location: "Bangalore",
    image: "/projects/commercial.png",
  },
  {
    id: 3,
    title: "Ocean View Villa",
    category: "Interiors",
    location: "Udupi",
    image: "/projects/interiors.png",
  },
   {
    id: 4,
    title: "City Center Mall",
    category: "Real Estate",
    location: "Mangalore",
    image: "/projects/retail.png",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground pt-20">
      <Navbar />
      
      {/* Header */}
      <section className="py-20 container mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-black text-[#030C1D] mb-6 uppercase tracking-tighter">
          Our <span className="text-primary">Projects</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl font-light">
          A showcase of our commitment to excellence, innovation, and durable construction across Karnataka.
        </p>
      </section>

      {/* Grid */}
      <section className="pb-24 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="group bg-transparent border-0 overflow-hidden rounded-none relative aspect-video">
               <Image 
                 src={project.image}
                 alt={project.title}
                 fill
                 className="object-cover transition-transform duration-700 group-hover:scale-110"
               />
               <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <span className="text-primary text-sm uppercase tracking-widest font-bold mb-2">{project.category}</span>
                  <CardTitle className="text-3xl text-white font-heading uppercase">{project.title}</CardTitle>
                  <p className="text-gray-300 mt-1">{project.location}</p>
               </div>
            </Card>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
