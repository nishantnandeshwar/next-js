import Image from 'next/image';
import mailImg from '@/assets/image/mail.svg'
import githubImg from '@/assets/image/github.svg'
import linkedinImg from '@/assets/image/linkedin.svg'
import { FlipWords } from "./ui/flip-words";
import Link from 'next/link';

const FooterComponent = () => {
    const words = ["Better.", "Cute.", "Beautiful.", "Modern."];
    return (
        <footer className='flex justify-center items-center flex-col border-t-2  m-7'>
            <div className="flex justify-center items-center bg-black gap-5 m-3">
                <Link href="mailto:nishantnandeshwar8@gmail.com" target='_blank' passHref rel="noopener noreferrer">
                    <Image
                        src={mailImg}
                        alt="My Icon"
                        width={40}
                        height={40}
                        className="bg-slate-100 rounded-full p-9px"
                    />
                </Link>
                <Link href={"https://github.com/nishantnandeshwar"}  target='_blank'>
                    <Image
                        src={githubImg}
                        alt="My Icon"
                        width={40}
                        height={40}
                        className="bg-slate-100 rounded-full p-9px"
                    />
                </Link>
                <Link href={"https://www.linkedin.com/in/nishant-nandeshwar-6011a614b/"} target='_blank'>
                    <Image
                        src={linkedinImg}
                        alt="My Icon"
                        width={40}
                        height={40}
                        className="bg-slate-100 rounded-full p-9px"
                    />
                </Link>
            </div>
            <div className='text-center text-sm antialiased'>
                <i> Design and Developed by </i> <b>Nishant Nandeshwar.</b><br />
                {/* This portfolio website create using Next.js and Tailwind CSS and use ui.aceternity to make<b><FlipWords words={words} /></b> */}
            </div>
        </footer>
    )
}


export default FooterComponent