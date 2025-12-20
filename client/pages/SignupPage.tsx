import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";
import { Mail, Lock, User, ArrowRight, CheckCircle2, Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
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
    if (!formData.fullName.trim()) {
      toast.error("Please enter your full name");
      return;
    }

    if (!formData.email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }

    if (formData.password.length < 8) {
      toast.error("Password must be at least 8 characters long");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    if (!acceptTerms) {
      toast.error("Please accept the terms and conditions");
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast.success("Account created successfully! Welcome to Diverse Capital.");
      console.log("Signup data:", formData);

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      setAcceptTerms(false);

      // In a real app, you would redirect to dashboard or login
      // window.location.href = '/login';
    } catch (error) {
      toast.error("Failed to create account. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-primary text-white relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/5716001/pexels-photo-5716001.jpeg"
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
            <h1 className="text-4xl font-bold mb-2">Create Account</h1>
            <p className="text-white/70 text-sm">
              Join thousands of investors building wealth globally
            </p>
          </div>

          {/* Form Card */}
          <Card className="border-none bg-white/95 backdrop-blur shadow-2xl rounded-[24px] overflow-hidden">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary ml-1 flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Full Name
                  </label>
                  <Input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="h-12 rounded-xl border-slate-200 bg-slate-50 focus:bg-white transition-all text-primary placeholder-muted-foreground"
                  />
                </div>

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
                    placeholder="john@example.com"
                    className="h-12 rounded-xl border-slate-200 bg-slate-50 focus:bg-white transition-all text-primary placeholder-muted-foreground"
                  />
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary ml-1 flex items-center gap-2">
                    <Lock className="w-4 h-4" />
                    Password
                  </label>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="At least 8 characters"
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

                {/* Confirm Password */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary ml-1 flex items-center gap-2">
                    <Lock className="w-4 h-4" />
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="Confirm your password"
                      className="h-12 rounded-xl border-slate-200 bg-slate-50 focus:bg-white transition-all text-primary placeholder-muted-foreground pr-12"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Terms & Conditions */}
                <div className="flex items-start gap-3 py-2">
                  <Checkbox
                    checked={acceptTerms}
                    onCheckedChange={(checked) =>
                      setAcceptTerms(checked as boolean)
                    }
                    className="mt-1"
                  />
                  <label className="text-xs text-muted-foreground cursor-pointer">
                    I agree to the{" "}
                    <a href="#" className="text-primary font-bold hover:underline">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-primary font-bold hover:underline">
                      Privacy Policy
                    </a>
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
                      Creating account...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Create Account
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  )}
                </Button>
              </form>

              {/* Divider */}
              <div className="flex items-center gap-3 my-6">
                <div className="flex-grow h-px bg-slate-200"></div>
                <span className="text-xs text-muted-foreground font-medium">OR</span>
                <div className="flex-grow h-px bg-slate-200"></div>
              </div>

              {/* Social Signup */}
              <div className="grid grid-cols-2 gap-3">
                <Button
                  type="button"
                  variant="outline"
                  className="h-11 rounded-xl border-slate-200 text-primary hover:bg-slate-50 font-bold"
                  onClick={() => toast.info("Google signup - Coming soon")}
                >
                  Google
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="h-11 rounded-xl border-slate-200 text-primary hover:bg-slate-50 font-bold"
                  onClick={() => toast.info("LinkedIn signup - Coming soon")}
                >
                  LinkedIn
                </Button>
              </div>

              {/* Login Link */}
              <div className="text-center mt-6 pt-6 border-t border-slate-100">
                <p className="text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-primary font-bold hover:underline"
                  >
                    Log In
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Trust Indicators */}
          <div className="mt-8 grid grid-cols-3 gap-4 text-center text-sm">
            <div className="flex flex-col items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-secondary" />
              <span className="text-white/70 text-xs">256-bit Secure</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-secondary" />
              <span className="text-white/70 text-xs">FCA Regulated</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-secondary" />
              <span className="text-white/70 text-xs">Verified Investors</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
