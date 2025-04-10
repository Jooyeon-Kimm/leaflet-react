import MyListData from './MyListData.json'
import MyListItem from './MyListItem'

// 2 by 2 : tailwind의 grid 사용
export default function MyList() {
    console.log(MyListData) // 개발자도구 > Console 에 보임
    const tags = MyListData.map(item => 
        <MyListItem
        key = {item.title}
        title = {item.title}
        imgUrl = {item.imgUrl}
        content = {item.content}
        />
    )
  return (
    <div className='w-10/12 grid grid-cols-2 gap-4'>
        {tags}
    </div>
  )
}
