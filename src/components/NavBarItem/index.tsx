export default function NavBarItem({ children, isSelected, ...props }) {
  let baseNames = 'inline-flex mr-10'
  if (isSelected === true) {
    baseNames += ' text-primary'
  }

  return (
    <li className={baseNames}>
      <a {...props}> {children} </a>
    </li>
  )
}
