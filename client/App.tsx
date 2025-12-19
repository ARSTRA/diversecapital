import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PlaceholderPage from "./pages/Placeholder";
import CryptoPage from "./pages/CryptoPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />

          {/* Investment Routes */}
          <Route path="/investments/crypto" element={<CryptoPage />} />
          <Route path="/investments/real-estate" element={<PlaceholderPage title="Real Estate Portfolio" />} />
          <Route path="/investments/gold" element={<PlaceholderPage title="Gold Mining Operations" />} />
          <Route path="/investments/agriculture" element={<PlaceholderPage title="Sustainable Agriculture" />} />
          <Route path="/investments/oil-gas" element={<PlaceholderPage title="Oil & Gas Energy" />} />
          <Route path="/investments/financial-services" element={<PlaceholderPage title="Insurance & Loans" />} />

          {/* Core Pages */}
          <Route path="/about" element={<PlaceholderPage title="About Us" />} />
          <Route path="/faq" element={<PlaceholderPage title="FAQ / Help Center" />} />
          <Route path="/contact" element={<PlaceholderPage title="Contact Us" />} />
          <Route path="/login" element={<PlaceholderPage title="Login" />} />
          <Route path="/signup" element={<PlaceholderPage title="Sign Up" />} />
          <Route path="/dashboard" element={<PlaceholderPage title="User Dashboard" />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
