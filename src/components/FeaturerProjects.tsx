'use client'
import Link from 'next/link';
import { project_list } from '@/data/project_list';
import { BackgroundGradient } from './ui/background-gradient';
import Image from 'next/image';
import portpo from '@/assets/image/portfolio.svg'
interface Courses {
    title: string,
    stacks: string,
    stacks_logo: string,
    description: string,
    alt: string,
    logo: string,
}

function FeatureProjects() {
    return (
        <div className='py-12 bg-gray-900'>
            <div>
                <div className="text-center">
                    <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>FEATURED & STACKS</h2>
                    <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Projects OverView</p>
                </div>
            </div>
            <div className='mt-20'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center '>
                    {project_list.map((item: Courses) => (
                        <div className='flex justify-center' key={item.title}>
                            <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900 h-full">
                                <div className='flex flex-row items-center'>
                                    <div>
                                        <Image
                                            src={item.logo}
                                            alt="My Icon"
                                            width={60}
                                            height={60}
                                            className="bg-slate-100 rounded-full p-9px"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                                            {item.title}
                                        </p>
                                        <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                            {item.stacks}
                                        </p>
                                        <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </BackgroundGradient>
                        </div>
                    ))}
                </div>
            </div>
            <div className='mt-20 text-center'>
                <Link href={"/projects"} className='px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200'>
                    View all projects
                </Link>
            </div>
        </div>
    )
}

export default FeatureProjects