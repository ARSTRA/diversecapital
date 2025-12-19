import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  MapPin, 
  TrendingUp, 
  Users,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  Home,
  Briefcase,
  Trees,
  DollarSign
} from "lucide-react";

const properties = [
  {
    title: "Luxury Residential Tower",
    location: "London, Canary Wharf",
    returns: "8.5% p.a.",
    status: "Fully Funded",
    type: "Residential",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Tech Hub Office Complex",
    location: "Austin, Texas",
    returns: "11.2% p.a.",
    status: "Opening Soon",
    type: "Commercial",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Eco-Friendly Resort",
    location: "Bali, Indonesia",
    returns: "14.5% p.a.",
    status: "Active",
    type: "Hospitality",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Logistics Distribution Center",
    location: "Hamburg, Germany",
    returns: "9.8% p.a.",
    status: "Active",
    type: "Industrial",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
  },
];

export default function RealEstatePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?auto=format&fit=crop&q=80&w=2000" 
            alt="Real Estate Hero"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl space-y-6">
            <Badge className="bg-secondary text-white border-none py-1.5 px-4 text-sm mb-4">
              Prime Global Assets
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Invest in Premier <span className="text-secondary">Real Estate</span> Portfolios
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Build your wealth through high-yield, professionally managed properties. From luxury residential to strategic commercial developments, access global real estate markets with fractional ownership.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-8">
                View Available Assets
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white/20 hover:bg-white/10 px-8">
                How it Works
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Invest Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-primary leading-tight">The Power of Fractional Real Estate Investing</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Traditionally, high-yield real estate was reserved for institutional investors or the ultra-wealthy. We've democratized access, allowing you to invest in premium assets with smaller capital outlays.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Stable Cash Flow", desc: "Regular rental income distributions paid directly to your wallet.", icon: <DollarSign className="w-5 h-5" /> },
                  { title: "Capital Appreciation", desc: "Benefit from long-term property value growth in prime markets.", icon: <TrendingUp className="w-5 h-5" /> },
                  { title: "Low Entry Barrier", desc: "Start with as little as $1,000 and build a diversified property portfolio.", icon: <Briefcase className="w-5 h-5" /> },
                  { title: "Zero Hassle", desc: "We handle all property management, maintenance, and tenant relations.", icon: <Home className="w-5 h-5" /> },
                ].map((item) => (
                  <div key={item.title} className="p-6 rounded-2xl bg-slate-50 space-y-3">
                    <div className="w-10 h-10 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center">
                      {item.icon}
                    </div>
                    <h4 className="font-bold text-primary">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200" 
                alt="Luxury Property"
                className="rounded-[40px] shadow-2xl"
              />
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl hidden md:block">
                <div className="flex items-center gap-6">
                  <div className="text-center px-4">
                    <p className="text-3xl font-bold text-primary">12.4%</p>
                    <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Avg. Annual Yield</p>
                  </div>
                  <div className="w-px h-12 bg-slate-200" />
                  <div className="text-center px-4">
                    <p className="text-3xl font-bold text-secondary">25+</p>
                    <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Global Assets</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Showcase */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div className="max-w-2xl space-y-4">
              <h2 className="text-4xl font-bold text-primary">Current Opportunities</h2>
              <p className="text-lg text-muted-foreground">
                Explore our hand-picked selection of high-yield properties currently open for investment.
              </p>
            </div>
            <div className="flex gap-2">
              {['All', 'Residential', 'Commercial', 'Industrial'].map((cat) => (
                <Button key={cat} variant={cat === 'All' ? 'default' : 'outline'} size="sm" className={cat === 'All' ? 'bg-primary' : ''}>
                  {cat}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {properties.map((prop) => (
              <div key={prop.title} className="bg-white rounded-[40px] overflow-hidden border border-slate-200 group flex flex-col sm:flex-row">
                <div className="sm:w-2/5 relative h-64 sm:h-auto overflow-hidden">
                  <img 
                    src={prop.image} 
                    alt={prop.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-primary border-none font-bold">
                      {prop.type}
                    </Badge>
                  </div>
                </div>
                <div className="sm:w-3/5 p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-secondary mb-2">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm font-semibold">{prop.location}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-4">{prop.title}</h3>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="p-3 bg-slate-50 rounded-2xl">
                        <p className="text-xs text-muted-foreground font-bold uppercase tracking-wider mb-1">Target Return</p>
                        <p className="text-xl font-bold text-primary">{prop.returns}</p>
                      </div>
                      <div className="p-3 bg-slate-50 rounded-2xl">
                        <p className="text-xs text-muted-foreground font-bold uppercase tracking-wider mb-1">Status</p>
                        <p className="text-lg font-bold text-secondary">{prop.status}</p>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white group-hover:bg-secondary transition-colors">
                    Invest Now <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Button variant="outline" size="lg" className="px-12 border-2 border-primary text-primary font-bold h-14 hover:bg-primary hover:text-white transition-all">
              Explore 50+ More Properties
            </Button>
          </div>
        </div>
      </section>

      {/* Investment Structure */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-[60px] p-12 lg:p-24 relative overflow-hidden">
            <div className="absolute right-0 bottom-0 w-1/3 h-full opacity-10">
              <Trees className="w-full h-full text-secondary" />
            </div>
            
            <div className="flex flex-col lg:flex-row gap-16 relative z-10">
              <div className="lg:w-1/2 space-y-8">
                <h2 className="text-4xl font-bold text-white">Transparent & Regulated Structures</h2>
                <p className="text-lg text-white/70 leading-relaxed">
                  Every property is held within a dedicated Special Purpose Vehicle (SPV), ensuring your ownership is legally protected and structurally independent.
                </p>
                <div className="space-y-6">
                  {[
                    "Direct legal title through institutional structures",
                    "Quarterly distributions with detailed tax reporting",
                    "Independent valuation and audit of all assets",
                    "Seamless exit options through our internal marketplace"
                  ].map((text) => (
                    <div key={text} className="flex items-center gap-4 text-white">
                      <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-medium">{text}</span>
                    </div>
                  ))}
                </div>
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-10 h-14 text-lg">
                  Read Governance Paper
                </Button>
              </div>
              
              <div className="lg:w-1/2 grid grid-cols-1 gap-6">
                {[
                  { title: "Due Diligence", desc: "Our team of experts reviews 100+ opportunities for every 1 that makes it onto the platform.", icon: <Badge className="w-10 h-10 mb-4" /> },
                  { title: "Global Compliance", desc: "We operate in full compliance with FCA and SEC real estate investment regulations.", icon: <ShieldCheck className="w-10 h-10 mb-4" /> },
                  { title: "Investor Protection", desc: "Capital is safeguarded through insurance and institutional-grade custody solutions.", icon: <Users className="w-10 h-10 mb-4" /> },
                ].map((box) => (
                  <div key={box.title} className="p-8 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                    <h4 className="text-xl font-bold text-white mb-2">{box.title}</h4>
                    <p className="text-white/60 text-sm leading-relaxed">{box.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
