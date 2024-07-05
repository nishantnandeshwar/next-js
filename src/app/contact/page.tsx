import dynamic from "next/dynamic"
import Link from "next/link"
import Image from "next/image";
import profileImg from '@/assets/image/profile_img.jpeg'
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { HoverBorderGradientDemo } from "@/components/HoverBoard";
function page() {
  return (

    <main className="antialiased bg-black/[0.96] min-h-screen flex-1 mt-[4rem] ">
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
          <CardItem
            translateZ="50"
            className="text-sm font-bold text-neutral-600 dark:text-white" >
            Name: Nishant Nandeshwar <br />
            Email: nishantnandeshwar8@gmail.com <br />
            Phone no: 8668776095 <br />
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src={profileImg}
              height="1000"
              width="1000"
              className="h-60 w-full object-contain rounded-full group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-start items-center mt-10">
            <CardItem
              translateZ={20}
              as={Link}
              target="__blank"
              href="https://drive.google.com/file/d/1Mvi0gjQ1AX8JuMpD1hD__8x2a7iVaxdT/view?usp=sharing"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Click here to View Resume →
            </CardItem>

          </div>
          <div className="flex justify-end items-center mt-10">
            <CardItem
              translateZ={20}
              as={Link}
              target="__blank"
              href="https://www.linkedin.com/in/nishant-nandeshwar-6011a614b/"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Click here to View Linkedin profile →
            </CardItem>
          </div>
          <div className="flex justify-start items-center mt-10">
            <CardItem
              translateZ={20}
              as={Link}
              target="__blank"
              href="https://github.com/nishantnandeshwar"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Click here to View Github profile →
            </CardItem>
          </div>
          <div className="mt-10">
            <HoverBorderGradientDemo name="Explore projects" link="/projects" />
          </div>
        </CardBody>
      </CardContainer>
    </main>
  )
}

export default page