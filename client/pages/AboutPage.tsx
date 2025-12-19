import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Users,
  Target,
  Award,
  Globe2,
  ShieldCheck,
  TrendingUp,
  Mail,
} from "lucide-react";

export default function AboutPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 bg-primary text-white overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Our Mission: <span className="text-secondary">Democratizing</span>{" "}
              Global Wealth
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Diverse Capital was founded on the principle that high-yield,
              institutional-grade investment opportunities should be accessible
              to everyone, not just the financial elite.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Transparency",
                desc: "We believe in full disclosure. Every asset is audited and verified by independent third parties.",
                icon: <Globe2 className="w-10 h-10" />,
              },
              {
                title: "Security",
                desc: "Your capital is protected by institutional-grade security protocols and regulatory compliance.",
                icon: <ShieldCheck className="w-10 h-10" />,
              },
              {
                title: "Growth",
                desc: "We focus on high-potential sectors that deliver consistent, long-term value for our investors.",
                icon: <TrendingUp className="w-10 h-10" />,
              },
            ].map((value) => (
              <div
                key={value.title}
                className="space-y-4 p-8 rounded-3xl bg-slate-50 border border-slate-100"
              >
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-secondary">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-primary">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">
              Our Leadership Team
            </h2>
            <p className="text-lg text-muted-foreground">
              A diverse group of experts in finance, technology, and engineering
              working together to build the future of investing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Marcus Thorne",
                role: "CEO & Founder",
                image: "https://i.pravatar.cc/300?img=68",
              },
              {
                name: "Elena Rodriguez",
                role: "Chief Investment Officer",
                image: "https://i.pravatar.cc/300?img=45",
              },
              {
                name: "Dr. Sam Chen",
                role: "Head of Crypto Mining",
                image: "https://i.pravatar.cc/300?img=12",
              },
              {
                name: "Sarah Jenkins",
                role: "Head of Real Estate",
                image: "https://i.pravatar.cc/300?img=32",
              },
            ].map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-[32px] overflow-hidden border border-slate-200 shadow-sm group"
              >
                <div className="h-64 relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h4 className="font-bold text-primary text-xl">
                    {member.name}
                  </h4>
                  <p className="text-secondary font-medium">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-secondary rounded-[60px] p-12 lg:p-24 text-center text-white relative overflow-hidden">
            <div className="relative z-10 max-w-3xl mx-auto space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold">
                Interested in Our Vision?
              </h2>
              <p className="text-xl text-white/80">
                Join our community of over 25,000 investors and start building
                your diversified portfolio today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/signup">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-white px-10 h-14 text-lg"
                  >
                    Get Started Now
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-white border-white/40 hover:bg-white/10 px-10 h-14 text-lg"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
