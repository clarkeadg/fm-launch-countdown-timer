import Countdown from '../Countdown/Countdown'
import SocialIcons from '../SocialIcons/SocialIcons'
import './ComingSoon.css'

const ComingSoon = () => { 

  return (
    <div className="coming-soon min-h-full w-full text-center relative pt-[142px] md:pt-[135px] pb-24">
      <div className="px-8">
        <h1 className="text-[18px] md:text-[23px] font-bold uppercase leading-[1.3] tracking-[6px] md:tracking-[7px] px-5 md:px-0 mb-[50px] md:mb-[105px]">
          We're launching soon
        </h1>
        <Countdown/>
      </div>      
      <div className="absolute bottom-0 w-full h-24 flex items-center justify-center">
        <SocialIcons/>
      </div>
    </div>
  )
}

export default ComingSoon
