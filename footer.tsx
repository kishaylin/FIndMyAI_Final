import { Sparkles } from "lucide-react";
import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="border-t bg-muted/30 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Sparkles className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="text-lg font-semibold">FindMyAI</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Discover and explore the best AI tools for your needs.
            </p>
          </div>

          <div>
            <h3 className="mb-4">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/explore" className="text-muted-foreground hover:text-primary transition-colors">All Tools</Link></li>
              <li><Link to="/explore?category=Writing" className="text-muted-foreground hover:text-primary transition-colors">Writing</Link></li>
              <li><Link to="/explore?category=Design" className="text-muted-foreground hover:text-primary transition-colors">Design</Link></li>
              <li><Link to="/explore?category=Development" className="text-muted-foreground hover:text-primary transition-colors">Development</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/explore?category=Marketing" className="text-muted-foreground hover:text-primary transition-colors">Marketing</Link></li>
              <li><Link to="/explore?category=Productivity" className="text-muted-foreground hover:text-primary transition-colors">Productivity</Link></li>
              <li><Link to="/explore?category=Analytics" className="text-muted-foreground hover:text-primary transition-colors">Analytics</Link></li>
              <li><Link to="/explore?category=Video" className="text-muted-foreground hover:text-primary transition-colors">Video</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/about#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2026 FindMyAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
