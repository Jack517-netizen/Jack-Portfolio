function SkillItem({ skillIcon, skillLabel, skillDescription }) {
  return (
    <li className="flex flex-col rounded-md border-black-5300 border-2 p-6 m-2">
      <i
        className={`${skillIcon} mb-6 w-11 text-center h-11 font-bold text-primary rounded-full p-2 bg-blue-100 text-xl`}
      ></i>
      <strong className="font-bold mb-3">{skillLabel}</strong>
      <p className="text-slate-950">{skillDescription}</p>
    </li>
  )
}

export default SkillItem
