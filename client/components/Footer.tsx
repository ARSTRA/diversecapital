import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { SiteSettings } from "@shared/api";

export const Footer = () => {
  const { data: settings } = useQuery<SiteSettings>({
    queryKey: ["/api/settings"],
  });

  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Logo className="invert brightness-0" />
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              {settings?.aboutUsContent || "Empowering global investors with diversified opportunities across high-growth industries. Regulated, transparent, and built for your future."}
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-secondary transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-secondary transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-secondary transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-secondary transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Investment Sectors</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li><Link to="/investments/crypto" className="hover:text-secondary transition-colors">Cryptocurrency Mining</Link></li>
              <li><Link to="/investments/real-estate" className="hover:text-secondary transition-colors">Real Estate Portfolio</Link></li>
              <li><Link to="/investments/gold" className="hover:text-secondary transition-colors">Gold Mining Operations</Link></li>
              <li><Link to="/investments/agriculture" className="hover:text-secondary transition-colors">Sustainable Agriculture</Link></li>
              <li><Link to="/investments/oil-gas" className="hover:text-secondary transition-colors">Oil & Gas Energy</Link></li>
              <li><Link to="/investments/financial-services" className="hover:text-secondary transition-colors">Insurance & Loans</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li><Link to="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link to="/faq" className="hover:text-secondary transition-colors">Help Center / FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-secondary transition-colors">Contact Support</Link></li>
              <li><Link to="/privacy" className="hover:text-secondary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-secondary transition-colors">Terms of Service</Link></li>
              <li><Link to="/compliance" className="hover:text-secondary transition-colors">Regulatory Compliance</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0" />
                <span>{settings?.contactAddress || "123 Financial District, London, EC2V 6BT, UK"}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <span>{settings?.contactPhone || "+44 (20) 1234 5678"}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <span>{settings?.contactEmail || "support@diverse-capital.com"}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-xs text-white/40">
          <p className="mb-4">
            DISCLAIMER: Investment in financial markets involves risk. Cryptocurrency, commodities, and real estate are volatile assets. Past performance is not indicative of future results. Please read our full Risk Disclosure before investing.
          </p>
          <p>{settings?.footerContent || `© ${new Date().getFullYear()} Diverse Capital Investment Group. All rights reserved.`}</p>
        </div>
      </div>
    </footer>
  );
};
