import { useParams, Link } from "react-router";
import { aiTools } from "../data/ai-tools";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Separator } from "../components/ui/separator";
import { Star, Users, ArrowLeft, ExternalLink, Check } from "lucide-react";

export function ToolDetailPage() {
  const { id } = useParams();
  const tool = aiTools.find((t) => t.id === id);

  if (!tool) {
    return (
      <div className="py-20 px-4 text-center">
        <h1 className="text-2xl font-bold mb-4">Tool not found</h1>
        <Button asChild>
          <Link to="/explore">Back to Explore</Link>
        </Button>
      </div>
    );
  }

  const pricingColors = {
    Free: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100',
    Freemium: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100',
    Paid: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100',
  };

  const relatedTools = aiTools
    .filter((t) => t.category === tool.category && t.id !== tool.id)
    .slice(0, 3);

  return (
    <div className="py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-6">
          <Link to="/explore">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Explore
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="flex flex-wrap items-start gap-3 mb-4">
                <h1 className="text-4xl font-bold">{tool.name}</h1>
                <Badge className={pricingColors[tool.pricing]}>
                  {tool.pricing}
                </Badge>
                <Badge variant="outline">{tool.category}</Badge>
              </div>

              <div className="flex items-center gap-6 text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold text-foreground">{tool.rating}</span>
                  <span className="text-sm">Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  <span className="font-semibold text-foreground">{tool.users}</span>
                  <span className="text-sm">Users</span>
                </div>
              </div>

              <p className="text-lg text-muted-foreground mb-8">
                {tool.description}
              </p>

              <Button size="lg" className="mb-8">
                Try {tool.name}
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <Separator className="my-8" />

            {/* Features */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Key Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {tool.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <Separator className="my-8" />

            {/* About */}
            <div>
              <h2 className="text-2xl font-bold mb-4">About {tool.name}</h2>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {tool.name} is a powerful AI tool in the {tool.category} category, designed to help 
                    professionals and teams work more efficiently. With a {tool.rating} star rating and 
                    over {tool.users} users worldwide, it has proven to be a trusted solution for many.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    The tool offers a {tool.pricing.toLowerCase()} pricing model, making it accessible 
                    to a wide range of users. Whether you're just getting started or looking for 
                    advanced features, {tool.name} provides the capabilities you need.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="mb-6 sticky top-20">
              <CardHeader>
                <CardTitle>Quick Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Category</div>
                  <Badge variant="outline">{tool.category}</Badge>
                </div>
                <Separator />
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Pricing</div>
                  <Badge className={pricingColors[tool.pricing]}>{tool.pricing}</Badge>
                </div>
                <Separator />
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Rating</div>
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{tool.rating}/5.0</span>
                  </div>
                </div>
                <Separator />
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Active Users</div>
                  <div className="font-semibold">{tool.users}</div>
                </div>
              </CardContent>
            </Card>

            {/* Related Tools */}
            {relatedTools.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Related Tools</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {relatedTools.map((relatedTool) => (
                    <Link
                      key={relatedTool.id}
                      to={`/tool/${relatedTool.id}`}
                      className="block p-3 rounded-lg border hover:bg-muted/50 transition-colors"
                    >
                      <div className="font-semibold mb-1">{relatedTool.name}</div>
                      <div className="text-sm text-muted-foreground line-clamp-2">
                        {relatedTool.description}
                      </div>
                      <div className="flex items-center gap-2 mt-2 text-sm">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span>{relatedTool.rating}</span>
                        <Badge className={`text-xs py-0 ${pricingColors[relatedTool.pricing]}`}>{relatedTool.pricing}</Badge>
                      </div>
                    </Link>
                  ))}
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
