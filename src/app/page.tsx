import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteNav } from "@/components/layout/SiteNav";
import { ClosingSection } from "@/components/marketing/ClosingSection";
import { Hero } from "@/components/marketing/Hero";
import { Process } from "@/components/marketing/Process";

export default function Home() {
  return (
    <main className="home">
      <SiteNav />

      <Hero />

      <Process />

      <ClosingSection />

      <SiteFooter />
    </main>
  );
}