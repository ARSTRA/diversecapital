import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  MessageSquare,
  Search,
  Mail,
  Clock,
  Trash2,
  CheckCircle2,
  MoreVertical,
  User,
  ExternalLink,
} from "lucide-react";
import { Message } from "@shared/api";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

export default function AdminMessages() {
  const queryClient = useQueryClient();
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);

  const { data: messages = [], isLoading } = useQuery<Message[]>({
    queryKey: ["/api/messages"],
  });

  const markAsReadMutation = useMutation({
    mutationFn: async (id: string) => {
      const res = await fetch(`/api/messages/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isRead: true }),
      });
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/messages"] });
    },
  });

  return (
    <AdminLayout>
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4 bg-white px-4 h-14 rounded-2xl shadow-sm flex-grow max-w-md">
            <Search className="text-muted-foreground w-5 h-5" />
            <input
              placeholder="Search by name, email, subject..."
              className="bg-transparent border-none focus:ring-0 w-full text-sm font-medium"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {isLoading ? (
            [1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-24 bg-slate-100 animate-pulse rounded-2xl"
              />
            ))
          ) : messages.length === 0 ? (
            <div className="text-center py-24 bg-white rounded-[32px] border-2 border-dashed border-slate-200">
              <MessageSquare className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-20" />
              <p className="text-muted-foreground font-medium">
                No messages found in your inbox.
              </p>
            </div>
          ) : (
            messages.map((message) => (
              <Dialog key={message.id}>
                <DialogTrigger asChild>
                  <div
                    onClick={() =>
                      !message.isRead && markAsReadMutation.mutate(message.id)
                    }
                    className={cn(
                      "p-6 rounded-[24px] bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all cursor-pointer flex items-center justify-between group",
                      !message.isRead && "border-l-4 border-l-secondary",
                    )}
                  >
                    <div className="flex items-center gap-6">
                      <div
                        className={cn(
                          "w-12 h-12 rounded-2xl flex items-center justify-center",
                          message.isRead
                            ? "bg-slate-50 text-slate-400"
                            : "bg-secondary/10 text-secondary",
                        )}
                      >
                        {message.isRead ? (
                          <Mail className="w-6 h-6" />
                        ) : (
                          <Mail className="w-6 h-6 animate-bounce-slow" />
                        )}
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-3">
                          <span
                            className={cn(
                              "text-sm font-bold",
                              message.isRead
                                ? "text-primary/70"
                                : "text-primary",
                            )}
                          >
                            {message.name}
                          </span>
                          {!message.isRead && (
                            <span className="bg-secondary text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                              New
                            </span>
                          )}
                        </div>
                        <h4
                          className={cn(
                            "text-base font-bold",
                            message.isRead ? "text-primary/60" : "text-primary",
                          )}
                        >
                          {message.subject}
                        </h4>
                        <p className="text-xs text-muted-foreground line-clamp-1 max-w-lg">
                          {message.message}
                        </p>
                      </div>
                    </div>
                    <div className="text-right flex items-center gap-6">
                      <div className="flex flex-col items-end">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          {new Date(message.date).toLocaleDateString()}
                        </div>
                        <span className="text-[10px] text-muted-foreground mt-1">
                          {message.email}
                        </span>
                      </div>
                      <MoreVertical className="w-5 h-5 text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-2xl rounded-[32px]">
                  <DialogHeader>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center">
                        <User className="w-8 h-8 text-slate-400" />
                      </div>
                      <div>
                        <DialogTitle className="text-2xl font-bold text-primary">
                          {message.name}
                        </DialogTitle>
                        <p className="text-sm text-secondary font-medium">
                          {message.email}
                        </p>
                      </div>
                    </div>
                  </DialogHeader>
                  <div className="space-y-6 pt-4 border-t border-slate-100">
                    <div>
                      <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                        Subject
                      </span>
                      <h4 className="text-lg font-bold text-primary mt-1">
                        {message.subject}
                      </h4>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                        Message
                      </span>
                      <div className="mt-2 p-6 bg-slate-50 rounded-2xl text-primary leading-relaxed">
                        {message.message}
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        Received on {new Date(message.date).toLocaleString()}
                      </div>
                    </div>
                    <div className="flex gap-4 pt-4">
                      <Button className="flex-grow bg-primary text-white h-14 rounded-2xl gap-2 font-bold">
                        <ExternalLink className="w-5 h-5" />
                        Reply via Email
                      </Button>
                      <Button
                        variant="outline"
                        className="h-14 w-14 rounded-2xl border-slate-200 text-red-500 hover:bg-red-50"
                      >
                        <Trash2 className="w-6 h-6" />
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))
          )}
        </div>
      </div>
    </AdminLayout>
  );
}
