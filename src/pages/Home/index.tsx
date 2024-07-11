import Header from '../../components/Header'
import Footer from '../../components/Footer'
import AboutMe from '../../components/About'
import Welcome from '../../components/Welcome'
// import Projects from '../../components/Projects'
import Certifications from '../../components/Certifications'
import Skills from '../../components/Skills'
import sorryImg from './../../assets/feeling-sorry-bro.png'
import { useEffect, useState } from 'react'

function App() {
  const [isSmallDevice, setIsSmallDevice] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsSmallDevice(window.innerWidth < 990)
    }

    // Initial check on mount
    handleResize()

    // Add event listener for window resize
    window.addEventListener('resize', handleResize)

    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  if (isSmallDevice) {
    return (
      <div className="w-full h-full text-justify p-4">
        <img
          src={sorryImg}
          alt="Illustration for not yet unavailable mobile version."
        />
        <h1 id="small-device-message">
          <em>
            "Thank you for visiting my portfolio. Please note that the mobile
            version is currently under development to enhance your browsing
            experience. In the meantime, please view it on a desktop or larger
            screen. I apologize for any inconvenience and appreciate your
            understanding.",
          </em>{' '}
          <strong>Jack517 (Kodjo Josué AYITEY)</strong>
          <br />
          <br />
          <section>
            <a
              href="https://storyset.com/people"
              target="_blank"
              className="text-primary underline"
            >
              [CREDITS] People illustrations by Storyset
            </a>
          </section>
        </h1>
      </div>
    )
  }
  return (
    <div id="container" className="font-title w-full h-full">
      <Header />
      <Welcome />
      <AboutMe />
      <Skills />
      <Certifications />
      {/* <Projects /> */}
      <Footer />
    </div>
  )
}

export default App
