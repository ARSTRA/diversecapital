import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ShoppingCart, 
  Search, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  TrendingUp,
  Filter,
  Eye,
  MoreVertical
} from "lucide-react";
import { Order } from "@shared/api";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

export default function AdminOrders() {
  const queryClient = useQueryClient();

  const { data: orders = [], isLoading } = useQuery<Order[]>({
    queryKey: ["/api/orders"],
  });

  const updateStatusMutation = useMutation({
    mutationFn: async ({ id, status }: { id: string, status: Order["status"] }) => {
      const res = await fetch(`/api/orders/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/orders"] });
      toast.success("Order status updated");
    }
  });

  const getStatusColor = (status: Order["status"]) => {
    switch (status) {
      case "Pending": return "bg-amber-100 text-amber-700";
      case "Profits": return "bg-green-100 text-green-700";
      case "Delivered": return "bg-blue-100 text-blue-700";
      case "Cancelled": return "bg-red-100 text-red-700";
      default: return "bg-slate-100 text-slate-700";
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4 bg-white px-4 h-14 rounded-2xl shadow-sm flex-grow max-w-md">
            <Search className="text-muted-foreground w-5 h-5" />
            <input 
              placeholder="Search orders, ID, customers..." 
              className="bg-transparent border-none focus:ring-0 w-full text-sm font-medium"
            />
          </div>
          <Button variant="outline" className="h-14 rounded-2xl gap-2 px-6 border-slate-200">
            <Filter className="w-5 h-5" />
            Filter Status
          </Button>
        </div>

        <Card className="border-none shadow-sm rounded-[32px] overflow-hidden bg-white">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-50 text-left text-xs uppercase tracking-wider text-muted-foreground font-bold">
                    <th className="px-8 py-4">Order ID</th>
                    <th className="px-8 py-4">Customer</th>
                    <th className="px-8 py-4">Investment Product</th>
                    <th className="px-8 py-4">Amount</th>
                    <th className="px-8 py-4">Status</th>
                    <th className="px-8 py-4">Date</th>
                    <th className="px-8 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {isLoading ? (
                    [1, 2, 3].map(i => (
                      <tr key={i} className="animate-pulse">
                        <td colSpan={7} className="px-8 py-8 bg-slate-50/50" />
                      </tr>
                    ))
                  ) : (
                    orders.map((order) => (
                      <tr key={order.id} className="hover:bg-slate-50 transition-colors group">
                        <td className="px-8 py-5">
                          <span className="text-sm font-bold text-primary">#{order.id.slice(0, 8)}</span>
                        </td>
                        <td className="px-8 py-5">
                          <div className="flex flex-col">
                            <span className="text-sm font-bold text-primary">{order.customerName}</span>
                            <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-medium">Verified Investor</span>
                          </div>
                        </td>
                        <td className="px-8 py-5">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center text-secondary">
                              <TrendingUp className="w-4 h-4" />
                            </div>
                            <span className="text-sm font-medium">{order.productName}</span>
                          </div>
                        </td>
                        <td className="px-8 py-5">
                          <span className="text-sm font-bold text-primary">${order.amount.toLocaleString()}</span>
                        </td>
                        <td className="px-8 py-5">
                          <span className={cn(
                            "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider inline-flex items-center gap-1.5",
                            getStatusColor(order.status)
                          )}>
                            <div className={cn("w-1.5 h-1.5 rounded-full fill-current")} />
                            {order.status}
                          </span>
                        </td>
                        <td className="px-8 py-5">
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Clock className="w-3 h-3" />
                            {new Date(order.date).toLocaleDateString()}
                          </div>
                        </td>
                        <td className="px-8 py-5 text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" className="h-8 w-8 p-0">
                                <MoreVertical className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="rounded-xl border-slate-200">
                              <DropdownMenuItem className="text-xs font-bold py-2" onClick={() => updateStatusMutation.mutate({ id: order.id, status: "Profits" })}>
                                <CheckCircle2 className="w-4 h-4 mr-2 text-green-500" /> Mark as Profits
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-xs font-bold py-2" onClick={() => updateStatusMutation.mutate({ id: order.id, status: "Delivered" })}>
                                <CheckCircle2 className="w-4 h-4 mr-2 text-blue-500" /> Mark as Delivered
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-xs font-bold py-2" onClick={() => updateStatusMutation.mutate({ id: order.id, status: "Pending" })}>
                                <Clock className="w-4 h-4 mr-2 text-amber-500" /> Mark as Pending
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-xs font-bold py-2 text-red-600" onClick={() => updateStatusMutation.mutate({ id: order.id, status: "Cancelled" })}>
                                <XCircle className="w-4 h-4 mr-2" /> Cancel Order
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
