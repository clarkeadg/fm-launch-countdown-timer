import CountdownNumber from './CountdownNumber'
import './Countdown.css'

const Countdown = () => { 

  return (
    <div className="countdown flex justify-center gap-5 md:gap-9">
      <CountdownNumber title="Days" number={"09"} nextNumber={"08"}/>
      <CountdownNumber title="Hours" number={"23"} nextNumber={"22"}/>
      <CountdownNumber title="Minutes" number={"55"} nextNumber={"54"}/>
      <CountdownNumber title="Seconds" number={"40"} nextNumber={"39"}/>
    </div>
  )
}

export default Countdown
