import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Settings,
  Save,
  Building2,
  CreditCard,
  Mail,
  Phone,
  MapPin,
  Info,
  Globe,
  Layout as LayoutIcon,
  CheckCircle2,
} from "lucide-react";
import { SiteSettings } from "@shared/api";
import { toast } from "sonner";
import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AdminSettings() {
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState<Partial<SiteSettings>>({});

  const { data: settings, isLoading } = useQuery<SiteSettings>({
    queryKey: ["/api/settings"],
  });

  useEffect(() => {
    if (settings) {
      setFormData(settings);
    }
  }, [settings]);

  const updateMutation = useMutation({
    mutationFn: async (newData: Partial<SiteSettings>) => {
      const res = await fetch("/api/settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newData),
      });
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/settings"] });
      toast.success("Settings updated successfully");
    },
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateMutation.mutate(formData);
  };

  if (isLoading) return <AdminLayout>Loading...</AdminLayout>;

  return (
    <AdminLayout>
      <form onSubmit={handleSave} className="space-y-8">
        <div className="flex justify-between items-center bg-white p-6 rounded-[24px] shadow-sm border border-slate-100">
          <div>
            <h2 className="text-lg font-bold text-primary">
              Global Configuration
            </h2>
            <p className="text-sm text-muted-foreground">
              Manage your site details and financial info
            </p>
          </div>
          <Button
            type="submit"
            className="bg-secondary hover:bg-secondary/90 text-white h-12 px-8 rounded-xl gap-2 font-bold shadow-lg shadow-secondary/20"
          >
            <Save className="w-5 h-5" />
            Save All Changes
          </Button>
        </div>

        <Tabs defaultValue="financial" className="w-full">
          <TabsList className="bg-slate-100 p-1 rounded-2xl mb-8 w-fit">
            <TabsTrigger
              value="financial"
              className="rounded-xl px-8 data-[state=active]:bg-white data-[state=active]:shadow-sm"
            >
              Financial Info
            </TabsTrigger>
            <TabsTrigger
              value="contact"
              className="rounded-xl px-8 data-[state=active]:bg-white data-[state=active]:shadow-sm"
            >
              Contact Details
            </TabsTrigger>
            <TabsTrigger
              value="content"
              className="rounded-xl px-8 data-[state=active]:bg-white data-[state=active]:shadow-sm"
            >
              Site Content
            </TabsTrigger>
          </TabsList>

          <TabsContent value="financial" className="space-y-6">
            <Card className="border-none shadow-sm rounded-[32px] overflow-hidden">
              <CardHeader className="p-8 border-b border-slate-50">
                <CardTitle className="text-xl font-bold flex items-center gap-2">
                  <CreditCard className="w-6 h-6 text-secondary" />
                  Bank / Payment Details
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="font-bold text-primary ml-1">
                      Bank Name
                    </Label>
                    <Input
                      value={formData.bankName || ""}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          bankName: e.target.value,
                        }))
                      }
                      placeholder="e.g. Barclays Bank"
                      className="h-12 rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="font-bold text-primary ml-1">
                      Account Number
                    </Label>
                    <Input
                      value={formData.accountNumber || ""}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          accountNumber: e.target.value,
                        }))
                      }
                      placeholder="000000000"
                      className="h-12 rounded-xl"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="font-bold text-primary ml-1">
                      Account Name
                    </Label>
                    <Input
                      value={formData.accountName || ""}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          accountName: e.target.value,
                        }))
                      }
                      placeholder="Diverse Capital Group Ltd"
                      className="h-12 rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="font-bold text-primary ml-1">
                      SWIFT / BIC Code
                    </Label>
                    <Input
                      value={formData.swiftCode || ""}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          swiftCode: e.target.value,
                        }))
                      }
                      placeholder="ABCDEF123"
                      className="h-12 rounded-xl"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contact" className="space-y-6">
            <Card className="border-none shadow-sm rounded-[32px] overflow-hidden">
              <CardHeader className="p-8 border-b border-slate-50">
                <CardTitle className="text-xl font-bold flex items-center gap-2">
                  <Mail className="w-6 h-6 text-secondary" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="font-bold text-primary ml-1">
                      Support Email
                    </Label>
                    <Input
                      value={formData.contactEmail || ""}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          contactEmail: e.target.value,
                        }))
                      }
                      placeholder="support@diverse-capital.com"
                      className="h-12 rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="font-bold text-primary ml-1">
                      Contact Phone
                    </Label>
                    <Input
                      value={formData.contactPhone || ""}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          contactPhone: e.target.value,
                        }))
                      }
                      placeholder="+44 20 1234 5678"
                      className="h-12 rounded-xl"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="font-bold text-primary ml-1">
                    Physical Address
                  </Label>
                  <Input
                    value={formData.contactAddress || ""}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        contactAddress: e.target.value,
                      }))
                    }
                    placeholder="123 Financial District, London..."
                    className="h-12 rounded-xl"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="content" className="space-y-6">
            <Card className="border-none shadow-sm rounded-[32px] overflow-hidden">
              <CardHeader className="p-8 border-b border-slate-50">
                <CardTitle className="text-xl font-bold flex items-center gap-2">
                  <LayoutIcon className="w-6 h-6 text-secondary" />
                  Website Content Management
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-8">
                <div className="space-y-2">
                  <Label className="font-bold text-primary ml-1">
                    About Us Section
                  </Label>
                  <Textarea
                    value={formData.aboutUsContent || ""}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        aboutUsContent: e.target.value,
                      }))
                    }
                    className="min-h-[150px] rounded-2xl"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <Label className="font-bold text-primary ml-1">
                      Header Headline
                    </Label>
                    <Input
                      value={formData.headerContent || ""}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          headerContent: e.target.value,
                        }))
                      }
                      className="h-12 rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="font-bold text-primary ml-1">
                      Footer Copyright / Info
                    </Label>
                    <Input
                      value={formData.footerContent || ""}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          footerContent: e.target.value,
                        }))
                      }
                      className="h-12 rounded-xl"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </form>
    </AdminLayout>
  );
}
