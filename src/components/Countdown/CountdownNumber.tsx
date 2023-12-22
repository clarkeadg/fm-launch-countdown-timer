interface ICountdownNumber {
  title:string,
  number:string
  nextNumber:string
}

const CountdownNumber = (props:ICountdownNumber) => {
  const { title, number, nextNumber } = props;

  return (
    <div className="w-[70px] md:w-[150px]">
      <div className="countdown-card-outer pb-2 md:pb-4 rounded-xl mb-4 md:mb-2 relative">
        <div className="countdown-card relative flex items-center justify-center w-full h-[70px] md:h-[140px]">
          <div className={`countdown-card-inner rounded-xl absolute w-full h-[70px] md:h-[140px]`}>
            <div className="countdown-card-front rounded-xl overflow-hidden absolute top-0 left-0 w-full h-[70px] md:h-[140px]">
              <div className="countdown-card-front-bg absolute top-0 left-0 w-full h-[35px] md:h-[70px] overflow-hidden">
                <div className="countdown-number flex items-center justify-center absolute top-0 left-0 w-full h-[70px] md:h-[140px] text-[40px] md:text-[80px]">
                  { nextNumber }
                </div>
              </div>
              <div className="countdown-card-circle rounded-full absolute top-[31px] md:top-[62px] -left-[4px] md:-left-[8px] w-[8px] h-[8px] md:w-[16px] md:h-[16px]"/>
              <div className="countdown-card-circle rounded-full absolute top-[31px] md:top-[62px] -right-[4px] md:-right-[8px] w-[8px] h-[8px] md:w-[16px] md:h-[16px]"/>
            </div>         
          </div>
          <div className={`countdown-card-inner rounded-xl absolute w-full h-[70px] md:h-[140px]`}>
            <div className="countdown-card-front rounded-xl overflow-hidden absolute top-0 left-0 w-full h-[70px] md:h-[140px]">
              <div className="countdown-card-back-bg absolute bottom-0 left-0 w-full h-[35px] md:h-[70px] overflow-hidden">
                <div className="countdown-number flex items-center justify-center absolute -top-[35px] md:-top-[70px] left-0 w-full h-[70px] md:h-[140px] text-[40px] md:text-[80px]">
                  { number }
                </div>
              </div>
              <div className="countdown-card-shadow absolute top-0 left-0 w-full h-[35px] md:h-[70px]"/>
              <div className="countdown-card-circle rounded-full absolute top-[31px] md:top-[62px] -left-[4px] md:-left-[8px] w-[8px] h-[8px] md:w-[16px] md:h-[16px]"/>
              <div className="countdown-card-circle rounded-full absolute top-[31px] md:top-[62px] -right-[4px] md:-right-[8px] w-[8px] h-[8px] md:w-[16px] md:h-[16px]"/>
            </div>         
          </div>
          <div className={`countdown-card-inner front rounded-xl absolute w-full h-[70px] md:h-[140px]`}>
            <div className="countdown-card-front rounded-xl overflow-hidden absolute top-0 left-0 w-full h-[70px] md:h-[140px]">
              <div className="countdown-card-front-bg absolute top-0 left-0 w-full h-[35px] md:h-[70px] overflow-hidden">
                <div className="countdown-card-shadow absolute top-0 left-0 w-full h-[35px] md:h-[70px] overflow-hidden">
                  <div className="countdown-number flex items-center justify-center absolute top-0 left-0 w-full h-[70px] md:h-[140px] text-[40px] md:text-[80px]">
                    { number }
                  </div>
                </div>
              </div>
              <div className="countdown-card-circle rounded-full absolute top-[31px] md:top-[62px] -left-[4px] md:-left-[8px] w-[8px] h-[8px] md:w-[16px] md:h-[16px]"/>
              <div className="countdown-card-circle rounded-full absolute top-[31px] md:top-[62px] -right-[4px] md:-right-[8px] w-[8px] h-[8px] md:w-[16px] md:h-[16px]"/>
            </div>
            <div className="countdown-card-back rounded-xl overflow-hidden absolute bottom-0 left-0 w-full h-[70px] md:h-[140px]">
              <div className="countdown-card-back-bg absolute bottom-0 left-0 w-full h-[35px] md:h-[70px] overflow-hidden">
                <div className="countdown-number flex items-center justify-center absolute -top-[35px] md:-top-[70px] left-0 w-full h-[70px] md:h-[140px] text-[40px] md:text-[80px]">
                  { nextNumber }
                </div>
              </div>
              <div className="countdown-card-circle rounded-full absolute top-[31px] md:top-[62px] -left-[4px] md:-left-[8px] w-[8px] h-[8px] md:w-[16px] md:h-[16px]"/>
              <div className="countdown-card-circle rounded-full absolute top-[31px] md:top-[62px] -right-[4px] md:-right-[8px] w-[8px] h-[8px] md:w-[16px] md:h-[16px]"/>
            </div>          
          </div> 
        </div>        
      </div>
      <div className="text-[9px] md:text-[16px] uppercase tracking-[2px] md:tracking-[4px]">
        { title }
      </div>
    </div>
  )
}

export default CountdownNumber
