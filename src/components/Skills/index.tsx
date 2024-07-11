import SkillItem from './../SkillItem'
import { SKILLS } from '../../utils/data/skills'

function Skills() {
  return (
    <section id="skills" className="my-16">
      <div className="w-2/3 m-auto">
        <h2 className="text-center text-6xl font-medium mb-8">
          Overview of my
          <span className="font-bold text-slate-400"> Skills</span>
        </h2>
        <p className="mb-16 text-center">
          Happy to share with You an overview of my Hard and Soft Skills. So,
          Discovering Tailored Solutions Infused with Passion, Precision, and
          Purpose to Shape Tomorrow's Experiences.
        </p>
      </div>
      <div className="mx-10">
        <ul className="grid auto-rows-auto grid-cols-3">
          {SKILLS.map(({ icon, label, description }) => (
            <SkillItem
              key={`${label}-${icon}`}
              skillIcon={icon}
              skillLabel={label}
              skillDescription={description}
            />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Skills
