export default function Contact({ customizeBackground = false }) {
  let baseNames = 'text-base font-medium p-3 border-2 border-black rounded-full'
  if (customizeBackground === true) {
    baseNames =
      'text-base font-medium p-3 border-2 border-none rounded-full bg-primary text-white'
  }

  return (
    <a
      href="mailto:kodjojosueayitey@gmail.com"
      target="_blank"
      className={baseNames}
    >
      Let&apos;s Talk &nbsp;&nbsp;&nbsp;
      <i className="bi bi-arrow-right font-extrabold"></i>
    </a>
  )
}
