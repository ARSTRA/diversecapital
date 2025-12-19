import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PlaceholderPage from "./pages/Placeholder";
import CryptoPage from "./pages/CryptoPage";
import RealEstatePage from "./pages/RealEstatePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminProducts from "./pages/admin/Products";
import AdminOrders from "./pages/admin/Orders";
import AdminUsers from "./pages/admin/Users";
import AdminMessages from "./pages/admin/Messages";
import AdminSettings from "./pages/admin/Settings";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: async ({ queryKey }) => {
        const url = queryKey[0] as string;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      },
    },
  },
});

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
          <Route path="/investments/real-estate" element={<RealEstatePage />} />
          <Route
            path="/investments/gold"
            element={<PlaceholderPage title="Gold Mining Operations" />}
          />
          <Route
            path="/investments/agriculture"
            element={<PlaceholderPage title="Sustainable Agriculture" />}
          />
          <Route
            path="/investments/oil-gas"
            element={<PlaceholderPage title="Oil & Gas Energy" />}
          />
          <Route
            path="/investments/financial-services"
            element={<PlaceholderPage title="Insurance & Loans" />}
          />

          {/* Core Pages */}
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="/faq"
            element={<PlaceholderPage title="FAQ / Help Center" />}
          />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<PlaceholderPage title="Login" />} />
          <Route path="/signup" element={<PlaceholderPage title="Sign Up" />} />
          <Route
            path="/dashboard"
            element={<PlaceholderPage title="User Dashboard" />}
          />

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/products" element={<AdminProducts />} />
          <Route path="/admin/orders" element={<AdminOrders />} />
          <Route path="/admin/users" element={<AdminUsers />} />
          <Route path="/admin/messages" element={<AdminMessages />} />
          <Route path="/admin/settings" element={<AdminSettings />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
