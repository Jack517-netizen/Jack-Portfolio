import { useState } from 'react'
import NavBarItem from '../NavBarItem'
import Contact from '../Contact'
import DarkModeToggle from '../DarkModeToggle'

export default function Nav() {
  const [selectedNavItem, setSelectedNavItem] = useState('home')
  function handleClick(identifier: string) {
    setSelectedNavItem(identifier)
  }

  return (
    <nav className="py-4 px-6 text-sm font-medium inline-flex items-center justify-evenly">
      <ul className="text-base mr-10">
        <NavBarItem
          href="#home"
          isSelected={selectedNavItem === 'home'}
          onClick={() => handleClick('home')}
        >
          Home
        </NavBarItem>
        <NavBarItem
          isSelected={selectedNavItem === 'about'}
          href="#about"
          onClick={() => handleClick('about')}
        >
          About
        </NavBarItem>
        <NavBarItem
          isSelected={selectedNavItem === 'skills'}
          href="#skills"
          onClick={() => handleClick('skills')}
        >
          Skills
        </NavBarItem>
        <NavBarItem
          isSelected={selectedNavItem === 'certifications'}
          href="#certifications"
          onClick={() => handleClick('certifications')}
        >
          Certifications
        </NavBarItem>
        <NavBarItem
          isSelected={selectedNavItem === 'projects'}
          href="#projects"
          onClick={() => handleClick('projects')}
        >
          Projects
        </NavBarItem>
      </ul>
      <DarkModeToggle />
      <Contact />
    </nav>
  )
}
