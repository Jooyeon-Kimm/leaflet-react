import logo from './logo.svg'; // svg image file
import './App.css';
import { FaMapMarked } from "react-icons/fa"; // icon
import MapView from './MapView';
import Hello from './01_Hello_Component/Hello';
import MyClock from './02_MyClock/MyClock';
import { BiHomeHeart } from "react-icons/bi";
import MyDiv1 from './03_Probs/MyDiv1';


// flex-col : 수직 배치
// w-full   : 화면 전체 너비
// h-screen : 화면 전체 높이
// mx-auto  : 컴포넌트 내부 수평 중앙 정렬

// justify-between : flex 컨테이너 안 항목 양끝 정렬 + 사이 공간 자동 설정
// text-xl : 텍스트 크기 XL
// p-10 : padding, bg: background color

// grow : 헤더, 푸터 사용하고 남은 너비를 main이 사용하겠다.
// overflow-y-auto: 수직으로 내용 많아지면, 자동 스크롤 생성된다.
function App() {
  return (
    <div className="flex flex-col w-full h-screen mx-auto">
      <header className='flex justify-between items-center text-xl font-bold h-20 p-10 bg-slate-200'>
      <p>리액트 기초 : probs</p>
      <p><BiHomeHeart/></p>
      </header>

      <main className='grow w-full flex justify-center items-center overflow-y-auto'>
        <MyDiv1/>
      </main>

      <footer className='flex justify-center items-center h-20 bg-black text-slate-100'>
        ⓒ Joo
      </footer>
      {/* <MapView/> */}
    </div>
    // <div className="App" style={{height: '100vh'}}><MapView/></div>
  );
}

export default App; // 외부에서 import할 수 있도록,
