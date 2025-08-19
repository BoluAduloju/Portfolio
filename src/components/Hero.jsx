import profilePic from "../assets/profile.jpg"
import { FaBehance, FaGithub, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6"

const Hero = () => {
  return (
    <section className="pb-4 lg:mb-36">
            <div className="flex flex-wrap lg:flex-col">
                <div className="w-full  ">
                        <div className="flex justify-center lg:p-8">
                            {/* <img src={profilePic} alt="Boluwatife Aduloju image" className="border border-stone-900 rounded-3xl"/> */}
                        </div>
                </div>
                <div className="w-full lg:w-[70%] self-center">
                    <div className="flex flex-col items-center lg:items-center mt-10 ">
                        <h2 className="pb-2 text-4xl tracking-tight lg:text-6xl"><span className="bg-gradient-to-b from-stone-300 to-[#100b1b] text-transparent bg-clip-text">Hello, I'm <span className="font-medium text-neutral-50">Boluwatife</span></span>👋</h2>
                        <p className="text-neutral-400 my-2 max-w-7xl py-6 text-xl lg:text-3xl tracking-tighter leading-relaxed text-center">An experienced <span className="font-medium text-neutral-50">Design Engineer</span> with passion for building aesthetic and functional user interfaces. Over the years, I focus on creating interactive and scalable web applications, that drives business growth and deliver exceptional user experience by merging design and engineering</p>
                        <a href="/"></a>
                        <div className="mr-0 mt-8 flex justify-center items-center gap-4 text-2xl mb-10">
                            <a href="https://www.linkedin.com/in/boluaduloju/" target="_blank" rel="noopener noreferrer" aria-label="Boluwatife Aduloju LinkedIn Profile"><FaLinkedin /></a>
                            <a href="https://github.com/BoluAduloju" target="_blank" rel="noopener noreferrer" aria-label="Boluwatife Aduloju Github Profile"><FaGithub /></a>
                            <a href="https://www.behance.net/boluaduloju" target="_blank" rel="noopener noreferrer" aria-label="Boluwatife Aduloju Behance Profile"><FaBehance /></a>
                            <a href="https://x.com/BoluAduloju" target="_blank" rel="noopener noreferrer" aria-label="Boluwatife Aduloju Twitter X Profile"><FaSquareXTwitter /></a>
                        </div>
                    </div>
                </div>
            </div>
    </section>
  )
}

export default Hero