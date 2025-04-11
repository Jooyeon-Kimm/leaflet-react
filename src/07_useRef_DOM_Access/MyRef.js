import TailButton from "../UI/TailButton"
import { useState, useRef, useEffect } from "react"; // {} 중괄호 안에 들어가는 것들은 HOOK

export default function MyRef() {
    // state 변수, Component 변수, Ref 변수
    const [sVal, setSVal] = useState(0);
    let cVal = 0;
    const rVal = useRef(0);

    const handleC = () => {
        cVal = cVal + 1 ;
        console.log('컴포넌트 변수 : ', cVal);
    }

    const handleS = () => {
        setSVal(sVal + 1);
    }

    const handleR = () => {
        rVal.current = rVal.current + 1;
        console.log('Ref 변수 : ', rVal.current);
    }

    useEffect(()=>{
        console.log('State 변수 : ', sVal);
    }, [sVal]);
  return (
    <div className="w-10/12 flex justify-center items-center">
      <div className="grid grid-cols-3 gap-4">
        <div className="text-blue-700 font-bold text-center text-2xl">
            Component 변수 : {cVal}
        </div>

        <div className="text-orange-700 font-bold text-center text-2xl">
            State     변수 : {sVal}
        </div>
        <div className="text-lime-700 font-bold text-center text-2xl">
            Ref       변수 : {rVal.current}
        </div>
        <div>
            <TailButton caption='Component 변수' bcolor='blue' clickHandler={handleC}/>
        </div>
        <div>
            <TailButton caption='State 변수' bcolor='orange' clickHandler={handleS}/>
        </div>
        <div>
            <TailButton caption='Ref 변수' bcolor='lime' clickHandler={handleR}/>
        </div>
      </div>
    </div>
  )
}
