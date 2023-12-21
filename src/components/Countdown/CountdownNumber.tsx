interface ICountdownNumber {
  title:string,
  number:string
}

const CountdownNumber = (props:ICountdownNumber) => {
  const { title, number } = props;

  return (
    <div className="w-[70px] md:w-[150px]">
      <div className="countdown-card rounded-xl flex items-center justify-center w-full h-[70px] md:h-[140px] mb-4 md:mb-6">
        <span className="countdown-number text-[40px] md:text-[80px]">
          { number }
        </span>
      </div>
      <div className="text-[9px] md:text-[16px] uppercase tracking-[2px] md:tracking-[4px]">
        { title }
      </div>
    </div>
  )
}

export default CountdownNumber
