

export default function TailButton({caption, bcolor, clickHandler}) {
    // background color
    const colorB = {
        'blue' : 'bg-blue-600',
        'orange': 'bg-orange-600',
    }

    // hover color
    const colorH = {
        'blue' : 'hover:bg-blue-800',
        'orange': 'hover:bg-orange-800',
    }
  return (
    // 마우스 올라가면 색 변경: hover
    <button className={`inline-flex px-5 py-3
    rounded-md mx-2 justify-center items-center
    text-white font-bold ${colorB[bcolor]} ${colorH[bcolor]}`}
    onClick={clickHandler}>
      {caption}
    </button>
  )
}
