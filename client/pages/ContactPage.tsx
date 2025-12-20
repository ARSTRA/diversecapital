import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle2,
  Globe,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const contactMethods = [
  {
    icon: <Mail className="w-8 h-8" />,
    title: "Email Us",
    description: "Send us a message and we'll respond within 2 hours",
    details: ["support@diverse-capital.com", "invest@diverse-capital.com"],
  },
  {
    icon: <Phone className="w-8 h-8" />,
    title: "Call Us",
    description: "Talk directly with our investment specialists",
    details: ["+44 (20) 1234 5678", "+1 (555) 987-6543"],
  },
  {
    icon: <MapPin className="w-8 h-8" />,
    title: "Visit Us",
    description: "Meet with us at our headquarters",
    details: ["123 Financial District", "London, EC2V 6BT, UK"],
  },
];

const supportHours = [
  { day: "Monday - Friday", hours: "24 Hours" },
  { day: "Saturday", hours: "09:00 - 18:00" },
  { day: "Sunday", hours: "Closed" },
];

const teamMembers = [
  {
    name: "Sarah Mitchell",
    role: "Lead Advisor",
    image: "https://images.pexels.com/photos/7736038/pexels-photo-7736038.jpeg",
  },
  {
    name: "Michael Chen",
    role: "Support Specialist",
    image: "https://images.pexels.com/photos/7681362/pexels-photo-7681362.jpeg",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          date: new Date().toISOString(),
          isRead: false,
        }),
      });

      toast.success("Message sent successfully! We'll be in touch soon.");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary via-primary to-primary/95 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <img
            src="https://images.pexels.com/photos/5716001/pexels-photo-5716001.jpeg"
            alt="Team"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Get in <span className="text-secondary">Touch</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Have questions about our investment opportunities or need
              assistance with your account? Our dedicated team of financial
              advisors is here to help you achieve your investment goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method) => (
              <Card
                key={method.title}
                className="border-none shadow-sm rounded-[32px] overflow-hidden hover:shadow-xl transition-all duration-500 bg-white"
              >
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center mb-6">
                    {method.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    {method.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6">
                    {method.description}
                  </p>
                  <div className="space-y-2">
                    {method.details.map((detail, idx) => (
                      <p key={idx} className="text-sm font-medium text-primary">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Contact Form */}
            <div>
              <h2 className="text-4xl font-bold text-primary mb-4">
                Send us a <span className="text-secondary">Message</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Fill out the form below and our team will get back to you as
                soon as possible. We typically respond within 2 hours during
                business hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary ml-1">
                      Full Name *
                    </label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="John Doe"
                      className="h-14 rounded-2xl border-slate-200 bg-slate-50 focus:bg-white transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary ml-1">
                      Email Address *
                    </label>
                    <Input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="john@example.com"
                      className="h-14 rounded-2xl border-slate-200 bg-slate-50 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary ml-1">
                      Phone Number
                    </label>
                    <Input
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="+1 (555) 000-0000"
                      className="h-14 rounded-2xl border-slate-200 bg-slate-50 focus:bg-white transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary ml-1">
                      Subject *
                    </label>
                    <Input
                      required
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      placeholder="How can we help?"
                      className="h-14 rounded-2xl border-slate-200 bg-slate-50 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary ml-1">
                    Message *
                  </label>
                  <Textarea
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell us more about your inquiry..."
                    className="min-h-[150px] rounded-2xl border-slate-200 bg-slate-50 focus:bg-white transition-all"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-secondary hover:bg-secondary/90 text-white h-14 rounded-2xl font-bold text-lg shadow-lg shadow-secondary/20 transition-all disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </form>
            </div>

            {/* Right Side - Info & Image */}
            <div className="space-y-8">
              {/* Support Hours Card */}
              <Card className="border-none shadow-sm rounded-[32px] overflow-hidden bg-slate-50">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center">
                      <Clock className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary">
                      Support Hours
                    </h3>
                  </div>
                  <div className="space-y-4">
                    {supportHours.map((item) => (
                      <div
                        key={item.day}
                        className="flex justify-between items-center pb-4 border-b border-slate-200 last:border-0"
                      >
                        <span className="text-primary font-medium">
                          {item.day}
                        </span>
                        <span className="text-secondary font-bold">
                          {item.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-primary/5 rounded-2xl flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <p className="text-sm text-primary font-medium">
                      Average response time is under 2 hours during business
                      hours
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Team Preview */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-primary">
                  Your dedicated advisors
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {teamMembers.map((member) => (
                    <div
                      key={member.name}
                      className="rounded-[24px] overflow-hidden bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all"
                    >
                      <div className="aspect-square overflow-hidden bg-slate-100">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-4 text-center">
                        <p className="font-bold text-primary text-sm mb-0.5">
                          {member.name}
                        </p>
                        <p className="text-secondary text-xs font-bold uppercase tracking-wider">
                          {member.role}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button
                  variant="outline"
                  className="w-full rounded-2xl border-slate-200 font-bold hover:border-secondary hover:text-secondary"
                >
                  Schedule a Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Quick Answers to Common{" "}
              <span className="text-secondary">Questions</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Check out our FAQ section for answers to frequently asked
              questions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Getting Started",
                icon: "🚀",
              },
              {
                title: "Investments",
                icon: "📈",
              },
              {
                title: "Security",
                icon: "🔒",
              },
              {
                title: "Support",
                icon: "💬",
              },
            ].map((faq) => (
              <a
                key={faq.title}
                href="/faq"
                className="p-6 rounded-[24px] bg-white border border-slate-100 hover:border-secondary hover:shadow-lg transition-all text-center group"
              >
                <p className="text-4xl mb-3">{faq.icon}</p>
                <h4 className="font-bold text-primary group-hover:text-secondary transition-colors">
                  {faq.title}
                </h4>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary to-primary/90 rounded-[60px] p-12 lg:p-24 relative overflow-hidden">
            <div className="absolute right-0 bottom-0 w-1/3 h-full opacity-10">
              <Globe className="w-full h-full text-secondary" />
            </div>

            <div className="max-w-2xl relative z-10">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to invest?
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Join thousands of investors building their wealth with Diverse
                Capital. Get started today and take control of your financial
                future.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-white px-10"
                >
                  Get Started
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-white/20 hover:bg-white/10 px-10"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
