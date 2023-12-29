import { memo } from 'react'
import CountdownNumber from './CountdownNumber'
import { useCountdown } from './useCountdown';
import './Countdown.css'

const Countdown = () => { 
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate()+15);
 
  const time = `${targetDate.getFullYear()}-${targetDate.getMonth()+1}-${targetDate.getDate()}`;
  
  const [days, hours, minutes, seconds] = useCountdown(time);

  const formatNumber = (value:number) => {
    let n = value;
    if (n < 0) n = 0;
    return `${n < 10 ? "0" : ""}${n}`;
  }

  return (
    <div className="countdown flex justify-center gap-5 md:gap-9">
      <CountdownNumber title="Days" number={formatNumber(days+1)} nextNumber={formatNumber(days)}/>
      <CountdownNumber title="Hours" number={formatNumber(hours+1)} nextNumber={formatNumber(hours)}/>
      <CountdownNumber title="Minutes" number={formatNumber(minutes+1)} nextNumber={formatNumber(minutes)}/>
      <CountdownNumber title="Seconds" number={formatNumber(seconds+1)} nextNumber={formatNumber(seconds)}/>
    </div>
  )
}

export default memo(Countdown)
