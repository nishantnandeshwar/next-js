import FeatureProjects from "@/components/FeaturerProjects";
import HeroSections from "@/components/HeroSections";
import InfiniteMovingCardsDemo from "@/components/InfiniteMovingCardsDemo";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { HoverBorderGradientDemo } from "@/components/HoverBoard";

export default function Home() {
  return (
    <main className="bg-black/[0.96] antialiased  min-h-screen" >  {/* min-h-screen bg-grid-white/[0.02] */}
      <TracingBeam>
        <HeroSections />
        <FeatureProjects />
        {/* <InfiniteMovingCardsDemo /> */}
        {/* <HoverBorderGradientDemo name="Change Theme"/> */}
      </TracingBeam>
    </main>
  );
}
