import logo from './logo.svg'; // svg image file
import './App.css'; // 전역 css (모듈 css는 import styles ... module.css)
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; // 라우팅


import { FaMapMarked } from "react-icons/fa"; // icon
import MapView from './MapView';
import Hello from './01_Hello_Component/Hello';
import MyClock from './02_MyClock/MyClock';
import { BiHomeHeart } from "react-icons/bi";
import MyDiv1 from './03_Probs/MyDiv1';
import MyList from './04_Probs_Advanced/MyList';
import Lotto from './05_Lottery_UseState_Hook/Lotto';
import Traffic from './06_API_Side_Effect/Traffic';
import MyRef from './07_useRef_DOM_Access/MyRef';
import MapPage from './MapPage';


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
    <BrowserRouter>
      <div className="flex flex-col w-full h-screen mx-auto">
        <header className='flex justify-between items-center text-xl font-bold h-20 p-10 bg-slate-200'>
          <p>리액트 기초</p>
          <ul className='flex justify-start items-center text-sm'>
            <li className='mx-2 p-2 rounded-md hover:bg-white hover:text-blue-600'>
              <Link to='/'>안녕</Link>
            </li>
            <li className='mx-2 p-2 rounded-md hover:bg-white hover:text-blue-600'>
              <Link to='/myclock'>시계</Link>
            </li>
            <li className='mx-2 p-2 rounded-md hover:bg-white hover:text-blue-600'>
              <Link to='/mydiv'>Probs-mydiv</Link>
            </li>
            <li className='mx-2 p-2 rounded-md hover:bg-white hover:text-blue-600'>
              <Link to='/mylist'>Probs-mylist</Link>
            </li>
            <li className='mx-2 p-2 rounded-md hover:bg-white hover:text-blue-600'>
              <Link to='/lotto'>로또</Link>
            </li>
            <li className='mx-2 p-2 rounded-md hover:bg-white hover:text-blue-600'>
              <Link to='/traffic'>교통사고</Link>
            </li>
            <li className='mx-2 p-2 rounded-md hover:bg-white hover:text-blue-600'>
              <Link to='/myref'>useRef</Link>
            </li>
            <li className='mx-2 p-2 rounded-md hover:bg-white hover:text-blue-600'>
              <Link to='/map'>leaflet 지도</Link>
            </li>
            <p><Link to='/'><BiHomeHeart /></Link></p>
          </ul>
        </header>

        <main className='grow w-full flex justify-center items-center overflow-y-auto'>
          <Routes>
            <Route path='/' element={<Hello />} />
            <Route path='/myclock' element={<MyClock />} />
            <Route path='/mydiv' element={<MyDiv1 />} />
            <Route path='/mylist' element={<MyList />} />
            <Route path='/lotto' element={<Lotto />} />
            <Route path='/traffic' element={<Traffic />} />
            <Route path='/myref' element={<MyRef />} />
            <Route path='/map' element={<MapPage />} />
          </Routes>
        </main>

        <footer className='flex justify-center items-center h-20 bg-black text-slate-100'>
          ⓒ Joo
        </footer>
        {/* <MapView/> */}
      </div>
    // <div className="App" style={{ height: '100vh' }}><MapView /></div>
    </BrowserRouter>
  );
}

export default App; // 외부에서 import할 수 있도록,
