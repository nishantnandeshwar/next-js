'use client'
import Link from 'next/link';
import data from '../data/music_courses.json'
import { BackgroundGradient } from './ui/background-gradient';

interface Courses {
    course_name: string,
    instructor: string,
    duration_weeks: number,
    description: string
}

function FeatureCourses() {

    return (
        <div className='py-12 bg-gray-900'>
            <div>
                <div className="text-center">
                    <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>FEATURED COURSES</h2>
                    <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Learn with the Best</p>
                </div>
            </div>
            <div className='mt-20'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center '>
                    {data.map((item: Courses) => (
                        <div className='flex justify-center' key={item.course_name}>
                            <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900 h-full">
                                <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                                    {item.course_name}
                                </p>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                    {item.description}
                                </p>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                    {item.instructor}
                                </p>
                                <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                                    <span>duration:</span>
                                    <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                                        {item.duration_weeks}
                                    </span>
                                </button>
                            </BackgroundGradient>
                        </div>
                    ))}
                </div>
            </div>
            <div className='mt-20 text-center'>
                <Link href={"/allCourses"} className='px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200'>
                    View all courses
                </Link>
            </div>
        </div>
    )
}

export default FeatureCourses