import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Search, 
  Trash2, 
  Mail, 
  Calendar, 
  ShieldCheck,
  XCircle,
  Eye,
  MoreVertical,
  History,
  TrendingUp
} from "lucide-react";
import { User, Order } from "@shared/api";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";
import { useState } from "react";

export default function AdminUsers() {
  const queryClient = useQueryClient();
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const { data: users = [], isLoading } = useQuery<User[]>({
    queryKey: ["/api/users"],
  });

  const { data: orders = [] } = useQuery<Order[]>({
    queryKey: ["/api/orders"],
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      await fetch(`/api/users/${id}`, { method: "DELETE" });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/users"] });
      toast.success("User account deleted");
    }
  });

  return (
    <AdminLayout>
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4 bg-white px-4 h-14 rounded-2xl shadow-sm flex-grow max-w-md">
            <Search className="text-muted-foreground w-5 h-5" />
            <input 
              placeholder="Search by name, email, ID..." 
              className="bg-transparent border-none focus:ring-0 w-full text-sm font-medium"
            />
          </div>
        </div>

        <Card className="border-none shadow-sm rounded-[32px] overflow-hidden bg-white">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-50 text-left text-xs uppercase tracking-wider text-muted-foreground font-bold">
                    <th className="px-8 py-4">User</th>
                    <th className="px-8 py-4">Status</th>
                    <th className="px-8 py-4">Joined Date</th>
                    <th className="px-8 py-4">Investments</th>
                    <th className="px-8 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {isLoading ? (
                    [1, 2, 3].map(i => (
                      <tr key={i} className="animate-pulse">
                        <td colSpan={5} className="px-8 py-8 bg-slate-50/50" />
                      </tr>
                    ))
                  ) : (
                    users.map((user) => (
                      <tr key={user.id} className="hover:bg-slate-50 transition-colors group">
                        <td className="px-8 py-5">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-slate-100 overflow-hidden">
                              <img src={`https://i.pravatar.cc/100?u=${user.email}`} alt={user.name} />
                            </div>
                            <div className="flex flex-col">
                              <span className="text-sm font-bold text-primary">{user.name}</span>
                              <span className="text-[10px] text-muted-foreground font-medium">{user.email}</span>
                            </div>
                          </div>
                        </td>
                        <td className="px-8 py-5">
                          <span className={cn(
                            "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
                            user.status === "active" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                          )}>
                            {user.status}
                          </span>
                        </td>
                        <td className="px-8 py-5">
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Calendar className="w-3 h-3" />
                            {new Date(user.joinedAt).toLocaleDateString()}
                          </div>
                        </td>
                        <td className="px-8 py-5">
                          <span className="text-sm font-bold text-primary">
                            {orders.filter(o => o.userId === user.id).length} Orders
                          </span>
                        </td>
                        <td className="px-8 py-5 text-right space-x-2">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button 
                                variant="ghost" 
                                className="w-10 h-10 p-0 rounded-xl"
                                onClick={() => setSelectedUser(user)}
                              >
                                <History className="w-5 h-5 text-muted-foreground" />
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-2xl rounded-[32px]">
                              <DialogHeader>
                                <DialogTitle className="text-2xl font-bold text-primary">User History: {user.name}</DialogTitle>
                              </DialogHeader>
                              <div className="mt-4 space-y-4 max-h-[400px] overflow-y-auto pr-2">
                                {orders.filter(o => o.userId === user.id).length > 0 ? (
                                  orders.filter(o => o.userId === user.id).map(order => (
                                    <div key={order.id} className="p-4 bg-slate-50 rounded-2xl flex items-center justify-between border border-slate-100">
                                      <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center text-secondary">
                                          <TrendingUp className="w-5 h-5" />
                                        </div>
                                        <div>
                                          <p className="text-sm font-bold text-primary">{order.productName}</p>
                                          <p className="text-[10px] text-muted-foreground">{new Date(order.date).toLocaleDateString()}</p>
                                        </div>
                                      </div>
                                      <div className="text-right">
                                        <p className="text-sm font-bold text-primary">${order.amount.toLocaleString()}</p>
                                        <p className="text-[10px] font-bold uppercase text-secondary">{order.status}</p>
                                      </div>
                                    </div>
                                  ))
                                ) : (
                                  <div className="text-center py-12 text-muted-foreground">
                                    No investment history found for this user.
                                  </div>
                                )}
                              </div>
                            </DialogContent>
                          </Dialog>
                          <Button 
                            variant="ghost" 
                            className="w-10 h-10 p-0 rounded-xl text-red-500 hover:bg-red-50"
                            onClick={() => {
                              if (confirm("Are you sure you want to delete this user?")) {
                                deleteMutation.mutate(user.id);
                              }
                            }}
                          >
                            <Trash2 className="w-5 h-5" />
                          </Button>
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
