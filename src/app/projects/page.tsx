"use client";

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { TabsDemo } from "@/components/stacks-by-project";

const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows
`;
const projectScreen = () => {
    return (
        <main className="antialiased bg-black/[0.96] min-h-screen flex-1">
            <div className="pt-32 pb-32 mx-10">
                <div>
                    <TextGenerateEffect words={words} />
                </div>
                <div>
                    <TabsDemo />
                </div>
            </div>
        </main>
    )
}

export default projectScreen