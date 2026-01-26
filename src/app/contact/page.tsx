import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground pt-20">
      <Navbar />

      <section className="py-24 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <div>
            <h1 className="text-5xl md:text-7xl font-black text-foreground mb-8 uppercase tracking-tighter">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground font-light mb-12">
              Ready to start your project? We are here to answer your questions and discuss your vision.
            </p>

            <div className="space-y-8">
               <div className="flex items-start gap-4">
                 <div className="w-12 h-12 bg-white/5 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                 </div>
                 <div>
                   <h3 className="text-lg font-heading uppercase text-foreground mb-1">Phone</h3>
                   <p className="text-muted-foreground">+91 95356 76939</p>
                 </div>
               </div>
               
               <Separator className="bg-white/10" />

               <div className="flex items-start gap-4">
                 <div className="w-12 h-12 bg-white/5 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                 </div>
                 <div>
                   <h3 className="text-lg font-heading uppercase text-foreground mb-1">Email</h3>
                   <p className="text-muted-foreground">paramvahconstructions24@gmail.com</p>
                 </div>
               </div>

                <Separator className="bg-white/10" />

               <div className="flex items-start gap-4">
                 <div className="w-12 h-12 bg-white/5 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                 </div>
                 <div>
                   <h3 className="text-lg font-heading uppercase text-foreground mb-1">Office</h3>
                   <p className="text-muted-foreground">Mangalore, Karnataka, India</p>
                   <p className="text-muted-foreground/60 text-sm mt-1">Visit by appointment only.</p>
                 </div>
               </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white/5 p-8 md:p-12 border border-border/10 rounded-2xl">
            <h3 className="text-2xl font-heading uppercase text-foreground mb-8">Send a Message</h3>
            <form 
              name="contact" 
              method="POST" 
              data-netlify="true" 
              className="space-y-6"
              action="/contact?success=true"
            >
              <input type="hidden" name="form-name" value="contact" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-muted-foreground uppercase text-xs tracking-widest">First Name</Label>
                  <Input id="firstName" name="firstName" placeholder="John" className="bg-background border-border/10 text-foreground placeholder:text-muted-foreground/50 focus-visible:ring-primary h-12" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-muted-foreground uppercase text-xs tracking-widest">Last Name</Label>
                  <Input id="lastName" name="lastName" placeholder="Doe" className="bg-background border-border/10 text-foreground placeholder:text-muted-foreground/50 focus-visible:ring-primary h-12" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-muted-foreground uppercase text-xs tracking-widest">Email</Label>
                <Input id="email" name="email" type="email" placeholder="john@example.com" className="bg-background border-border/10 text-foreground placeholder:text-muted-foreground/50 focus-visible:ring-primary h-12" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-muted-foreground uppercase text-xs tracking-widest">Message</Label>
                <Textarea id="message" name="message" placeholder="Tell us about your project..." className="bg-background border-border/10 text-foreground placeholder:text-muted-foreground/50 focus-visible:ring-primary min-h-[150px]" required />
              </div>

              <Button type="submit" size="lg" className="w-full bg-primary text-white hover:bg-primary/90 font-heading uppercase tracking-widest h-14 text-lg">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
