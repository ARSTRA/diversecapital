import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Package, 
  Plus, 
  Search, 
  Edit2, 
  Trash2, 
  Eye, 
  Home, 
  Star, 
  CheckCircle2, 
  XCircle,
  MoreVertical,
  Filter
} from "lucide-react";
import { Product } from "@shared/api";
import { toast } from "sonner";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

export default function AdminProducts() {
  const queryClient = useQueryClient();
  const [searchTerm, setSearchTerm] = useState("");
  const [editingProduct, setEditingProduct] = useState<Partial<Product> | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const { data: products = [], isLoading } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  const createMutation = useMutation({
    mutationFn: async (newProduct: Partial<Product>) => {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/products"] });
      toast.success("Product created successfully");
      setIsDialogOpen(false);
    }
  });

  const updateMutation = useMutation({
    mutationFn: async (product: Partial<Product>) => {
      const res = await fetch(`/api/products/${product.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/products"] });
      toast.success("Product updated successfully");
      setIsDialogOpen(false);
    }
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      await fetch(`/api/products/${id}`, { method: "DELETE" });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/products"] });
      toast.success("Product deleted successfully");
    }
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingProduct?.id) {
      updateMutation.mutate(editingProduct);
    } else {
      createMutation.mutate(editingProduct || {});
    }
  };

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AdminLayout>
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative flex-grow max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input 
              placeholder="Search investments..." 
              className="pl-12 h-14 rounded-2xl border-none shadow-sm bg-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button 
                onClick={() => setEditingProduct({ 
                  status: "Active", 
                  showOnHome: true, 
                  isFeatured: false,
                  category: "Crypto"
                })}
                className="bg-secondary hover:bg-secondary/90 text-white h-14 px-8 rounded-2xl gap-2 font-bold shadow-lg shadow-secondary/20"
              >
                <Plus className="w-5 h-5" />
                Add New Investment
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl rounded-[32px]">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-primary">
                  {editingProduct?.id ? "Edit Investment" : "Create New Investment"}
                </DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSave} className="space-y-6 pt-4">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Product Name</Label>
                    <Input 
                      required
                      value={editingProduct?.name || ""} 
                      onChange={e => setEditingProduct(prev => ({ ...prev!, name: e.target.value }))}
                      placeholder="e.g. Bitcoin Alpha Mining"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Category</Label>
                    <Select 
                      value={editingProduct?.category}
                      onValueChange={val => setEditingProduct(prev => ({ ...prev!, category: val as any }))}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Crypto">Crypto</SelectItem>
                        <SelectItem value="Real Estate">Real Estate</SelectItem>
                        <SelectItem value="Gold">Gold</SelectItem>
                        <SelectItem value="Agriculture">Agriculture</SelectItem>
                        <SelectItem value="Oil & Gas">Oil & Gas</SelectItem>
                        <SelectItem value="Financial Services">Financial Services</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Description</Label>
                  <textarea 
                    className="w-full min-h-[100px] rounded-xl border border-input bg-transparent px-3 py-2 text-sm"
                    value={editingProduct?.description || ""} 
                    onChange={e => setEditingProduct(prev => ({ ...prev!, description: e.target.value }))}
                  />
                </div>

                <div className="grid grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label>Price ($)</Label>
                    <Input 
                      type="number"
                      value={editingProduct?.price || ""} 
                      onChange={e => setEditingProduct(prev => ({ ...prev!, price: Number(e.target.value) }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Min. Investment ($)</Label>
                    <Input 
                      type="number"
                      value={editingProduct?.minInvestment || ""} 
                      onChange={e => setEditingProduct(prev => ({ ...prev!, minInvestment: Number(e.target.value) }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Target ROI (%)</Label>
                    <Input 
                      value={editingProduct?.roi || ""} 
                      onChange={e => setEditingProduct(prev => ({ ...prev!, roi: e.target.value }))}
                    />
                  </div>
                </div>

                <div className="flex flex-wrap gap-8 p-6 bg-slate-50 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <Switch 
                      checked={editingProduct?.showOnHome} 
                      onCheckedChange={val => setEditingProduct(prev => ({ ...prev!, showOnHome: val }))}
                    />
                    <Label className="font-bold text-primary flex items-center gap-2">
                      <Home className="w-4 h-4 text-muted-foreground" /> Show on Home
                    </Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <Switch 
                      checked={editingProduct?.isFeatured} 
                      onCheckedChange={val => setEditingProduct(prev => ({ ...prev!, isFeatured: val }))}
                    />
                    <Label className="font-bold text-primary flex items-center gap-2">
                      <Star className="w-4 h-4 text-muted-foreground" /> Featured
                    </Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <Switch 
                      checked={editingProduct?.status === "Active"} 
                      onCheckedChange={val => setEditingProduct(prev => ({ ...prev!, status: val ? "Active" : "Inactive" }))}
                    />
                    <Label className="font-bold text-primary">Active Status</Label>
                  </div>
                </div>

                <div className="flex justify-end gap-4">
                  <Button type="button" variant="ghost" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
                  <Button type="submit" className="bg-primary text-white px-8 h-12 rounded-xl">
                    {editingProduct?.id ? "Save Changes" : "Create Product"}
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {isLoading ? (
            [1, 2, 3].map(i => <div key={i} className="h-64 bg-slate-100 animate-pulse rounded-[32px]" />)
          ) : (
            filteredProducts.map((product) => (
              <Card key={product.id} className="border-none shadow-sm rounded-[32px] overflow-hidden group hover:shadow-xl transition-all duration-500 bg-white">
                <div className="h-48 relative overflow-hidden">
                  <img src={product.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={product.name} />
                  <div className="absolute top-4 right-4 flex gap-2">
                    {product.showOnHome && (
                      <div className="p-2 bg-white/90 backdrop-blur-md rounded-xl text-primary shadow-sm">
                        <Home className="w-4 h-4" />
                      </div>
                    )}
                    {product.isFeatured && (
                      <div className="p-2 bg-secondary text-white rounded-xl shadow-sm">
                        <Star className="w-4 h-4 fill-current" />
                      </div>
                    )}
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className={cn(
                      "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
                      product.status === "Active" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                    )}>
                      {product.status}
                    </span>
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-1">{product.category}</p>
                      <h3 className="text-xl font-bold text-primary">{product.name}</h3>
                    </div>
                    <p className="text-lg font-bold text-primary">${product.price.toLocaleString()}</p>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-6 min-h-[40px]">
                    {product.description}
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="p-3 bg-slate-50 rounded-2xl">
                      <p className="text-[10px] text-muted-foreground font-bold uppercase mb-1">Target ROI</p>
                      <p className="font-bold text-primary">{product.roi}</p>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-2xl">
                      <p className="text-[10px] text-muted-foreground font-bold uppercase mb-1">Min. Invest</p>
                      <p className="font-bold text-primary">${product.minInvestment.toLocaleString()}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 border-t border-slate-100 pt-6">
                    <Button 
                      variant="outline" 
                      className="flex-grow rounded-xl h-12 font-bold"
                      onClick={() => {
                        setEditingProduct(product);
                        setIsDialogOpen(true);
                      }}
                    >
                      <Edit2 className="w-4 h-4 mr-2" /> Edit
                    </Button>
                    <Button 
                      variant="ghost" 
                      className="w-12 h-12 rounded-xl text-red-500 hover:bg-red-50"
                      onClick={() => {
                        if (confirm("Are you sure you want to delete this product?")) {
                          deleteMutation.mutate(product.id);
                        }
                      }}
                    >
                      <Trash2 className="w-5 h-5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </Layout>
  );
}