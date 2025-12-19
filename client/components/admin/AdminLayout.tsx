import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  MessageSquare,
  Settings,
  LogOut,
  ChevronRight,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";

const sidebarLinks = [
  { name: "Dashboard", path: "/admin", icon: LayoutDashboard },
  { name: "Products", path: "/admin/products", icon: Package },
  { name: "Orders", path: "/admin/orders", icon: ShoppingCart },
  { name: "Users", path: "/admin/users", icon: Users },
  { name: "Messages", path: "/admin/messages", icon: MessageSquare },
  { name: "Site Settings", path: "/admin/settings", icon: Settings },
];

export const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar */}
      <aside className="w-64 bg-primary text-white hidden lg:flex flex-col fixed h-full z-20">
        <div className="p-6 border-b border-white/10">
          <Link to="/" className="flex items-center gap-3 font-bold text-xl">
            <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <span>
              ADMIN <span className="text-secondary">PANEL</span>
            </span>
          </Link>
        </div>

        <nav className="flex-grow p-4 space-y-2 overflow-y-auto">
          {sidebarLinks.map((link) => {
            const Icon = link.icon;
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "flex items-center justify-between p-3 rounded-xl transition-all group",
                  isActive
                    ? "bg-secondary text-white shadow-lg shadow-secondary/20"
                    : "hover:bg-white/5 text-white/70 hover:text-white",
                )}
              >
                <div className="flex items-center gap-3">
                  <Icon
                    className={cn(
                      "w-5 h-5",
                      isActive
                        ? "text-white"
                        : "text-white/40 group-hover:text-white",
                    )}
                  />
                  <span className="font-medium text-sm">{link.name}</span>
                </div>
                {isActive && <ChevronRight className="w-4 h-4" />}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/10">
          <Link to="/">
            <button className="flex items-center gap-3 w-full p-3 text-white/60 hover:text-white hover:bg-white/5 rounded-xl transition-all text-sm">
              <LogOut className="w-5 h-5" />
              <span>Exit Admin</span>
            </button>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow lg:ml-64 transition-all">
        {/* Header */}
        <header className="bg-white border-b border-slate-200 h-20 flex items-center justify-between px-8 sticky top-0 z-10">
          <div>
            <h1 className="text-xl font-bold text-primary">
              {sidebarLinks.find((l) => l.path === location.pathname)?.name ||
                "Admin"}
            </h1>
            <p className="text-xs text-muted-foreground">
              Manage your platform and investments
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex flex-col items-end mr-4">
              <span className="text-sm font-bold text-primary">
                Admin Administrator
              </span>
              <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                Super Admin
              </span>
            </div>
            <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 overflow-hidden">
              <img src="https://i.pravatar.cc/100?img=68" alt="Admin" />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
};
