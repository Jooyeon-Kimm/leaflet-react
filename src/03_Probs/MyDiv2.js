import MyDiv3 from "./MyDiv3"

// 구조 분해
export default function MyDiv2({dn1, dn2, dn3}) {
  return (
    <div className="flex flex-col p-5 m-10
    w-3/4 h-3/4 bg-lime-700 text-white
    justify-center items-center">
      <div className="w-full flex justify-start">
      {`${dn1} > ${dn2}`}
      </div>
      <MyDiv3 d1={dn1} d2={dn2} d3={dn3}/>
    </div>
  )
}

/*
// probs로 값을 받으려면, probs오브젝트를 함수의 인자로
// return 내부에서는 백틱 문자 사용 (` : 물결~이랑 같이 있음)
export default function MyDiv2(probs) {
  return (
    <div className="flex flex-col p-5 m-10
    w-3/4 h-3/4 bg-lime-700 text-white
    justify-center items-center">
      <div className="w-full flex justify-start">
      {`${probs.dn1} > ${probs.dn2}`}
      </div>
      <MyDiv3 d1={probs.dn1} d2={probs.dn2} d3={probs.dn3}/>
    </div>
  )
}
  */