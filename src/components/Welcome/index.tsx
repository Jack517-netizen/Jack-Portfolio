import Contact from '../Contact'

function Welcome() {
  return (
    <section id="welcome" className="w-2/3 my-16 text-center m-auto">
      <h2 className="text-6xl font-medium mb-16">
        I'm{' '}
        <span className="font-bold text-slate-400">
          Kodjo Josué AYITEY(Jack517-netizen)
        </span>
        , who loves software engineering and electronics.
      </h2>
      <Contact customizeBackground={true} />
      <a
        href="/me/JACK-RESUME-EN.pdf"
        target="_blank"
        className="text-base font-medium ml-5 p-3 border-2 border-black rounded-full"
      >
        Download CV
      </a>
      &nbsp;&nbsp;{' '}
      <a href="/me/JACK-CV-FR.pdf" target="_blank" className="text-primary">
        (French version available)
      </a>
    </section>
  )
}

export default Welcome
