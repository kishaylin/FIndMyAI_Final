import { Link } from "react-router";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Star, Users, ArrowRight } from "lucide-react";
import { AITool } from "../data/ai-tools";

interface ToolCardProps {
  tool: AITool;
}

export function ToolCard({ tool }: ToolCardProps) {
  const pricingColors = {
    Free: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100',
    Freemium: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100',
    Paid: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100',
  };

  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between gap-2 mb-2">
          <CardTitle className="text-xl">{tool.name}</CardTitle>
          <Badge className={pricingColors[tool.pricing]}>
            {tool.pricing}
          </Badge>
        </div>
        <Badge variant="outline" className="w-fit">
          {tool.category}
        </Badge>
      </CardHeader>
      
      <CardContent className="flex-1">
        <CardDescription className="text-base mb-4">
          {tool.description}
        </CardDescription>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span>{tool.rating}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{tool.users} users</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter>
        <Button asChild className="w-full group">
          <Link to={`/tool/${tool.id}`}>
            View Details
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
