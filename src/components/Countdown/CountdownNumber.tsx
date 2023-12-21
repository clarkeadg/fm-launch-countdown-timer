interface ICountdownNumber {
  title:string,
  number:string
}

const CountdownNumber = (props:ICountdownNumber) => {
  const { title, number } = props;

  return (
    <div className="w-[70px] md:w-[150px]">
      <div className="countdown-card relative rounded-xl overflow-hidden flex items-center justify-center w-full h-[70px] md:h-[140px] mb-4 md:mb-6">
        <div className="countdown-card-top rounded-t-xl absolute top-0 left-0 w-full h-[35px] md:h-[70px]"/>
        <div className="countdown-card-circle rounded-full absolute top-50 -left-[4px] md:-left-[8px] w-[8px] h-[8px] md:w-[16px] md:h-[16px]"/>
        <div className="countdown-card-circle rounded-full absolute top-50 -right-[4px] md:-right-[8px] w-[8px] h-[8px] md:w-[16px] md:h-[16px]"/>
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
