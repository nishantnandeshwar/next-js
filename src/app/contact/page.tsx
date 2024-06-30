import Link from "next/link"

function page() {
  return (
    <main className="antialiased bg-black/[0.96] min-h-screen flex-1">
      <div className="pt-32 pb-32 mx-10 flex flex-col">
       <span> Name: Nishant Nandeshwar</span>
       <span> Email: nishantnandeshwar8@gmail.com</span>
       <span>Phone no: 8668776095</span>
       <span>Linkedin: https://www.linkedin.com/in/nishant-nandeshwar-6011a614b/</span>
       <span>Github: https://github.com/nishantnandeshwar</span>
       <span>Resume: <Link href={"https://drive.google.com/file/d/1Mvi0gjQ1AX8JuMpD1hD__8x2a7iVaxdT/view?usp=sharing"}>To view click here</Link></span>
      </div>
      </main>
  )
}

export default page