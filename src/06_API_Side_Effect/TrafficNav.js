
import TailButton from "../UI/TailButton"

// title, 분류(대/중), 현재 선택된 항목, 선택된 항목 변경
export default function TrafficNav({title, c, sel, setSel}) {

    // 여러 개가 만들어질 때는, 반드시 key가 있어야 함
    const cTag = c.map(item => <TailButton 
                                key={item}
                                caption={item}
                                bcolor={sel == item ? 'orange' : 'blue' }
                                clickHandler={()=> handleClick(item)} 
                                />);
    
    // 버튼 클릭
    const handleClick = (item) => {
        setSel(item);
    }
  return (
    <div className="w-full flex justify-start items-center my-5">
      <div className="w-1/5 flex justify-start items-center">
        교통사고 {title}
      </div>
      <div className="w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        {cTag}
      </div>
    </div>
    
  )
}
