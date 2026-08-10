import { Link, useLocation } from "react-router";
import { Button } from "./ui/button";
import { Search, Sparkles } from "lucide-react";
import { Input } from "./ui/input";

export function Header() {
  const location = useLocation();
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <Sparkles className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-semibold">FindMyAI</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link 
              to="/" 
              className={`transition-colors hover:text-primary ${
                location.pathname === '/' ? 'text-primary' : 'text-foreground'
              }`}
            >
              Home
            </Link>
            <Link
              to="/explore"
              className={`transition-colors hover:text-primary ${
                location.pathname === '/explore' ? 'text-primary' : 'text-foreground'
              }`}
            >
              Explore
            </Link>
            <Link
              to="/about"
              className={`transition-colors hover:text-primary ${
                location.pathname === '/about' ? 'text-primary' : 'text-foreground'
              }`}
            >
              About
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center relative w-80">
            <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search AI tools..." 
              className="pl-9 bg-input-background"
              aria-label="Search AI tools"
            />
          </div>
          
          <Button variant="ghost" size="icon" className="md:hidden" aria-label="Search">
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
