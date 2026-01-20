import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border/10 pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          
          {/* Founder Section */}
          <div className="lg:col-span-4">
            <div className="relative group overflow-hidden rounded-2xl mb-8 aspect-square md:aspect-[4/5] max-w-[180px]">
              <Image 
                src="/founder.jpg" 
                alt="Founder of Paramvah Construction" 
                fill 
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
            </div>
            <h3 className="text-2xl font-black uppercase tracking-tight text-foreground mb-2">The Vision</h3>
            <p className="text-muted-foreground font-light leading-relaxed uppercase text-[10px] tracking-[0.2em] mb-1">Founder's Note</p>
            <h4 className="text-lg font-bold uppercase tracking-tight text-primary mb-4">Samvith Nair</h4>
            <p className="text-muted-foreground font-light leading-relaxed uppercase text-xs tracking-widest mb-6 italic">
              "Construction is not just about concrete and steel; it's about promises kept and dreams realized. At Paramvah, we believe in a disciplined, no-nonsense approach to building."
            </p>
            <div className="flex gap-4">
              <Link href="#" className="p-2 border border-primary/20 rounded-full hover:bg-primary hover:text-background transition-all">
                <Linkedin className="w-4 h-4" />
              </Link>
              <Link href="#" className="p-2 border border-primary/20 rounded-full hover:bg-primary hover:text-background transition-all">
                <Instagram className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-8">Navigation</h4>
            <ul className="grid grid-cols-2 lg:grid-cols-1 gap-y-4 gap-x-8">
              {["Who We Are", "What We Do", "Projects", "Our Process", "Careers"].map((link) => (
                <li key={link}>
                  <Link href={`/${link.toLowerCase().replace(/ /g, "-")}`} className="text-lg md:text-xl font-bold uppercase tracking-tight hover:text-primary transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-5">
            <h4 className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-8">Get In Touch</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <p className="text-foreground font-light uppercase text-[10px] md:text-sm tracking-wider leading-relaxed">
                    1st floor, Udupa Complex<br />
                    opp Ram Mandir, Kapikad Road<br />
                    Kinnigoli, Mangalore 574150
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  <p className="text-foreground font-bold tracking-tight text-sm md:text-base">+91 95356 76939</p>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-primary shrink-0" />
                  <p className="text-foreground font-bold tracking-tight text-sm md:text-base">hello@paramvah.com</p>
                </div>
              </div>
              <div className="bg-primary/5 p-6 md:p-8 border border-primary/10 rounded-2xl">
                <h5 className="text-base md:text-lg font-black uppercase tracking-tight mb-4 text-primary">Start Your Project</h5>
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest leading-relaxed mb-6">
                  Ready to translate your vision into reality? Contact our experts today.
                </p>
                <Link href="/contact" className="inline-block bg-primary text-background font-bold uppercase tracking-widest text-[10px] px-6 py-3 hover:scale-105 transition-transform">
                  Book A Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 md:pt-12 border-t border-border/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[8px] md:text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-bold">
          <p className="text-center md:text-left">© 2026 Paramvah Construction . All Rights Reserved.</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
