import { useEffect, useState } from "react"
import CountdownFlip from "./CountdownFlip"

interface ICountdownNumber {
  title:string,
  number:string
  nextNumber:string
}

const CountdownNumber = (props:ICountdownNumber) => {
  const { title, number, nextNumber } = props;
  const [active, setActive] = useState(false);
  const [flip, setFlip] = useState(false);

  useEffect(()=>{
    setActive(!active);
    setTimeout(()=>{
      setFlip(!flip)
    },100)
  }, [number])

  return (
    <div className="w-[70px] md:w-[150px]">

      {/* Flip 1 */}
      <CountdownFlip active={active} flip={flip} number={number} nextNumber={nextNumber}/>

      {/* Flip 2 */}
      <CountdownFlip active={!active} flip={!flip} number={number} nextNumber={nextNumber}/>

      <div className="text-[9px] md:text-[16px] uppercase tracking-[2px] md:tracking-[4px]">
        { title }
      </div>
    </div>
  )
}

export default CountdownNumber
