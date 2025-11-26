import { Hero } from "@/components/hero";
import { ProductSection } from "@/components/product-section";
import { TeamSection } from "@/components/team-section";
import { EarlyAccessForm } from "@/components/early-access";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <ProductSection />
      <TeamSection />
      <EarlyAccessForm />
    </main>
  );
}
