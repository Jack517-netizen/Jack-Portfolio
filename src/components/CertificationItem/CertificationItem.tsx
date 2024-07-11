export default function CertificationItem({
  img,
  title,
  description,
  obtainedOn,
  link,
  tags,
}) {
  return (
    <li className="w-full flex items-stretch justify-around">
      <img
        src={img}
        alt="Illustration for the certification"
        className="w-1/3 mb-4 mr-4"
      />
      <div className="w-1/3 text-justify">
        <strong className="text-xl">{title}</strong>
        <em>
          <i className="bi bi-dot"></i> {obtainedOn}
        </em>
        <p className="mt-4">{description}</p>
        <p className="mt-4 text-primary">
          <a href={link}>{link}</a>
        </p>
      </div>
      <div className="w-1/3 flex place-items-start flex-wrap justify-end">
        {tags.map((tag) => (
          <span
            key={tag}
            className=" cursor-pointer rounded-full p-2 border-black border-2 m-2"
          >
            {tag}
          </span>
        ))}
      </div>
    </li>
  )
}
