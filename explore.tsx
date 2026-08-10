import { useState, useMemo } from "react";
import { useSearchParams } from "react-router";
import { ToolCard } from "../components/tool-card";
import { aiTools, categories } from "../data/ai-tools";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import { Search, Filter } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";

export function ExplorePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("search") || "");
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get("category") || "All"
  );
  const [selectedPricing, setSelectedPricing] = useState<string>(
    searchParams.get("pricing") || "All"
  );

  const filteredTools = useMemo(() => {
    return aiTools.filter((tool) => {
      const matchesSearch = 
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.category.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = 
        selectedCategory === "All" || tool.category === selectedCategory;
      
      const matchesPricing = 
        selectedPricing === "All" || tool.pricing === selectedPricing;

      return matchesSearch && matchesCategory && matchesPricing;
    });
  }, [searchQuery, selectedCategory, selectedPricing]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category !== "All") {
      setSearchParams({ category });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div className="py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Explore AI Tools</h1>
          <p className="text-lg text-muted-foreground">
            Browse our complete collection of {aiTools.length} AI tools
          </p>
        </div>

        {/* Filters */}
        <div className="bg-card border rounded-lg p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="h-5 w-5 text-muted-foreground" />
            <h2>Filters</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search tools..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 bg-input-background"
                aria-label="Search tools"
              />
            </div>

            {/* Pricing Filter */}
            <Select value={selectedPricing} onValueChange={setSelectedPricing}>
              <SelectTrigger aria-label="Filter by pricing">
                <SelectValue placeholder="All Pricing" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All Pricing</SelectItem>
                <SelectItem value="Free">Free</SelectItem>
                <SelectItem value="Freemium">Freemium</SelectItem>
                <SelectItem value="Paid">Paid</SelectItem>
              </SelectContent>
            </Select>

            {/* Results Count */}
            <div className="flex items-center text-sm text-muted-foreground">
              <span>
                Showing <span className="font-semibold text-foreground">{filteredTools.length}</span> of{" "}
                <span className="font-semibold text-foreground">{aiTools.length}</span> tools
              </span>
            </div>
          </div>
        </div>

        {/* Category Badges */}
        <div className="mb-8">
          <h3 className="text-sm font-semibold mb-3">Categories</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* Tools Grid */}
        {filteredTools.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">No tools found</h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your filters or search query
            </p>
            <Badge
              variant="outline"
              className="cursor-pointer"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
                setSelectedPricing("All");
                setSearchParams({});
              }}
            >
              Clear all filters
            </Badge>
          </div>
        )}
      </div>
    </div>
  );
}
