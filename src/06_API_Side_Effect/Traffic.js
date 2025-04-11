import { useState, useEffect } from "react"
import TrafficNav from "./TrafficNav";


// API KEY는 로컬의 .env에 있음
export default function Traffic() {
  // 전체 fetch 데이터
  const [tdata, setTdata] = useState();

  // 대분류 데이터 (Category1)
  const [c1, setC1] = useState();
  // 선택된 대분류 저장 (대분류가 있을 때, 사고유형을 알 수 있으므로)
  const [selC1, setSelC1] = useState();


  // 사고유형 데이터 (Category2)
  const [c2, setC2] = useState();
  // 선택된 사고유형 저장 
  const [selC2, setSelC2] = useState();

  // 상세 정보
  const [info, setInfo] = useState();

  const getFetchData = () => {
    console.log("API KEY:", process.env.REACT_APP_API_KEY);
    let url = `https://api.odcloud.kr/api/15070282/v1/uddi:8449c5d7-8be5-4712-9093-968fc0b2d9fc?`
    url = `${url}page=1&perPage=10&serviceKey=${process.env.REACT_APP_API_KEY}`


    console.log(url);

    // 데이터 가져오기 (fetch)
    // then(): 정상적으로 데이터를 가져오게 되면, catch(): 데이터 가져오는 중 에러 발생하면
    fetch(url)
      // .then(resp => console.log(resp)) // 응답 확인하기 위해 로그 찍어보기 (정상이면 200번대)
      .then(resp => resp.json()) // 이 상태도 promise가 되어서, pending 상태에 있다가
      // .then(data => console.log(data)) // json이 다 바뀌면, data 를 log로 확인
      .then(data => setTdata(data.data))
      .catch(err => console.error(err))
  }

  // 컴포넌트 생성 시, fetch
  // useEffect(()=>{}, []) : 콜백함수 ()=> {}, Dependency Array []
  useEffect(() => {
    getFetchData();
  }, []);
  // [] 빈 Dependency Array는 컴포넌트 생성 시, 콜백함수 한 번 호출


  // tdata가 변경되었을 때
  useEffect(() => {
    if (!tdata) return;
    console.log('tdata', tdata);

    // 대분류 만들기
    let tm = tdata.map(item => item['사고유형대분류'])
    tm = [... new Set(tm)]; // 대분류 중복 없도록, set() 집합으로 처리
    console.log('tm', tm);
    setC1(tm);
  }, [tdata]);

  // 대분류가 모두 만들어지면,
  useEffect(() => {
    if (!tdata || !c1 || !selC1) return;

    // 사고유형 만들기
    let tm = tdata.filter(item => item['사고유형대분류'] == selC1)
      .map(item => item['사고유형'])
    setC2(tm);
  }, [selC1]);

  useEffect(() => {
    if (!tdata || !c1 || !selC1 || !selC2) return;

    // 클릭+클릭한 데이터 가져오기
    let tm = tdata.filter(item => item['사고유형대분류'] == selC1 && item['사고유형'] == selC2)[0];
    console.log('선택된 항목', tm);

    // 상세 정보
    const infoKey = ['사고건수', '사망자수', '중상자수', '경상자수', '부상신고자수'];
    tm = infoKey.map(item => <div key={item} className="flex">
                                <div className="w-1/2 h-10 flex 
                                                justify-center items-center 
                                               bg-lime-600 text-white font-bold">
                                  {item}
                                </div>
                                <div className="w-1/2 h-10
                                                justify-center items-center 
                                                border">
                                  {parseInt(tm[item]).toLocaleString()}
                                </div>
                            </div>)
    setInfo(tm);
  }, [selC2]);

  return (
    // [1] 대분류+사고유형 버튼 클릭
    <div className="w-full h-full flex flex-col
                    justify-start items-center">

      {/* c1(대분류)가 있어야 TrafficNav를 만들 수 있으므로... && 연산 */}
      {c1 && <TrafficNav title='대분류'
        c={c1}
        sel={selC1}
        setSel={setSelC1}
      />}

      {/* c2(사고유형)이 있어야 TrafficNav를 만들 수 있으므로... && 연산 */}
      {c2 && <TrafficNav title='사고유형'
        c={c2}
        sel={selC2}
        setSel={setSelC2}
      />}

        {/* [2] 상세정보 */}
      <div className="w-full grid grid-cols1 md:grid-cols-2 lg:grid-cols-5 gap-2">
        {info}
      </div>
    </div>
  )
}
