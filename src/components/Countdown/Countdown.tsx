import CountdownNumber from './CountdownNumber'
import { useCountdown } from './useCountdown';
import './Countdown.css'

const Countdown = () => { 
  const [days, hours, minutes, seconds] = useCountdown('2023-12-25');

  const formatNumber = (value:number) => {
    return `${value < 10 ? "0" : ""}${value}`;
  }

  const formatNextNumber = (value:number) => {
    let n = value-1;
    if (n < 0) n = 9;
    return `${n < 10 ? "0" : ""}${n}`;
  }

  return (
    <div className="countdown flex justify-center gap-5 md:gap-9">
      <CountdownNumber title="Days" number={formatNumber(days)} nextNumber={formatNextNumber(days)}/>
      <CountdownNumber title="Hours" number={formatNumber(hours)} nextNumber={formatNextNumber(hours)}/>
      <CountdownNumber title="Minutes" number={formatNumber(minutes)} nextNumber={formatNextNumber(minutes)}/>
      <CountdownNumber title="Seconds" number={formatNumber(seconds)} nextNumber={formatNextNumber(seconds)}/>
    </div>
  )
}

export default Countdown
