import { FaBehance, FaGithub, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6"


const Navbar = () => {
  return (
   <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home" className="mx-2 font-medium">BoluAduloju.</a>
      </div>
      <div className="m-8 flex items-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/boluaduloju/" target="_blank" rel="noopener noreferrer" aria-label="Boluwatife Aduloju LinkedIn Profile"><FaLinkedin /></a>
        <a href="https://github.com/BoluAduloju" target="_blank" rel="noopener noreferrer" aria-label="Boluwatife Aduloju Github Profile"><FaGithub /></a>
        <a href="https://www.behance.net/boluaduloju" target="_blank" rel="noopener noreferrer" aria-label="Boluwatife Aduloju Behance Profile"><FaBehance /></a>
        <a href="https://x.com/BoluAduloju" target="_blank" rel="noopener noreferrer" aria-label="Boluwatife Aduloju Twitter X Profile"><FaSquareXTwitter /></a>
      </div>
   </nav>
  )
}

export default Navbar