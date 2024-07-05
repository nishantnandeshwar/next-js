import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import { SparklesCore } from "./ui/sparkles"
import { Button } from "./ui/moving-border";
import { HoverBorderGradientDemo } from "./HoverBoard";
import Image from 'next/image'
import experienceIcon from '@/assets/image/experience.png'
import '@/assets/css/style.css'
function AboutPage() {
    return (
        <div className="  w-full rounded-md flex flex-col item-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
            {/* h-auto md:h-[50rem] */}
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />
            {/* <div className="w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
                <h1 className="mt-5 md:mt-5 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 text-center">
                    About me
                </h1>
                <div className="w-[40rem] h-40 relative">
                    Gradients
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

                    <SparklesCore
                        background="transparent"
                        minSize={0.4}
                        maxSize={1}
                        particleDensity={1200}
                        className="w-full h-full"
                        particleColor="#FFFFFF"
                    />

                    Radial Gradient to prevent sharp edges
                    <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
                </div>
            </div> */}

            <div className="mt-[10rem]">
                <div className="p-1 relative z-10 w-9/12 mx-auto text-3xl font-bold">About me :-</div>
                <div className="p-4 relative z-10 w-full h-auto">
                    <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 w-9/12 mx-auto">
                        I am <strong>Nishant Nandeshwar,</strong> a software engineer with over 3.6 years of experience in Web Development, Mobile App Development utilizing React JS and React Native.
                        I worked on multiple live projects and provide and resolved the industrial problems.
                        <br /> <br /> My job is to build website and android and ios app using react and react native so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to product and make sure that is eye-catching and easy to use.
                    </p>
                </div>

                <div className="p-2 relative z-10 w-9/12 mx-auto text-3xl font-bold">{`What I'm Doing :`}-</div>
                <div className="p-4 relative z-10 w-full h-auto">
                    <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 w-9/12 mx-auto">
                        I design and create responsive website and mobile app using React JS and React Native framework.
                    </p>
                </div>

                <div className="p-4 relative z-10 w-9/12 mx-auto text-3xl font-bold">My experience and role and responsibility:-</div>
                <section className="timeline w-9/12 mx-auto">
                    <div className="title-wrapper">
                        <div className="icon-box">
                            <Image src={experienceIcon}
                                alt="experience"
                                width={40}
                                height={40}
                                className="bg-slate-100 p-[4px] rounded-full"
                            />
                        </div>
                        <span>Experience</span>
                    </div>
                    <ol className="timeline-list">
                        <li className="timeline-item">
                            <p className="font-semibold text-base md:text-lg text-neutral-300">
                                Software developer at Define Labs, Pune (Remote)
                            </p>
                            <span>Jan 2024 — Present</span>
                            <div className="font-normal text-sm md:text-sm text-neutral-300 mt-2 antialiased">
                                <ul className="list-disc">
                                    <li>Developed a responsive and interactive android app using React native to provide multiple features.</li>
                                    <li>Collaborated closely with clients to gather requirements and ensure the software met their needs.</li>
                                    <li>Maintained high code quality through peer reviews and adherence to coding standards.</li>
                                </ul>
                            </div>
                        </li>
                        <li className="timeline-item">
                            <p className="font-semibold text-base md:text-lg text-neutral-300">Frontend developer at Cutedge Technology, Gurugram (On-location)</p>
                            <span>Oct 2023 — Jan 2024</span>
                            <div className="font-normal ext-sm md:text-sm text-neutral-300 mt-2 antialiased">
                                <ul className="list-disc">
                                    <li>To work on Web applications and Android and IOS applications with Cut Edge technology.</li>
                                    <li>Developed and maintained responsive and interactive web applications and Android-IOS applications using React JS and React Native.</li>
                                    <li>Collaborated with UX/UI designers to implement design concepts and ensure seamless user experiences.</li>
                                </ul>
                            </div>
                        </li>
                        <li className="timeline-item">
                            <div className=" font-semibold text-base md:text-lg text-neutral-300">Front-end Developer and Team Lead</div>
                            <span>Apr 2021 — Oct 2023</span>
                            <div className="font-normal text-sm md:text-sm text-neutral-300 mt-2 antialiased">
                                <ul className="list-disc">
                                    <li>
                                        The privilege of participating in projects from their inception to completion, engaging closely with clients, and leading development teams as a team leader.
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ol>
                </section>
            </div>

            <section className="skill w-9/12 mx-auto">
                <div className="p-2 relative z-10 mx-auto text-3xl font-bold">My skills:-</div>
                <ul className="skills-list content-card">
                    <li className="skills-item">
                        <div className="title-wrapper">
                            <h5 className="h5">React JS</h5>
                            <data value="80">80%</data>
                        </div>
                        <div className="skill-progress-bg">
                            <div className="skill-progress-fill" style={{ width: '80%' }}></div>
                        </div>
                    </li>
                    <li className="skills-item">
                        <div className="title-wrapper">
                            <h5 className="h5">React Native</h5>
                            <data value="80">80%</data>
                        </div>
                        <div className="skill-progress-bg">
                            <div className="skill-progress-fill" style={{ width: '80%' }}></div>
                        </div>
                    </li>
                    <li className="skills-item">
                        <div className="title-wrapper">
                            <h5 className="h5">Web design using Figma tool</h5>
                            <data value="60">60%</data>
                        </div>
                        <div className="skill-progress-bg">
                            <div className="skill-progress-fill" style={{ width: '60%' }}></div>
                        </div>
                    </li>
                    <li className="skills-item">
                        <div className="title-wrapper">
                            <h5 className="h5">Next Js</h5>
                            <data value="40">40%</data>
                        </div>
                        <div className="skill-progress-bg">
                            <div className="skill-progress-fill" style={{ width: '40%' }}></div>
                        </div>
                    </li>
                    <li className="skills-item">
                        <div className="title-wrapper">
                            <h5 className="h5">Github</h5>
                            <data value="70">70%</data>
                        </div>
                        <div className="skill-progress-bg">
                            <div className="skill-progress-fill" style={{ width: '70%' }}></div>
                        </div>
                    </li>
                    <li className="skills-item">
                        <div className="title-wrapper">
                            <h5 className="h5">Django</h5>
                            <data value="40">40%</data>
                        </div>
                        <div className="skill-progress-bg">
                            <div className="skill-progress-fill" style={{ width: '40%' }}></div>
                        </div>
                    </li>
                    <li className="skills-item">
                        <div className="title-wrapper">
                            <h5 className="h5">Postgresql</h5>
                            <data value="40">40%</data>
                        </div>
                        <div className="skill-progress-bg">
                            <div className="skill-progress-fill" style={{ width: '40%' }}></div>
                        </div>
                    </li>
                    <li className="skills-item">
                        <div className="title-wrapper">
                            <h5 className="h5">Jenkins</h5>
                            <data value="40">40%</data>
                        </div>
                        <div className="skill-progress-bg">
                            <div className="skill-progress-fill" style={{ width: '40%' }}></div>
                        </div>
                    </li>
                </ul>
            </section>

        </div>
    )
}

export default AboutPage
