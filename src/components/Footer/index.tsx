import 'bootstrap-icons/font/bootstrap-icons.css'
import Logo from '../Logo'

function Footer() {
  return (
    <div className="bg-black text-white font-light px-16 pt-14 pb-8 divide-y">
      <div className="py-10 w-full flex items-center justify-between">
        <h3 className="text-2xl font-bold w-2/3">Stay connected w/ me</h3>
        <form method="get" className="w-1/3">
          <p className="flex justify-end items-center">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-2/3 mr-4 border-none bg-black p-2 text-white rounded-md placeholder:text-gray-500"
            />
            <button>
              <i className="bi bi-arrow-up-right"></i>
            </button>
          </p>
        </form>
      </div>
      <div className="py-10">
        <Logo />
        <br />
        <section className="w-full flex">
          <p className="w-2/3">
            I'm Kodjo Josué AYITEY(Jack517-netizen) with 3+ years of experience.
            Passionate about software engineering and electronics.
          </p>
          <section className="w-1/3 flex items-center justify-end text-slate-400">
            <a
              href="https://www.linkedin.com/in/josue-ayitey/"
              className="mr-8"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="https://x.com/Jack517_netizen" className="mr-8">
              <i className="bi bi-twitter-x"></i>
            </a>
            <a href="https://github.com/Jack517-netizen/" className="mr-8">
              <i className="bi bi-github"></i>
            </a>
          </section>
        </section>
      </div>
      <div className="pt-10 flex w-full">
        <p className="w-2/3">&copy; Copyright 2024 All Rights Reserved</p>
        <section className="w-1/3 flex items-center justify-end">
          <a
            href="https://www.termsfeed.com/live/0303fd0a-aeb1-4057-8ac5-0008c1a0e1c1"
            className="mr-8 hover:underline"
          >
            Terms Of Service
          </a>
          <a
            href="https://www.termsfeed.com/live/8f75e0a3-1dd2-4e15-847e-e89b1f58f618"
            className="hover:underline"
          >
            Privacy Policy
          </a>
        </section>
      </div>
    </div>
  )
}

export default Footer
