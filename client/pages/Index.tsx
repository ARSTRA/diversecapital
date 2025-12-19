import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Product, SiteSettings } from "@shared/api";
import { 
  ArrowRight, 
  TrendingUp, 
  Building2, 
  Pickaxe, 
  Leaf, 
  Droplets, 
  ShieldCheck, 
  Globe2, 
  Users, 
  BarChart3,
  CheckCircle2,
  Award,
  Zap
} from "lucide-react";

const stats = [
  { label: "Active Investors", value: "25k+", icon: <Users className="w-5 h-5" /> },
  { label: "Assets Managed", value: "$1.2B+", icon: <BarChart3 className="w-5 h-5" /> },
  { label: "Countries Present", value: "45+", icon: <Globe2 className="w-5 h-5" /> },
  { label: "Growth YoY", value: "24.5%", icon: <TrendingUp className="w-5 h-5" /> },
];

const getIcon = (category: string) => {
  switch (category) {
    case "Crypto": return <Zap className="w-8 h-8 text-secondary" />;
    case "Real Estate": return <Building2 className="w-8 h-8 text-secondary" />;
    case "Gold": return <Pickaxe className="w-8 h-8 text-secondary" />;
    case "Agriculture": return <Leaf className="w-8 h-8 text-secondary" />;
    case "Oil & Gas": return <Droplets className="w-8 h-8 text-secondary" />;
    default: return <ShieldCheck className="w-8 h-8 text-secondary" />;
  }
};

const getPath = (category: string) => {
  switch (category) {
    case "Crypto": return "/investments/crypto";
    case "Real Estate": return "/investments/real-estate";
    default: return "/investments/crypto";
  }
};

export default function Index() {
  const { data: products = [], isLoading: productsLoading } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  const { data: settings } = useQuery<SiteSettings>({
    queryKey: ["/api/settings"],
  });

  const homeProducts = products.filter(p => p.showOnHome && p.status === "Active");

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 -z-10 rounded-l-[100px] hidden lg:block" />
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-semibold">
                <ShieldCheck className="w-4 h-4" />
                Regulated Global Investment Platform
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-primary leading-[1.1]">
                Diversify Your <span className="text-secondary">Wealth</span> Across Six Industries
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                One platform, infinite opportunities. Securely manage your portfolio in Crypto, Real Estate, Energy, and more with institutional-grade tools.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/signup">
                  <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-8 h-14 text-lg">
                    Start Your Portfolio
                  </Button>
                </Link>
                <Link to="/admin">
                  <Button size="lg" variant="outline" className="px-8 h-14 text-lg border-secondary text-secondary">
                    Admin Dashboard
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-8 pt-8 border-t border-slate-100">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <p className="font-bold text-primary">Trusted by 25,000+ investors</p>
                  <p className="text-muted-foreground">Join our growing global community</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl shadow-primary/20">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" 
                  alt="Investment Platform Dashboard"
                  className="w-full h-auto"
                />
              </div>
              {/* Floating Cards */}
              <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl hidden md:block animate-bounce-slow">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider font-bold">ROI Estimated</p>
                    <p className="text-2xl font-bold text-primary">+18.4%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-50 grayscale invert">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="Visa" className="h-6" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Mastercard" className="h-8" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/1200px-PayPal.svg.png" alt="PayPal" className="h-6" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/FCA_logo.svg/1280px-FCA_logo.svg.png" alt="FCA" className="h-6" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/SEC_Logo.svg/1200px-SEC_Logo.svg.png" alt="SEC" className="h-8" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center p-8 rounded-3xl bg-slate-50 hover:bg-secondary/5 transition-colors group">
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-4 text-secondary group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-bold text-primary mb-2">{stat.value}</h3>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Showcase - Now Dynamic */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-primary">Diverse Investment Ecosystem</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We've curated high-potential opportunities across six critical sectors, allowing you to build a resilient and growth-oriented portfolio.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productsLoading ? (
              [1, 2, 3].map(i => <div key={i} className="h-64 bg-slate-100 animate-pulse rounded-[32px]" />)
            ) : homeProducts.length > 0 ? (
              homeProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-[32px] overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
                  <div className="h-48 relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-6">
                      <div className="p-3 bg-white/20 backdrop-blur-md rounded-2xl">
                        {getIcon(product.category)}
                      </div>
                    </div>
                  </div>
                  <div className="p-8 space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-secondary uppercase tracking-widest">{product.category}</span>
                      <span className="text-lg font-bold text-primary">{product.roi} ROI</span>
                    </div>
                    <h3 className="text-2xl font-bold text-primary">{product.name}</h3>
                    <p className="text-muted-foreground leading-relaxed line-clamp-2">
                      {product.description}
                    </p>
                    <Link 
                      to={getPath(product.category)} 
                      className="inline-flex items-center gap-2 text-secondary font-bold hover:gap-3 transition-all"
                    >
                      View Details <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-20 bg-white rounded-[32px] border border-dashed border-slate-200">
                <p className="text-muted-foreground">No featured investments available at the moment.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Trust & Security */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000" 
                alt="Security & Analytics"
                className="rounded-[40px] shadow-2xl shadow-primary/10"
              />
            </div>
            <div className="lg:w-1/2 space-y-8">
              <h2 className="text-4xl font-bold text-primary">Security First Infrastructure</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Your capital's safety is our primary objective. We employ multi-layer security protocols and comply with international financial regulations.
              </p>
              <div className="space-y-4">
                {[
                  { title: "Cold Storage Protection", desc: "95% of digital assets are stored in multi-signature cold wallets.", icon: <ShieldCheck className="w-6 h-6" /> },
                  { title: "Audited Financials", desc: "Regular third-party audits ensure transparency and solvency.", icon: <CheckCircle2 className="w-6 h-6" /> },
                  { title: "KYC/AML Compliance", desc: "Strict onboarding processes to maintain a clean investment ecosystem.", icon: <Users className="w-6 h-6" /> },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="p-3 bg-white rounded-xl shadow-sm h-fit text-secondary">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-primary">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-[60px] p-12 lg:p-24 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-64 h-64 bg-secondary rounded-full blur-[100px]" />
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent rounded-full blur-[100px]" />
            </div>
            <div className="relative z-10 max-w-3xl mx-auto space-y-8">
              <Award className="w-16 h-16 text-accent mx-auto" />
              <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                Ready to Build Your Diverse Portfolio?
              </h2>
              <p className="text-xl text-white/70 leading-relaxed">
                Join thousands of professional investors who trust Diverse Capital for their long-term growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/signup">
                  <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-10 h-14 text-lg w-full sm:w-auto">
                    Open Free Account
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="text-white border-white/20 hover:bg-white/10 px-10 h-14 text-lg w-full sm:w-auto">
                    Speak with an Advisor
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
