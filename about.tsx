import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Separator } from "../components/ui/separator";
import {
  Sparkles,
  Target,
  Search,
  Zap,
  Users,
  Mail,
  Globe,
  MessageSquare,
  CheckCircle,
} from "lucide-react";

export function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary">Our Mission</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            About FindMyAI
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We built the directory we wished existed — a single, trusted place to discover the right AI tool for the job, not just the most famous one.
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">The Problem We Solved</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                The AI landscape has exploded. There are now thousands of tools spanning writing, design, development, healthcare, finance, and beyond — and the number grows every week. But finding the <em>right</em> tool for a specific task has become genuinely hard.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Most people default to a general-purpose AI like ChatGPT or Gemini and try to coax it into doing specialised work. That works — up to a point. But a radiologist reading CT scans, a finance analyst building forecasts, or a teacher generating lesson plans will get dramatically better results from a tool purpose-built for their domain.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The gap between "I know AI can help" and "I know exactly which AI to use" is where productivity is lost. FindMyAI closes that gap.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { icon: Search, text: "Hours spent searching Reddit, Product Hunt, and blog round-ups for tool recommendations" },
                { icon: Target, text: "Generic tools producing generic output when your task demands specialist precision" },
                { icon: Zap, text: "Missed productivity gains because the right tool simply wasn't discoverable" },
              ].map(({ icon: Icon, text }) => (
                <Card key={text} className="border-destructive/20 bg-destructive/5">
                  <CardContent className="flex items-start gap-4 pt-6">
                    <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-destructive/10 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-destructive" />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* What We Do */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What FindMyAI Does</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We curate, categorise, and surface the best AI tools across every professional discipline so you can spend less time searching and more time doing.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Search,
                title: "Discover by Task",
                body: "Browse 200+ tools organised by what you actually need to do — not just broad technology labels. Whether it's clinical documentation, ad creative, or code review, there is a purpose-built tool for it.",
              },
              {
                icon: CheckCircle,
                title: "Compare at a Glance",
                body: "Every listing shows pricing model, user ratings, and key features so you can make an informed choice in seconds rather than opening ten browser tabs.",
              },
              {
                icon: Zap,
                title: "Go Deeper, Faster",
                body: "Tool detail pages surface the features that matter, related alternatives in the same category, and direct links to get started — no dead ends.",
              },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="text-center p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Specialised Tools Win */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-6 text-center">Why Specialist AI Beats General AI</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            General AI models are impressive Swiss Army knives. But when you need a scalpel, a Swiss Army knife is the wrong tool.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Domain-trained accuracy",
                body: "Specialist tools are trained or fine-tuned on domain-specific data. A legal AI has read millions of contracts; a medical AI understands clinical terminology. Their outputs are calibrated to your field.",
              },
              {
                title: "Workflow integration",
                body: "Purpose-built tools plug directly into the software you already use — your EHR, your IDE, your CRM — eliminating the copy-paste friction of routing everything through a general chatbot.",
              },
              {
                title: "Compliance and safety",
                body: "Sector-specific tools are built with the relevant compliance frameworks in mind — HIPAA for healthcare, SOC 2 for enterprise, commercial-safe licensing for creative work.",
              },
              {
                title: "Measurably better output",
                body: "When your tool understands the nuances of your task, first-draft quality improves, revision cycles shrink, and the time from idea to deliverable drops significantly.",
              },
            ].map(({ title, body }) => (
              <Card key={title}>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">{title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-4 text-center">Who FindMyAI Is For</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            Anyone who wants to work smarter — not just anyone who wants to use AI.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "🧑‍💻", label: "Developers" },
              { icon: "🎨", label: "Designers" },
              { icon: "📊", label: "Analysts" },
              { icon: "✍️", label: "Writers" },
              { icon: "🏥", label: "Healthcare pros" },
              { icon: "📈", label: "Finance teams" },
              { icon: "🎓", label: "Educators" },
              { icon: "🛒", label: "E-commerce founders" },
            ].map(({ icon, label }) => (
              <Card key={label} className="text-center">
                <CardContent className="pt-6 pb-4">
                  <div className="text-3xl mb-2">{icon}</div>
                  <p className="text-sm font-medium">{label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* Contact */}
      <section className="py-20 px-4" id="contact">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Have a tool you think we should feature, spotted outdated information, or just want to say hello? We read every message.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-sm text-muted-foreground mb-3">For general enquiries and partnership requests</p>
                <a
                  href="mailto:hello@findmyai.com"
                  className="text-sm text-primary hover:underline font-medium"
                >
                  hello@findmyai.com
                </a>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-1">Submit a Tool</h3>
                <p className="text-sm text-muted-foreground mb-3">Know an AI tool that should be listed here?</p>
                <a
                  href="mailto:submit@findmyai.com"
                  className="text-sm text-primary hover:underline font-medium"
                >
                  submit@findmyai.com
                </a>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-1">Follow Us</h3>
                <p className="text-sm text-muted-foreground mb-3">Stay up to date with new tools and categories</p>
                <a
                  href="https://x.com/findmyai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline font-medium"
                >
                  @findmyai
                </a>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link to="/explore">Start Exploring Tools</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
