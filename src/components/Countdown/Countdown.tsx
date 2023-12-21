import CountdownNumber from './CountdownNumber'
import './Countdown.css'

const Countdown = () => { 

  return (
    <div className="countdown flex justify-center gap-5 md:gap-9">
      <CountdownNumber title="Days" number={"08"}/>
      <CountdownNumber title="Hours" number={"23"}/>
      <CountdownNumber title="Minutes" number={"55"}/>
      <CountdownNumber title="Seconds" number={"41"}/>
    </div>
  )
}

export default Countdown
