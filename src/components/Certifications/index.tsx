import { CERTIFICATIONS } from '../../utils/data/certifications'
import CertificationItem from '../CertificationItem/CertificationItem'

function Certifications() {
  return (
    <section id="certifications" className="my-16 text-center m-auto">
      <h2 className="text-center text-6xl font-medium mb-8">
        <span className="font-bold text-slate-400"> Certifications</span> and
        <span className="font-bold text-slate-400"> Achievements</span>
      </h2>
      <p className="mb-16 text-center">
        Review some of the certifications acquired. Discover more on my CV.
      </p>
      <div className="mx-10">
        <ul className="grid auto-rows-auto">
          {CERTIFICATIONS.map(
            ({ img, title, description, obtainedOn, link, tags }) => (
              <CertificationItem
                key={`${title}-${obtainedOn}`}
                img={img}
                title={title}
                description={description}
                obtainedOn={obtainedOn}
                link={link}
                tags={tags}
              />
            ),
          )}
        </ul>
      </div>
    </section>
  )
}

export default Certifications
