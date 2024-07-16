export default function CertificationItem({
  img,
  title,
  description,
  obtainedOn,
  link,
  tags,
}) {
  return (
    <li className="relative w-full flex items-stretch justify-around">
      <img
        src={img}
        alt="Illustration for the certification"
        className="w-1/3 mb-4 mr-4 cursor-pointer"
      />
      <div className="w-1/3 text-left">
        <strong className="text-xl">{title}</strong>
        <em>
          <i className="bi bi-dot"></i> {obtainedOn}
        </em>
        <p className="mt-4 text-justify">{description}</p>
        <p className="mt-4 text-primary">
          <a href={link} target="_blank">
            {link}
          </a>
        </p>
      </div>
      <div className="w-1/3 h-min flex flex-wrap justify-end">
        {tags.map((tag) => (
          <span
            key={tag}
            className=" cursor-pointer rounded-full p-2 border-slate-400 border-2 m-2 text-slate-400"
          >
            {tag}
          </span>
        ))}
      </div>
    </li>
  )
}
