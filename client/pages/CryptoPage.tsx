import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useState, useMemo } from "react";
import {
  Zap,
  Cpu,
  ShieldCheck,
  Activity,
  TrendingUp,
  Lock,
  ArrowRight,
  Globe,
  Database,
} from "lucide-react";

export default function CryptoPage() {
  const [investmentAmount, setInvestmentAmount] = useState([5000]);
  const [timeframe, setTimeframe] = useState([12]); // months

  const estimatedROI = useMemo(() => {
    // Simplified logic: 1.5% - 2.5% monthly return for mining
    const monthlyRate = 0.021;
    const principal = investmentAmount[0];
    const months = timeframe[0];
    const totalReturn = principal * Math.pow(1 + monthlyRate, months);
    return {
      profit: totalReturn - principal,
      total: totalReturn,
      percentage: ((totalReturn - principal) / principal) * 100,
    };
  }, [investmentAmount, timeframe]);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 bg-primary overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <Database className="w-full h-full text-secondary" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 text-secondary border border-secondary/30 rounded-full text-sm font-semibold">
              <Zap className="w-4 h-4" />
              Next-Gen Mining Infrastructure
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Institutional-Grade{" "}
              <span className="text-secondary">Cryptocurrency</span> Mining
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Leverage our industrial-scale mining operations powered by 100%
              renewable energy. Earn consistent rewards without the complexity
              of hardware management.
            </p>
            <div className="flex gap-4 pt-4">
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-white px-8"
              >
                Start Mining Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white/20 hover:bg-white/10 px-8"
              >
                View Hash-Rate Data
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/2 space-y-8">
              <h2 className="text-4xl font-bold text-primary">
                ROI Projection Calculator
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Estimate your potential earnings based on our historical mining
                performance and current network difficulty. Our dynamic model
                accounts for hardware maintenance and electricity costs.
              </p>

              <div className="space-y-10 bg-white p-10 rounded-[32px] border border-slate-200 shadow-xl shadow-primary/5">
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <label className="font-bold text-primary">
                      Investment Amount ($)
                    </label>
                    <span className="text-2xl font-bold text-secondary">
                      ${investmentAmount[0].toLocaleString()}
                    </span>
                  </div>
                  <Slider
                    value={investmentAmount}
                    onValueChange={setInvestmentAmount}
                    max={100000}
                    step={1000}
                    className="py-4"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground font-medium">
                    <span>$1,000</span>
                    <span>$100,000</span>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <label className="font-bold text-primary">
                      Mining Duration (Months)
                    </label>
                    <span className="text-2xl font-bold text-secondary">
                      {timeframe[0]} Months
                    </span>
                  </div>
                  <Slider
                    value={timeframe}
                    onValueChange={setTimeframe}
                    max={60}
                    min={6}
                    step={6}
                    className="py-4"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground font-medium">
                    <span>6 Months</span>
                    <span>5 Years</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 w-full">
              <div className="bg-primary rounded-[40px] p-10 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary opacity-10 rounded-full -mr-16 -mt-16" />
                <h3 className="text-2xl font-bold mb-8 opacity-80 uppercase tracking-widest text-sm">
                  Projected Earnings
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                    <p className="text-white/60 text-sm mb-1">
                      Estimated Net Profit
                    </p>
                    <p className="text-3xl font-bold text-secondary">
                      $
                      {estimatedROI.profit.toLocaleString(undefined, {
                        maximumFractionDigits: 0,
                      })}
                    </p>
                  </div>
                  <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                    <p className="text-white/60 text-sm mb-1">
                      Total Expected Payout
                    </p>
                    <p className="text-3xl font-bold">
                      $
                      {estimatedROI.total.toLocaleString(undefined, {
                        maximumFractionDigits: 0,
                      })}
                    </p>
                  </div>
                </div>

                <div className="space-y-4 mb-12">
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-white/60">Estimated Annual ROI</span>
                    <span className="font-bold text-green-400">~28.4%</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-white/60">
                      Historical Reliability
                    </span>
                    <span className="font-bold">99.9% Uptime</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-white/60">Asset Backing</span>
                    <span className="font-bold">Physical Hardware</span>
                  </div>
                </div>

                <Button className="w-full bg-secondary hover:bg-secondary/90 text-white h-14 text-lg">
                  Invest Now & Start Mining
                </Button>
                <p className="text-center mt-4 text-xs text-white/40">
                  * Projections are based on current network difficulty and
                  historical data. Returns are not guaranteed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">
              Why Choose Our Mining Operations?
            </h2>
            <p className="text-lg text-muted-foreground">
              We provide a transparent, secure, and highly efficient way to
              participate in the cryptocurrency network economy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                title: "Industrial-Scale Hardware",
                desc: "We use the latest generation ASIC miners (S19 XP, M50S) for maximum efficiency and longevity.",
                icon: <Cpu className="w-8 h-8" />,
              },
              {
                title: "100% Green Energy",
                desc: "Our facilities are located in regions with abundant hydroelectric and geothermal power.",
                icon: <Globe className="w-8 h-8" />,
              },
              {
                title: "Real-time Monitoring",
                desc: "Access a detailed dashboard showing your hash-rate, temperature, and daily payout history.",
                icon: <Activity className="w-8 h-8" />,
              },
              {
                title: "Cold Wallet Security",
                desc: "All mining rewards are automatically distributed to audited multi-signature cold storage.",
                icon: <Lock className="w-8 h-8" />,
              },
              {
                title: "Maintenance Included",
                desc: "Our on-site engineering teams handle 24/7 maintenance, cooling, and hardware upgrades.",
                icon: <ShieldCheck className="w-8 h-8" />,
              },
              {
                title: "Compound Earnings",
                desc: "Option to automatically reinvest your daily mining rewards to grow your hash-rate share.",
                icon: <TrendingUp className="w-8 h-8" />,
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="space-y-4 p-8 rounded-3xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100 group"
              >
                <div className="w-16 h-16 bg-primary/5 text-secondary rounded-2xl flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-primary">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operations Showcase */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1200"
                  alt="Mining Data Center"
                  className="rounded-[40px] shadow-2xl relative z-10"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-[32px] shadow-xl z-20 hidden sm:block">
                  <div className="flex items-center gap-4">
                    <Activity className="text-green-500 w-10 h-10 animate-pulse" />
                    <div>
                      <p className="text-xs text-muted-foreground font-bold uppercase tracking-wider">
                        Current Network Status
                      </p>
                      <p className="text-xl font-bold text-primary">
                        Healthy & Online
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 space-y-8">
              <h2 className="text-4xl font-bold text-primary">
                Global Mining Infrastructure
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our operations are strategically distributed across secure
                jurisdictions including Iceland, Canada, and Scandinavia. This
                geographical diversification ensures regulatory stability and
                optimal climate control.
              </p>
              <ul className="space-y-4">
                {[
                  "Total Hash-Rate Capacity: 1.5 EH/s",
                  "Average Electricity Cost: $0.035/kWh",
                  "Carbon-Neutral Certification Pending",
                  "24/7 Armed Physical Security",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-primary font-medium"
                  >
                    <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-secondary" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-10"
              >
                View Site Locations
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
