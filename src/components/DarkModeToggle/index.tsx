import { useEffect, useState } from 'react'

export default function DarkModeToggle() {
  const userThemePreference = JSON.parse(localStorage.getItem('ThemeMode'))

  const [darkMode, setDarkMode] = useState(userThemePreference || false)

  useEffect(() => {
    if (darkMode == true) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('ThemeMode', JSON.stringify(darkMode))
  }, [darkMode])

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 bg-gray-200 rounded-full mr-4 border-2 border-gray dark:border-transparent dark:bg-gray-900"
    >
      {darkMode == true ? (
        <i className="bi bi-sun text-xl p-2"></i>
      ) : (
        <i className="bi bi-moon text-xl p-2"></i>
      )}
    </button>
  )
}
