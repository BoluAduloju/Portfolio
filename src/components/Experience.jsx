
import { EXPERIENCES } from "../constants"

const Experience = () => {
  return (
    <section className="pb-4">
       <h2 className="my-20 text-center text-4xl">Work Experience</h2>
       <div>
        {EXPERIENCES.map((experience, index) => (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                <div className="w-full lg:w-1/4">
                    <p className="mb-2 text-sm text-stone-400 ">
                        {experience.year}
                    </p>
                </div>
                <div className="w-full max-w-xl lg:w-3/4">
                    <h3 className="mb-2 font-semi-bold">
                        {experience.role} -{" "}
                        <span className="text-sm text-stone-500">{experience.company}</span>
                    </h3>
                    <p className="mb-4 text-stone-400">{experience.description}</p>
                     {experience.technologies.map((tech,index) => (
                        <span key={index} className="mr-2 mb-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">{tech}</span>
                     ))}
                </div>
            </div>
        ))}
       </div>
    </section>
  )
}

export default Experience