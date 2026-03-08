import { useState } from "react"

const Navbar = () => {
  const [count, setCount] = useState(10)
  const [bgColor, setBgColor] = useState('bg-violet-500')

  function increaseCount(){
    setCount(count+1)
    changeColor()
  }

  function changeColor(){
    setBgColor("bg-black")
    setTimeout(()=>{
      setBgColor("bg-violet-500")
    },100)
    
  }

  return (
    <div className="py-3 flex justify-between">
        <button className=" text-white py-2 px-4 rounded-full bg-black text-sm hover:cursor-pointer">TARGET AUDIENCE</button>
        <button className=" text-white py-2 px-4 rounded-full hover:cursor-pointer bg-violet-500 text-sm">DIGITAL BANKING PLATFORM</button>
        <div className="flex gap-2 items-center">
          <h1 className={`min-h-10 p-2 min-w-10 flex items-center justify-center ${bgColor} text-white font-bold rounded-full`} >{count}</h1>
          <button onClick={increaseCount} className=" hover:bg-violet-500 transition-all rounded-sm py-2 px-6 bg-black text-white">count++</button>
        </div>
    </div>
  )
}

export default Navbar