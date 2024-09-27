import { MdEmail } from "react-icons/md"
import { CONTACT } from "../constants"



const Contact = () => {
  return (
    <footer className="border-t border-stone-900 pb-20">
        <h2 className="my-10 text-center text-4xl">Do you have some Ideas?</h2>
        <div className="text-center tracking-tighter ">
            <p>shoot me a mail👇</p>
            <a className="bg-gradient-to-b from-stone-300 to-[#100b1b] text-transparent bg-clip-text" href="mailto:boluwatifeaduloju2@gmail.com">
            {CONTACT.email}</a>
        </div>
    </footer>
  )
}

export default Contact