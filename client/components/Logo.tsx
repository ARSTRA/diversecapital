import { LucideIcon, TrendingUp, ShieldCheck } from "lucide-react";

export const Logo = ({ className }: { className?: string }) => (
  <div className={`flex items-center gap-2 font-bold text-xl ${className}`}>
    <div className="relative flex items-center justify-center w-10 h-10 bg-primary rounded-lg overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-secondary opacity-50" />
      <TrendingUp className="w-6 h-6 text-accent relative z-10" />
      <ShieldCheck className="w-4 h-4 text-white absolute -bottom-0.5 -right-0.5 z-20" />
    </div>
    <span className="tracking-tight text-primary">
      DIVERSE<span className="text-secondary">CAPITAL</span>
    </span>
  </div>
);
