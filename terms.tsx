import { Link } from "react-router";
import { Separator } from "../components/ui/separator";
import { FileText } from "lucide-react";

const LAST_UPDATED = "1 July 2026";

const sections = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    body: [
      "By accessing or using FindMyAI (the \"Site\"), you agree to be bound by these Terms of Service (\"Terms\"). If you do not agree to these Terms, please do not use the Site.",
      "We reserve the right to update these Terms at any time. Continued use of the Site after changes are posted constitutes your acceptance of the revised Terms. The date at the top of this page will always reflect when the Terms were last updated.",
    ],
  },
  {
    id: "description",
    title: "2. Description of Service",
    body: [
      "FindMyAI is an informational directory that catalogues and describes third-party artificial intelligence tools. We provide descriptions, pricing information, user ratings, and feature summaries to help individuals and organisations discover AI tools that are relevant to their specific tasks.",
      "FindMyAI is a discovery platform only. We do not develop, sell, license, or operate any of the AI tools listed on the Site. All listed tools are independent products owned by their respective companies.",
    ],
  },
  {
    id: "accuracy",
    title: "3. Accuracy of Information",
    body: [
      "We strive to keep all tool listings accurate and up to date, including pricing tiers, feature sets, and ratings. However, the AI industry changes rapidly. Pricing models, features, and availability can change without notice.",
      "FindMyAI makes no warranties, express or implied, regarding the accuracy, completeness, or currency of any information on the Site. You should always verify current details — especially pricing — directly with the tool provider before making any purchasing or business decision.",
      "User ratings displayed on the Site are illustrative and curated by our editorial team. They are not aggregated from live user reviews unless explicitly stated.",
    ],
  },
  {
    id: "third-party",
    title: "4. Third-Party Tools and Links",
    body: [
      "The Site contains links to third-party websites and products. These links are provided for your convenience and informational purposes only. FindMyAI does not endorse, sponsor, or take responsibility for the content, privacy practices, terms, or conduct of any third-party site.",
      "Your use of any third-party tool or service is entirely at your own risk and is governed by that tool's own terms of service, privacy policy, and licence agreement. We encourage you to read those documents before using any listed tool.",
      "FindMyAI may receive referral compensation from some tool providers when you click through to their site. This does not influence our editorial listings or ratings. Tools are not ranked by commercial relationship.",
    ],
  },
  {
    id: "intellectual-property",
    title: "5. Intellectual Property",
    body: [
      "All original content on FindMyAI — including written descriptions, page layouts, logos, and the curation and organisation of listings — is the intellectual property of FindMyAI and is protected by applicable copyright and trademark law.",
      "Tool names, logos, and trademarks displayed on the Site remain the property of their respective owners and are used solely for identification and informational purposes.",
      "You may not reproduce, distribute, scrape, or create derivative works from any content on the Site without our express written permission.",
    ],
  },
  {
    id: "user-conduct",
    title: "6. Acceptable Use",
    body: [
      "You agree not to use the Site in any manner that:",
    ],
    list: [
      "Violates any applicable local, national, or international law or regulation",
      "Involves automated scraping, crawling, or data harvesting without prior written consent",
      "Attempts to gain unauthorised access to any part of the Site or its infrastructure",
      "Transmits unsolicited commercial communications or spam",
      "Involves impersonation of FindMyAI, its team, or any third party",
      "Interferes with or disrupts the integrity or performance of the Site",
    ],
    bodyAfter: [
      "We reserve the right to restrict or terminate access to the Site for any user who violates these rules, at our sole discretion and without notice.",
    ],
  },
  {
    id: "submissions",
    title: "7. Tool Submissions and User Contributions",
    body: [
      "If you submit a tool for listing on FindMyAI (via email or any submission form), you represent that you have the authority to do so and that the information provided is accurate to the best of your knowledge.",
      "By submitting information, you grant FindMyAI a non-exclusive, royalty-free, worldwide licence to use, publish, and display that information on the Site. FindMyAI reserves the right to edit, decline, or remove any submission at its discretion.",
      "We do not guarantee that submitted tools will be listed, reviewed, or responded to within any specific timeframe.",
    ],
  },
  {
    id: "disclaimers",
    title: "8. Disclaimers and Limitation of Liability",
    body: [
      "The Site and its content are provided on an \"as is\" and \"as available\" basis without any warranties of any kind, whether express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement.",
      "FindMyAI does not warrant that the Site will be uninterrupted, error-free, or free of viruses or other harmful components.",
      "To the fullest extent permitted by law, FindMyAI and its team shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of, or inability to use, the Site or any tool listed on it — even if we have been advised of the possibility of such damages.",
      "Our total aggregate liability to you for any claim arising out of or relating to these Terms or the Site shall not exceed £100 (or the equivalent in your local currency).",
    ],
  },
  {
    id: "privacy",
    title: "9. Privacy",
    body: [
      "Your use of the Site is also governed by our Privacy Policy, which is incorporated into these Terms by reference. By using the Site, you consent to the data practices described in that policy.",
      "FindMyAI does not require account creation to browse the directory. Where contact forms or email submission features are provided, we collect only the information you voluntarily supply and use it solely to respond to your enquiry.",
    ],
  },
  {
    id: "changes",
    title: "10. Changes to the Site",
    body: [
      "FindMyAI reserves the right to modify, suspend, or discontinue any part of the Site at any time without notice or liability. This includes adding or removing tool listings, restructuring categories, and changing how information is presented.",
      "We may also update the scope of the Site — for example, expanding into new categories or regions — without prior announcement.",
    ],
  },
  {
    id: "governing-law",
    title: "11. Governing Law and Disputes",
    body: [
      "These Terms shall be governed by and construed in accordance with the laws of England and Wales, without regard to its conflict of law provisions.",
      "Any dispute arising under or in connection with these Terms shall first be subject to good-faith negotiation. If unresolved within 30 days, disputes shall be submitted to the exclusive jurisdiction of the courts of England and Wales.",
    ],
  },
  {
    id: "contact",
    title: "12. Contact",
    body: [
      "If you have any questions about these Terms of Service, please contact us at:",
    ],
    contact: {
      email: "legal@findmyai.com",
      address: "FindMyAI, United Kingdom",
    },
  },
];

export function TermsPage() {
  return (
    <div className="py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <FileText className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary">Legal</span>
          </div>
          <h1 className="text-4xl font-bold mb-3">Terms of Service</h1>
          <p className="text-muted-foreground">Last updated: {LAST_UPDATED}</p>
          <Separator className="mt-6" />
        </div>

        {/* Table of Contents */}
        <nav className="bg-muted/40 rounded-lg p-6 mb-10" aria-label="Table of contents">
          <h2 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">Contents</h2>
          <ol className="space-y-1">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="text-sm text-primary hover:underline"
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Sections */}
        <div className="space-y-12">
          {sections.map((s) => (
            <section key={s.id} id={s.id} aria-labelledby={`heading-${s.id}`}>
              <h2 id={`heading-${s.id}`} className="text-xl font-bold mb-4">{s.title}</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                {s.body.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
                {s.list && (
                  <ul className="list-disc list-inside space-y-1 pl-2">
                    {s.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
                {s.bodyAfter?.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
                {s.contact && (
                  <div className="bg-muted/40 rounded-lg p-4 not-italic">
                    <p>
                      Email:{" "}
                      <a href={`mailto:${s.contact.email}`} className="text-primary hover:underline">
                        {s.contact.email}
                      </a>
                    </p>
                    <p className="mt-1">{s.contact.address}</p>
                  </div>
                )}
              </div>
              <Separator className="mt-12" />
            </section>
          ))}
        </div>

        {/* Footer nav */}
        <div className="mt-10 flex flex-wrap gap-4 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary transition-colors">← Back to Home</Link>
          <Link to="/about#contact" className="hover:text-primary transition-colors">Contact Us</Link>
        </div>
      </div>
    </div>
  );
}
