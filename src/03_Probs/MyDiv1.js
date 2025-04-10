import MyDiv2 from "./MyDiv2";

// {} : 수식표현
export default function MyDiv1() {
    // 전달할 변수 
    const d1 = 'div1' ;
    const d2 = 'div2' ;
    const d3 = 'div3' ;

    return (
        <div className="flex flex-col p-5 
        justify-center items-center
    w-2/3 h-2/3 text-2xl
    bg-lime-900 text-white">
            <div className="w-full h-10 flex justify-start items-center">
                {d1}
            </div>
            <MyDiv2 dn1={d1} dn2={d2} dn3={d3}/>
        </div>
    )
}

/*
<MyDiv2 dn1={d1} dn2={d2}/>
이 부분이 PROBS 라고 하는 것이다.
함수형 컴포넌트들 사이에서 값을 주고 받을 수 있음
*/