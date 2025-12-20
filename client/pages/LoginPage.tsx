import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";
import {
  Mail,
  Lock,
  ArrowRight,
  CheckCircle2,
  Eye,
  EyeOff,
} from "lucide-react";
import { toast } from "sonner";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }

    if (formData.password.length < 6) {
      toast.error("Please enter your password");
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast.success(`Welcome back! Logging in as ${formData.email}`);
      console.log("Login data:", { ...formData, rememberMe });

      // Reset form
      setFormData({
        email: "",
        password: "",
      });
      setRememberMe(false);

      // In a real app, you would redirect to dashboard
      // window.location.href = '/dashboard';
    } catch (error) {
      toast.error("Login failed. Please check your credentials.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-primary text-white relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/35260714/pexels-photo-35260714.jpeg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="text-center mb-8">
            <Link to="/" className="inline-block">
              <div className="flex items-center gap-2 justify-center mb-4">
                <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center font-bold">
                  DC
                </div>
                <span className="font-bold text-xl">DIVERSE CAPITAL</span>
              </div>
            </Link>
            <h1 className="text-4xl font-bold mb-2">Welcome Back</h1>
            <p className="text-white/70 text-sm">
              Sign in to access your investment portfolio
            </p>
          </div>

          {/* Form Card */}
          <Card className="border-none bg-white/95 backdrop-blur shadow-2xl rounded-[24px] overflow-hidden">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Email */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary ml-1 flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email Address
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="h-12 rounded-xl border-slate-200 bg-slate-50 focus:bg-white transition-all text-primary placeholder-muted-foreground"
                  />
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between ml-1 mb-2">
                    <label className="text-sm font-bold text-primary flex items-center gap-2">
                      <Lock className="w-4 h-4" />
                      Password
                    </label>
                    <Link
                      to="#"
                      className="text-xs text-secondary hover:underline font-bold"
                      onClick={() => toast.info("Password reset - Coming soon")}
                    >
                      Forgot?
                    </Link>
                  </div>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter your password"
                      className="h-12 rounded-xl border-slate-200 bg-slate-50 focus:bg-white transition-all text-primary placeholder-muted-foreground pr-12"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Remember Me */}
                <div className="flex items-center gap-3 py-2">
                  <Checkbox
                    checked={rememberMe}
                    onCheckedChange={(checked) =>
                      setRememberMe(checked as boolean)
                    }
                  />
                  <label className="text-sm text-muted-foreground cursor-pointer font-medium">
                    Remember me for 30 days
                  </label>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-primary hover:bg-primary/90 text-white h-12 rounded-xl font-bold text-lg shadow-lg shadow-primary/20 transition-all disabled:opacity-50 mt-6"
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      Signing in...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Sign In
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  )}
                </Button>
              </form>

              {/* Divider */}
              <div className="flex items-center gap-3 my-6">
                <div className="flex-grow h-px bg-slate-200"></div>
                <span className="text-xs text-muted-foreground font-medium">
                  OR
                </span>
                <div className="flex-grow h-px bg-slate-200"></div>
              </div>

              {/* Social Login */}
              <div className="grid grid-cols-2 gap-3">
                <Button
                  type="button"
                  variant="outline"
                  className="h-11 rounded-xl border-slate-200 text-primary hover:bg-slate-50 font-bold"
                  onClick={() => toast.info("Google login - Coming soon")}
                >
                  Google
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="h-11 rounded-xl border-slate-200 text-primary hover:bg-slate-50 font-bold"
                  onClick={() => toast.info("LinkedIn login - Coming soon")}
                >
                  LinkedIn
                </Button>
              </div>

              {/* Signup Link */}
              <div className="text-center mt-6 pt-6 border-t border-slate-100">
                <p className="text-sm text-muted-foreground">
                  Don't have an account?{" "}
                  <Link
                    to="/signup"
                    className="text-primary font-bold hover:underline"
                  >
                    Sign Up
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Security Features */}
          <div className="mt-8 bg-white/10 backdrop-blur rounded-[16px] p-6 border border-white/20">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-white">
                    Two-Factor Authentication
                  </p>
                  <p className="text-xs text-white/60">
                    Protect your account with 2FA
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-white">
                    Bank-Level Security
                  </p>
                  <p className="text-xs text-white/60">
                    256-bit SSL encryption
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-white">FCA Regulated</p>
                  <p className="text-xs text-white/60">
                    Authorized & monitored
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
