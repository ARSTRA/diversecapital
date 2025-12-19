import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, MessageSquare, Globe, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <Layout>
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground">
              Have questions about our investment opportunities or need
              assistance with your account? Our team of advisors is here to
              help.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-white p-8 rounded-[32px] shadow-sm border border-slate-100">
                <h3 className="text-2xl font-bold text-primary mb-8">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-primary">Email Us</p>
                      <p className="text-muted-foreground text-sm">
                        support@diverse-capital.com
                      </p>
                      <p className="text-muted-foreground text-sm">
                        invest@diverse-capital.com
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-primary">Call Us</p>
                      <p className="text-muted-foreground text-sm">
                        +44 (20) 1234 5678
                      </p>
                      <p className="text-muted-foreground text-sm">
                        +1 (555) 987-6543
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-primary">Visit Us</p>
                      <p className="text-muted-foreground text-sm">
                        123 Financial District
                      </p>
                      <p className="text-muted-foreground text-sm">
                        London, EC2V 6BT, UK
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary text-white p-8 rounded-[32px] shadow-xl">
                <h3 className="text-xl font-bold mb-4">Support Hours</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-white/10 text-sm">
                    <span>Monday - Friday</span>
                    <span className="font-bold">24 Hours</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/10 text-sm">
                    <span>Saturday</span>
                    <span className="font-bold">09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/10 text-sm">
                    <span>Sunday</span>
                    <span className="font-bold">Closed</span>
                  </div>
                </div>
                <div className="mt-8 p-4 bg-white/10 rounded-2xl flex items-center gap-3">
                  <Clock className="text-accent" />
                  <p className="text-xs">
                    Response time is typically under 2 hours during business
                    hours.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-10 rounded-[40px] shadow-xl shadow-primary/5 border border-slate-100">
                <h3 className="text-3xl font-bold text-primary mb-8">
                  Send us a Message
                </h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-primary ml-1">
                        Full Name
                      </label>
                      <Input
                        placeholder="John Doe"
                        className="h-14 rounded-2xl border-slate-200 bg-slate-50 focus:bg-white transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-primary ml-1">
                        Email Address
                      </label>
                      <Input
                        placeholder="john@example.com"
                        type="email"
                        className="h-14 rounded-2xl border-slate-200 bg-slate-50 focus:bg-white transition-all"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-primary ml-1">
                        Phone Number
                      </label>
                      <Input
                        placeholder="+1 (555) 000-0000"
                        className="h-14 rounded-2xl border-slate-200 bg-slate-50 focus:bg-white transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-primary ml-1">
                        Investment Interest
                      </label>
                      <select className="flex h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm focus:bg-white transition-all">
                        <option>General Inquiry</option>
                        <option>Cryptocurrency Mining</option>
                        <option>Real Estate</option>
                        <option>Gold Mining</option>
                        <option>Agriculture</option>
                        <option>Oil & Gas</option>
                        <option>Financial Services</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary ml-1">
                      Your Message
                    </label>
                    <Textarea
                      placeholder="How can we help you?"
                      className="min-h-[150px] rounded-2xl border-slate-200 bg-slate-50 focus:bg-white transition-all"
                    />
                  </div>
                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-white h-16 text-lg rounded-2xl shadow-lg shadow-secondary/20">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
