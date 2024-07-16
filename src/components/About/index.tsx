import profilePic from './../../assets/me.jpg'

function AboutMe() {
  return (
    <section
      id="about"
      className="flex my-16 items-stretch justify-around mx-40 border-slate-700 bg-slate-300 p-4 rounded-lg dark:bg-slate-900"
    >
      <img
        src={profilePic}
        alt="My profile photo"
        className="w-1/3 mr-5 p-2 rounded-full cursor-pointer border-4 border-slate-700"
      />
      <div className="w-2/3 text-justify">
        <h1 className="font-bold text-slate-600 text-6xl">
          AYITEY Kodjo Josué
        </h1>
        <p className="text-xl mt-5 font-bold">
          "With three years of experience as a web and mobile developer, I have
          continually enhanced my technical skills in user interface design,
          database integration, and project management. I am committed to
          staying at the forefront of new technologies and providing innovative
          solutions in this ever-evolving field."
        </p>
        <section
          className="flex justify-end mt-12 text-slate-400"
          id="social-links"
        >
          <a href="https://www.linkedin.com/in/josue-ayitey/" className="mr-8">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="https://x.com/Jack517_netizen" className="mr-8">
            <i className="bi bi-twitter-x"></i>
          </a>
          <a href="https://github.com/Jack517-netizen/" className="mr-0">
            <i className="bi bi-github"></i>
          </a>
        </section>
      </div>
    </section>
  )
}

export default AboutMe
