import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import { Users } from "lucide-react";

const Recipient = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    requiredType: "",
    bloodGroup: "",
    organType: "",
    contact: "",
    hospitalId: "",
    urgencyLevel: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // TODO: Submit to database once Lovable Cloud is enabled
    toast({
      title: "Request Submitted!",
      description: "We're searching for compatible donors. You'll be notified soon.",
    });
    
    setTimeout(() => {
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-2xl">
          <div className="mb-8 text-center">
            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
              <Users className="h-8 w-8 text-secondary" />
            </div>
            <h1 className="mb-2 text-3xl font-bold text-foreground">Find a Donor</h1>
            <p className="text-muted-foreground">
              Register your requirement and we'll help you find a compatible donor quickly.
            </p>
          </div>

          <Card className="shadow-[var(--shadow-card)]">
            <CardHeader>
              <CardTitle>Recipient Registration</CardTitle>
              <CardDescription>
                Provide your details and requirements. We'll match you with compatible donors.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    placeholder="Jane Smith"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="age">Age *</Label>
                  <Input
                    id="age"
                    type="number"
                    placeholder="30"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="requiredType">Required Type *</Label>
                  <Select
                    value={formData.requiredType}
                    onValueChange={(value) => setFormData({ ...formData, requiredType: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="blood">Blood</SelectItem>
                      <SelectItem value="organ">Organ</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {formData.requiredType === "blood" && (
                  <div className="space-y-2">
                    <Label htmlFor="bloodGroup">Required Blood Group *</Label>
                    <Select
                      value={formData.bloodGroup}
                      onValueChange={(value) => setFormData({ ...formData, bloodGroup: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select blood group" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="A+">A+</SelectItem>
                        <SelectItem value="A-">A-</SelectItem>
                        <SelectItem value="B+">B+</SelectItem>
                        <SelectItem value="B-">B-</SelectItem>
                        <SelectItem value="AB+">AB+</SelectItem>
                        <SelectItem value="AB-">AB-</SelectItem>
                        <SelectItem value="O+">O+</SelectItem>
                        <SelectItem value="O-">O-</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {formData.requiredType === "organ" && (
                  <div className="space-y-2">
                    <Label htmlFor="organType">Required Organ *</Label>
                    <Select
                      value={formData.organType}
                      onValueChange={(value) => setFormData({ ...formData, organType: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select organ" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="kidney">Kidney</SelectItem>
                        <SelectItem value="liver">Liver</SelectItem>
                        <SelectItem value="heart">Heart</SelectItem>
                        <SelectItem value="lungs">Lungs</SelectItem>
                        <SelectItem value="pancreas">Pancreas</SelectItem>
                        <SelectItem value="cornea">Cornea</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="contact">Contact Number *</Label>
                  <Input
                    id="contact"
                    type="tel"
                    placeholder="+1 (555) 987-6543"
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="hospitalId">Hospital ID/Name *</Label>
                  <Input
                    id="hospitalId"
                    placeholder="City General Hospital"
                    value={formData.hospitalId}
                    onChange={(e) => setFormData({ ...formData, hospitalId: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="urgencyLevel">Urgency Level *</Label>
                  <Select
                    value={formData.urgencyLevel}
                    onValueChange={(value) => setFormData({ ...formData, urgencyLevel: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select urgency level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low - Routine</SelectItem>
                      <SelectItem value="medium">Medium - Within weeks</SelectItem>
                      <SelectItem value="high">High - Within days</SelectItem>
                      <SelectItem value="critical">Critical - Urgent</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex gap-4">
                  <Button type="submit" className="flex-1" size="lg">
                    Submit Request
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => navigate("/")}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          <div className="mt-6 rounded-lg border border-destructive/20 bg-destructive/5 p-4">
            <p className="text-sm text-destructive">
              <strong>Important:</strong> This information will be shared with verified hospitals and compatible donors to expedite the matching process. For critical cases, please also contact your hospital directly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipient;
