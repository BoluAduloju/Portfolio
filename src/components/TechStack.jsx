
import { IoLogoJavascript } from "react-icons/io5"
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri"
import { SiTypescript } from "react-icons/si"
import { TbBrandNextjs, TbBrandRedux } from "react-icons/tb"
import { FaFigma } from "react-icons/fa";
import { TbBrandFramerMotion } from "react-icons/tb";





const TechStack = () => {
  return (
    <section className="pb-24">
        <h2 className="my-20 text-center text-4xl">Tech Stack</h2>
        <div className="flex flex-wrap items-center gap-4 justify-center">
            <div className="text-center">
                <RiReactjsLine className="text-cyan-400 text-7xl" />
                <span className="text-neutral-300 mt-3 text-sm"> ReactJs</span>
            </div>
            <div className="p-4 text-center">
                <TbBrandNextjs className="text-7xl" />
                <span className="text-neutral-300 mt-3 text-sm">NextJs</span>
            </div>
            <div className="p-4 text-center">
                <FaFigma className="text-7xl"/>
                <span className="text-neutral-300 mt-3 text-sm">Figma</span>
            </div>
            <div className="p-4 text-center">
                <SiTypescript className="text-7xl text-[#3178c6]" />
                <span className="text-neutral-300 mt-3 text-sm">TypeScript</span>
            </div>
            <div className="p-4 text-center">
                <IoLogoJavascript className="text-7xl text-[#efd81d]" />
                <span className="text-neutral-300 mt-3 text-sm">JavaScript</span>
            </div>
             <div className="p-4 text-center">
                <TbBrandFramerMotion className="text-7xl"/>
                <span className="text-neutral-300 mt-3 text-sm">Framer Motion</span>
            </div>
            <div className="p-4 text-center">
                <RiTailwindCssFill className="text-7xl text-cyan-400" />
                <span className="text-neutral-300 mt-3 text-sm">TailwindCSS</span>
            </div>
            
           
        </div>

    </section>
  )
}

export default TechStack