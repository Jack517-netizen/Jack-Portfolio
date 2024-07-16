import { PROJECTS } from '../../utils/data/projects'
import ProjectCard from '../ProjectCard'

function Projects() {
  return (
    <section id="projects" className="mx-10 mb-14">
      <div className="flex items-stretch justify-between w-full">
        <h2 className="text-center text-6xl font-medium mb-8 w-1/5 leading-tight">
          Flagship
          <span className="font-bold text-slate-400"> Projects</span>
        </h2>
        <section className="mb-16 text-left w-2/5">
          <p>
            Fresh Insights, Dive into My Projects for Innovative Ideas and
            Inspirations
          </p>
          <p className="w-max mt-4">
            <a
              href="https://github.com/Jack517-netizen/"
              target="_blank"
              className="block text-base font-medium p-3 border-2 border-black rounded-full dark:border-slate-400"
            >
              <i className="bi bi-github mr-4"></i> See more on Github
            </a>
          </p>
        </section>
      </div>
      <ul className="grid auto-rows-auto grid-cols-3 gap-8">
        {PROJECTS.map(({ title, img, link }) => (
          <ProjectCard key={`${title}`} projectImg={img} projectLink={link} />
        ))}
      </ul>
    </section>
  )
}

export default Projects
