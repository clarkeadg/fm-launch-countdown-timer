import CountdownNumber from './CountdownNumber'
import { useCountdown } from './useCountdown';
import './Countdown.css'

const Countdown = () => { 
  const [days, hours, minutes, seconds] = useCountdown('2023-12-31');
  // const days = 14;
  // const hours = 8;
  // const minutes = 40;
  // const seconds = 50;

  const formatNumber = (value:number) => {
    return `${value < 10 ? "0" : ""}${value}`;
  }

  const formatNextNumber = (numberType:string, value:number) => {
    let n = value-1;
    if (n < 0) {
      if (numberType == "seconds") {
        if (minutes) {
          n = 59;
        } else {
          n = 0;
        }
      }
      if (numberType == "minutes") {
        if (hours) {
          n = 59;
        } else {
          n = 0;
        }
      }
      if (numberType == "hours") {
        if (days) {
          n = 23;
        } else {
          n = 0;
        }
      }
      if (numberType == "days") {
        n = 0;        
      }
    }
    return `${n < 10 ? "0" : ""}${n}`;
  }

  return (
    <div className="countdown flex justify-center gap-5 md:gap-9">
      <CountdownNumber title="Days" number={formatNumber(days)} nextNumber={formatNextNumber('days', days)}/>
      <CountdownNumber title="Hours" number={formatNumber(hours)} nextNumber={formatNextNumber('hours', hours)}/>
      <CountdownNumber title="Minutes" number={formatNumber(minutes)} nextNumber={formatNextNumber('minutes', minutes)}/>
      <CountdownNumber title="Seconds" number={formatNumber(seconds)} nextNumber={formatNextNumber('seconds', seconds)}/>
    </div>
  )
}

export default Countdown
