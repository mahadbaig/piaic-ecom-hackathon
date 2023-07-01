
const Section = ({title, heading}:any) => {
  return (
    <div className="flex p-2.5 flex-col justify-center items-center gap-2.5">
        <p className="text-bold text-blue-500 uppercase">{title}</p>
        <h1 className="text-5xl text-bold">{heading}</h1>
    </div>
  )
}

export default Section