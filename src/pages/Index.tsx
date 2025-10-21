import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, Hospital, Activity } from "lucide-react";
import Navbar from "@/components/Navbar";
import heroImage from "@/assets/hero-medical.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-4xl font-bold text-primary-foreground md:text-6xl">
              Connecting Givers to Receivers
            </h1>
            <p className="mb-8 text-xl text-primary-foreground/90 md:text-2xl">
              Every Drop, Every Organ, Every Life Matters
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/donor">
                <Button variant="hero" size="lg">
                  Register as Donor
                </Button>
              </Link>
              <Link to="/recipient">
                <Button variant="hero" size="lg">
                  Find a Donor
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b border-border bg-card py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary">1000+</div>
              <div className="text-sm text-muted-foreground">Active Donors</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-secondary">500+</div>
              <div className="text-sm text-muted-foreground">Lives Saved</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-accent">50+</div>
              <div className="text-sm text-muted-foreground">Partner Hospitals</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-destructive">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">How LifeLink Works</h2>
            <p className="text-lg text-muted-foreground">
              A simple, secure platform connecting those who give with those who need
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-border bg-gradient-to-b from-card to-card shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-card-hover)]">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Register as Donor</CardTitle>
                <CardDescription>
                  Sign up and share your willingness to donate blood or organs. Your information remains secure and confidential.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border bg-gradient-to-b from-card to-card shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-card-hover)]">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Smart Matching</CardTitle>
                <CardDescription>
                  Our system instantly matches compatible donors with recipients based on blood type, organ type, and location.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border bg-gradient-to-b from-card to-card shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-card-hover)]">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <Hospital className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Hospital Verification</CardTitle>
                <CardDescription>
                  Verified hospitals manage the process, ensuring safety, compliance, and proper medical procedures.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="border-t border-border bg-gradient-to-r from-primary/5 to-secondary/5 py-20">
        <div className="container mx-auto px-4 text-center">
          <Activity className="mx-auto mb-6 h-16 w-16 text-primary" />
          <h2 className="mb-4 text-3xl font-bold text-foreground">Ready to Make a Difference?</h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Join thousands of heroes who have chosen to give the gift of life
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/donor">
              <Button size="lg">Become a Donor</Button>
            </Link>
            <Link to="/hospital">
              <Button size="lg" variant="outline">
                Hospital Portal
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center gap-2 text-lg font-bold">
                <Heart className="h-5 w-5 fill-destructive text-destructive" />
                <span>LifeLink</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Connecting life-savers with those in need, one donation at a time.
              </p>
            </div>
            <div>
              <h3 className="mb-4 font-semibold">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/donor" className="text-muted-foreground hover:text-primary">Donor Registration</Link></li>
                <li><Link to="/recipient" className="text-muted-foreground hover:text-primary">Find a Donor</Link></li>
                <li><Link to="/hospital" className="text-muted-foreground hover:text-primary">Hospital Portal</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-semibold">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-primary">About Donation</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Safety Guidelines</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">FAQs</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-semibold">Contact</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Email: support@lifelink.org</li>
                <li>Phone: 1-800-LIFE-LINK</li>
                <li>Available 24/7</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 LifeLink. All rights reserved. Saving lives, one connection at a time.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
