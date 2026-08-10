import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { ToolCard } from "../components/tool-card";
import { aiTools } from "../data/ai-tools";
import { Search, Sparkles, Zap, Shield, TrendingUp } from "lucide-react";

export function HomePage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/explore?search=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      navigate("/explore");
    }
  };

  const featuredTools = aiTools.slice(0, 6);

  const topFreeTools = aiTools
    .filter((t) => t.pricing === "Free")
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  const topPaidTools = aiTools
    .filter((t) => t.pricing === "Paid")
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary">Discover the Future of AI</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Find Your Perfect AI Tool
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Explore our curated library of the best AI tools for writing, design, development, and more. 
            Trusted by millions of professionals worldwide.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="relative w-full sm:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search AI tools..."
                className="pl-10 h-12 bg-background shadow-sm"
                aria-label="Search AI tools"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              />
            </div>
            <Button size="lg" onClick={handleSearch}>
              Search
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/explore">Explore All Tools</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">{aiTools.length}+</div>
              <div className="text-sm text-muted-foreground">AI Tools</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">10+</div>
              <div className="text-sm text-muted-foreground">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">4.6</div>
              <div className="text-sm text-muted-foreground">Avg Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2">Curated Selection</h3>
              <p className="text-muted-foreground">
                Hand-picked AI tools verified for quality and performance
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2">Trusted & Reliable</h3>
              <p className="text-muted-foreground">
                Professional-grade tools used by industry leaders
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2">Always Updated</h3>
              <p className="text-muted-foreground">
                Latest AI tools and features added regularly
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tools Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured AI Tools</h2>
              <p className="text-muted-foreground">
                Most popular and highly-rated tools in our collection
              </p>
            </div>
            <Button variant="outline" asChild className="hidden md:inline-flex">
              <Link to="/explore">View All</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>

          <div className="text-center mt-8 md:hidden">
            <Button variant="outline" asChild className="w-full sm:w-auto">
              <Link to="/explore">View All Tools</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Top Free Tools */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Top Free Tools</h2>
              <p className="text-muted-foreground">Best AI tools available at no cost</p>
            </div>
            <Button variant="outline" asChild className="hidden md:inline-flex">
              <Link to="/explore?pricing=Free">View All Free</Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topFreeTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
          <div className="text-center mt-8 md:hidden">
            <Button variant="outline" asChild>
              <Link to="/explore?pricing=Free">View All Free Tools</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Top Paid Tools */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Top Paid Tools</h2>
              <p className="text-muted-foreground">Premium AI tools worth the investment</p>
            </div>
            <Button variant="outline" asChild className="hidden md:inline-flex">
              <Link to="/explore?pricing=Paid">View All Paid</Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topPaidTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
          <div className="text-center mt-8 md:hidden">
            <Button variant="outline" asChild>
              <Link to="/explore?pricing=Paid">View All Paid Tools</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to boost your productivity?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join millions of professionals, students or go getters using AI tools to work smarter
          </p>
          <Button size="lg" asChild>
            <Link to="/explore">Get Started</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
