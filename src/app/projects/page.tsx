"use client";

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { TabsDemo } from "@/components/stacks-by-project";

const words = `With over 3.6 years of experience in developing and designing multiple projects, 
I have a strong proficiency in React.js, React Native, and Node.js. 
My expertise lies in building and delivering high-quality software solutions that meet client requirements and enhance business processes.
`;
const projectScreen = () => {
    return (
        <main className="antialiased bg-black/[0.96] min-h-screen flex-1 mt-[4rem] ">
            <div className="pt-32 pb-32 mx-10">
                <div className="flex flex-row justify-center">
                    <div className="w-9/12">
                    <TextGenerateEffect words={words} />
                    </div>
                </div>
                <div>
                    <TabsDemo />
                </div>
            </div>
        </main>
    )
}

export default projectScreen