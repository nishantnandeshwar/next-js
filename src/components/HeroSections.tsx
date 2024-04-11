import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import { SparklesCore } from "./ui/sparkles"
import { Button } from "./ui/moving-border";

function HeroSections() {
    return (
        <div className="h-auto md:h-[50rem] w-full rounded-md flex flex-col item-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />
            <div className="w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
                <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Master the art of music</h1>
                <div className="w-[40rem] h-40 relative">
                    {/* Gradients */}
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

                    {/* Core component */}
                    <SparklesCore
                        background="transparent"
                        minSize={0.4}
                        maxSize={1}
                        particleDensity={1200}
                        className="w-full h-full"
                        particleColor="#FFFFFF"
                    />

                    {/* Radial Gradient to prevent sharp edges */}
                    <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
                </div>
            </div>

            <div className="p-4 relative z-10 w-full text-center justify-center h-auto">
                <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
                    Dive into the fundamental principles that govern music. From understanding notation to recognizing different scales and chords, this course is designed to provide beginners with a solid foundation in music theory. Whether you aspire to compose your own music or simply want to appreciate it on a deeper level, this course is the perfect starting point
                </p>
                <div className="mt-4 mb-4">
                    {/* <Link href={"/courses"}>Explore Courses</Link> */}
                    <Button
                        borderRadius="1.75rem"
                        className="text-black dark:text-white bg-white dark:bg-slate-900 border-neutral-200 dark:border-slate-800"
                    >
                        Explore Courses
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default HeroSections