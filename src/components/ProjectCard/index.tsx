function ProjectCard({ projectImg, projectLink }) {
  return (
    <li className="flex items-start justify-around relative">
      <img
        src={projectImg}
        alt="Illustration for the projects section"
        className="rounded-3xl"
      />
      <a
        href={projectLink}
        target="_blank"
        className="absolute -right-2 bottom-0 border-8 bg-primary border-white dark:border-night px-4 py-2 text-white text-2xl flex items-center justify-center"
      >
        <i className="bi bi-arrow-up-right"></i>
      </a>
    </li>
  )
}

export default ProjectCard
