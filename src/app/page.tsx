import FeatureProjects from "@/components/FeaturerProjects";
import AboutPage from "@/components/AboutPage";
import InfiniteMovingCardsDemo from "@/components/InfiniteMovingCardsDemo";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { HoverBorderGradientDemo } from "@/components/HoverBoard";

export default function Home() {
  return (
    <main className="bg-black/[0.96] antialiased  min-h-screen" >  {/* min-h-screen bg-grid-white/[0.02] */}
      {/* <TracingBeam> */}
        <AboutPage />
        {/* <FeatureProjects /> */}
        {/* <InfiniteMovingCardsDemo /> */}
        {/* <HoverBorderGradientDemo name="Change Theme"/> */}
      {/* </TracingBeam> */}
    </main>
  );
}
