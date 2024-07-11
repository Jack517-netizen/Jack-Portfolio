import Logo from '../Logo'
import Nav from '../Nav'

function Header() {
  return (
    <div className="divide-y sticky z-50 top-0 bg-white">
      <div className="flex w-full h-full items-center justify-between p-1">
        <Logo />
        <Nav />
      </div>
      <div id="for-divide-bar-purpose"></div>
    </div>
  )
}

export default Header
