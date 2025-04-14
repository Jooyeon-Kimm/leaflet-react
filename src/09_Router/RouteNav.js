import TailButton from "../UI/TailButton"
import { useNavigate } from "react-router-dom"

export default function RouteNav() {
    const navigate=useNavigate();

  return (
    <div className="w-10/12 grid grid-cols-3 m-5">
      <TailButton caption="Home" bcolor="blue" clickHandler={() => navigate('/')} />
      <TailButton caption="Page1" bcolor="blue" clickHandler={() => navigate('/p1/사과')}/>
      <TailButton caption="Page2" bcolor="blue" clickHandler={() => navigate('/p2')}/>
    </div>
  )
}
