import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import { Hospital as HospitalIcon } from "lucide-react";

const Hospital = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    hospitalId: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // TODO: Implement actual authentication once Lovable Cloud is enabled
    toast({
      title: "Login Successful!",
      description: "Welcome to the Hospital Portal",
    });
    
    setTimeout(() => {
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-md">
          <div className="mb-8 text-center">
            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
              <HospitalIcon className="h-8 w-8 text-accent" />
            </div>
            <h1 className="mb-2 text-3xl font-bold text-foreground">Hospital Portal</h1>
            <p className="text-muted-foreground">
              Access the hospital administration dashboard
            </p>
          </div>

          <Card className="shadow-[var(--shadow-card)]">
            <CardHeader>
              <CardTitle>Hospital Login</CardTitle>
              <CardDescription>
                Enter your credentials to access the management system
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="hospitalId">Hospital ID *</Label>
                  <Input
                    id="hospitalId"
                    placeholder="HOSP-12345"
                    value={formData.hospitalId}
                    onChange={(e) => setFormData({ ...formData, hospitalId: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password *</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    required
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Login to Portal
                </Button>

                <div className="text-center text-sm">
                  <a href="#" className="text-primary hover:underline">
                    Forgot your password?
                  </a>
                </div>
              </form>
            </CardContent>
          </Card>

          <div className="mt-6 rounded-lg border border-border bg-muted/30 p-4">
            <p className="text-sm text-muted-foreground">
              <strong>For new hospital registrations:</strong> Please contact our admin team at hospitals@lifelink.org or call 1-800-LIFE-LINK for verification and onboarding.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hospital;
