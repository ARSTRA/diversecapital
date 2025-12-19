import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function PlaceholderPage({ title }: { title: string }) {
  return (
    <Layout>
      <div className="py-32 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">{title}</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          We are currently building this section of the Diverse Capital platform. Stay tuned for a world-class investment experience.
        </p>
        <div className="p-12 bg-muted rounded-2xl border-2 border-dashed border-border mb-12">
          <p className="text-lg font-medium text-muted-foreground italic">
            "Diverse Capital is dedicated to providing institutional-grade access to global markets. This feature is being meticulously developed to ensure security and performance."
          </p>
        </div>
        <Link to="/">
          <Button size="lg" className="bg-secondary hover:bg-secondary/90">
            Return to Homepage
          </Button>
        </Link>
      </div>
    </Layout>
  );
}
