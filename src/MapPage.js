import MapView from "./MapView";

export default function MapPage() {
    return (
      <div className="relative w-full h-full">
        {/* 지도 컴포넌트 */}
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <MapView />
        </div>
  
        {/* 검색창 등 겹치는 UI */}
        <div className="w-100 h-24 absolute top-4 left-4 z-10 bg-white p-4 rounded shadow">
          <input
            type="text"
            placeholder="장소를 검색하세요"
            className="border px-2 py-1 rounded w-64"
          />
        </div>
  
        {/* 오른쪽 하단 버튼 */}
        <div className="absolute bottom-4 right-4 z-10">
          <button className="w-30 bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600">
            현재 위치
          </button>
        </div>
      </div>
    );
  }
  