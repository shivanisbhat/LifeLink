import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-xl font-bold text-foreground hover:text-primary transition-colors">
            <Heart className="h-6 w-6 fill-destructive text-destructive" />
            <span>LifeLink</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-6">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/") ? "text-primary" : "text-foreground"
              }`}
            >
              Home
            </Link>
            <Link 
              to="/donor" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/donor") ? "text-primary" : "text-foreground"
              }`}
            >
              Donor
            </Link>
            <Link 
              to="/recipient" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/recipient") ? "text-primary" : "text-foreground"
              }`}
            >
              Recipient
            </Link>
            <Link 
              to="/hospital" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/hospital") ? "text-primary" : "text-foreground"
              }`}
            >
              Hospital
            </Link>
            <Link 
              to="/dashboard" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/dashboard") ? "text-primary" : "text-foreground"
              }`}
            >
              Dashboard
            </Link>
          </div>

          <Link to="/contact">
            <Button size="sm">Contact Us</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
