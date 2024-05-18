import FeatureCourses from "@/components/FeatureCourses";
import HeroSections from "@/components/HeroSections";
import InfiniteMovingCardsDemo from "@/components/InfiniteMovingCardsDemo";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function Home() {
  return (
       <main className=" bg-black/[0.96] antialiased  min-h-screen flex-1" >  {/* min-h-screen bg-grid-white/[0.02] */}
        <TracingBeam>
        <HeroSections />
        <FeatureCourses />
        <InfiniteMovingCardsDemo />
        </TracingBeam>
      </main>
  );
}
