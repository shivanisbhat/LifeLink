import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import { Heart, Users, Activity, Clock } from "lucide-react";

const Dashboard = () => {
  // Mock data - will be replaced with real data from Lovable Cloud
  const mockDonors = [
    { id: 1, name: "John Doe", bloodGroup: "A+", city: "New York", availability: "Available" },
    { id: 2, name: "Sarah Smith", bloodGroup: "O-", city: "Los Angeles", availability: "Available" },
    { id: 3, name: "Mike Johnson", bloodGroup: "B+", city: "Chicago", availability: "Not Available" },
  ];

  const mockRecipients = [
    { id: 1, name: "Jane Wilson", required: "A+ Blood", urgency: "High", hospital: "City General" },
    { id: 2, name: "Robert Brown", required: "Kidney", urgency: "Critical", hospital: "Memorial Hospital" },
    { id: 3, name: "Emily Davis", required: "O+ Blood", urgency: "Medium", hospital: "Central Medical" },
  ];

  const getUrgencyColor = (urgency: string) => {
    switch (urgency.toLowerCase()) {
      case "critical":
        return "destructive";
      case "high":
        return "destructive";
      case "medium":
        return "default";
      default:
        return "secondary";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">
            Overview of donors, recipients, and recent activity
          </p>
        </div>

        {/* Stats Cards */}
        <div className="mb-8 grid gap-6 md:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Donors</CardTitle>
              <Heart className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,234</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Recipients</CardTitle>
              <Users className="h-4 w-4 text-secondary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">567</div>
              <p className="text-xs text-muted-foreground">+8% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Successful Matches</CardTitle>
              <Activity className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">89</div>
              <p className="text-xs text-muted-foreground">This month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Requests</CardTitle>
              <Clock className="h-4 w-4 text-destructive" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">23</div>
              <p className="text-xs text-muted-foreground">Awaiting match</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Donors List */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Donors</CardTitle>
              <CardDescription>Latest registered donors in the system</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockDonors.map((donor) => (
                  <div
                    key={donor.id}
                    className="flex items-center justify-between rounded-lg border border-border bg-card p-4"
                  >
                    <div>
                      <p className="font-medium text-foreground">{donor.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {donor.bloodGroup} • {donor.city}
                      </p>
                    </div>
                    <Badge
                      variant={donor.availability === "Available" ? "default" : "secondary"}
                    >
                      {donor.availability}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recipients List */}
          <Card>
            <CardHeader>
              <CardTitle>Active Recipients</CardTitle>
              <CardDescription>Patients waiting for compatible donors</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockRecipients.map((recipient) => (
                  <div
                    key={recipient.id}
                    className="flex items-center justify-between rounded-lg border border-border bg-card p-4"
                  >
                    <div>
                      <p className="font-medium text-foreground">{recipient.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {recipient.required} • {recipient.hospital}
                      </p>
                    </div>
                    <Badge variant={getUrgencyColor(recipient.urgency)}>
                      {recipient.urgency}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>System Status</CardTitle>
            <CardDescription>Current operational status of LifeLink platform</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Database Connection</span>
                <Badge variant="default">Operational</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Matching Algorithm</span>
                <Badge variant="default">Active</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Notification Service</span>
                <Badge variant="default">Running</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
