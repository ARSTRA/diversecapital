import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  TrendingUp,
  Globe,
  Shield,
  Zap,
  ArrowRight,
  CheckCircle2,
  BarChart3,
  Gem,
} from "lucide-react";

const opportunities = [
  {
    name: "Prime African Gold Reserves",
    location: "Ghana, West Africa",
    returns: "14.2% p.a.",
    status: "Active",
    minInvestment: "$5,000",
    image:
      "https://images.pexels.com/photos/16042295/pexels-photo-16042295.jpeg",
  },
  {
    name: "Canadian Mining Consortium",
    location: "Ontario, Canada",
    returns: "12.8% p.a.",
    status: "Fully Funded",
    minInvestment: "$10,000",
    image:
      "https://images.pexels.com/photos/16042295/pexels-photo-16042295.jpeg",
  },
  {
    name: "Australian Bullion Operations",
    location: "Western Australia",
    returns: "13.5% p.a.",
    status: "Active",
    minInvestment: "$7,500",
    image:
      "https://images.pexels.com/photos/16042295/pexels-photo-16042295.jpeg",
  },
];

const features = [
  {
    title: "Tangible Asset Backing",
    description: "Your investments are backed by physical gold reserves",
    icon: <Gem className="w-6 h-6" />,
  },
  {
    title: "Proven Operations",
    description: "Decades of mining expertise and successful track record",
    icon: <BarChart3 className="w-6 h-6" />,
  },
  {
    title: "Inflation Hedge",
    description: "Gold maintains value against currency fluctuations",
    icon: <TrendingUp className="w-6 h-6" />,
  },
  {
    title: "Global Diversification",
    description: "Operations across multiple continents and jurisdictions",
    icon: <Globe className="w-6 h-6" />,
  },
];

export default function GoldMiningPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/16042295/pexels-photo-16042295.jpeg"
            alt="Gold Mining"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl space-y-6">
            <Badge className="bg-secondary text-white border-none py-1.5 px-4 text-sm mb-4">
              Precious Metals
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Invest in <span className="text-secondary">Gold Mining</span>{" "}
              Excellence
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Access world-class gold mining operations with proven reserves and
              operational excellence. From exploration to extraction, secure your
              wealth in tangible precious metal assets managed by industry
              experts.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-white px-8"
              >
                Explore Opportunities
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white/20 hover:bg-white/10 px-8"
              >
                Learn More
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
              <h2 className="text-4xl font-bold text-primary leading-tight">
                Why Gold Mining <span className="text-secondary">Investments?</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Gold has been a store of value for millennia. Unlike other
                commodities, gold maintains purchasing power across economic
                cycles and serves as a hedge against inflation and currency
                devaluation.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((feature) => (
                  <div
                    key={feature.title}
                    className="p-6 rounded-2xl bg-slate-50 space-y-3"
                  >
                    <div className="w-10 h-10 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <h4 className="font-bold text-primary">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/16042295/pexels-photo-16042295.jpeg"
                alt="Gold Mining Operations"
                className="rounded-[40px] shadow-2xl"
              />
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl hidden md:block">
                <div className="flex items-center gap-6">
                  <div className="text-center px-4">
                    <p className="text-3xl font-bold text-primary">2.8M oz</p>
                    <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">
                      Annual Production
                    </p>
                  </div>
                  <div className="w-px h-12 bg-slate-200" />
                  <div className="text-center px-4">
                    <p className="text-3xl font-bold text-secondary">35+</p>
                    <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">
                      Mining Operations
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Opportunities Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Current Investment <span className="text-secondary">Opportunities</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hand-selected gold mining projects across the globe with verified
              reserves and proven management teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {opportunities.map((opp) => (
              <Card
                key={opp.name}
                className="border-none shadow-sm rounded-[32px] overflow-hidden group hover:shadow-xl transition-all duration-500 bg-white"
              >
                <div className="h-48 relative overflow-hidden bg-slate-100">
                  <img
                    src={opp.image}
                    alt={opp.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-primary border-none font-bold">
                      {opp.status}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center gap-2 text-secondary mb-2">
                    <Gem className="w-4 h-4" />
                    <span className="text-sm font-semibold">{opp.location}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-6">
                    {opp.name}
                  </h3>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="p-3 bg-slate-50 rounded-2xl">
                      <p className="text-xs text-muted-foreground font-bold uppercase tracking-wider mb-1">
                        Target Return
                      </p>
                      <p className="text-xl font-bold text-primary">
                        {opp.returns}
                      </p>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-2xl">
                      <p className="text-xs text-muted-foreground font-bold uppercase tracking-wider mb-1">
                        Min. Invest
                      </p>
                      <p className="text-lg font-bold text-secondary">
                        {opp.minInvestment}
                      </p>
                    </div>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white group-hover:bg-secondary transition-colors">
                    Invest Now <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button
              variant="outline"
              size="lg"
              className="px-12 border-2 border-primary text-primary font-bold h-14 hover:bg-primary hover:text-white transition-all"
            >
              Browse All Gold Opportunities
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-[60px] p-12 lg:p-24 relative overflow-hidden">
            <div className="absolute right-0 bottom-0 w-1/3 h-full opacity-10">
              <Gem className="w-full h-full text-secondary" />
            </div>

            <div className="max-w-2xl relative z-10">
              <h2 className="text-4xl font-bold text-white mb-6">
                Rigorous Vetting Process
              </h2>
              <p className="text-lg text-white/70 mb-8">
                Every gold mining opportunity undergoes comprehensive due
                diligence including reserve verification, operational audits,
                environmental compliance reviews, and management evaluation.
              </p>
              <div className="space-y-6">
                {[
                  "Independent geological assessment and reserve estimation",
                  "Verification of mining permits and regulatory compliance",
                  "Track record analysis of management and operators",
                  "Environmental and social responsibility evaluation",
                  "Monthly reporting and transparent asset tracking",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-4 text-white">
                    <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-white px-10 h-14 text-lg mt-8"
              >
                View Due Diligence Reports
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary to-primary/90 rounded-[60px] p-12 lg:p-24 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to secure your wealth in gold?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Join investors who are diversifying their portfolios with tangible
              gold assets and benefiting from professional mining operations
              worldwide.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-10">
                Start Investing
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white/20 hover:bg-white/10 px-10"
              >
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
