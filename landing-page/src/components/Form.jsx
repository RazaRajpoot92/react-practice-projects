
import { useContext } from "react"
import { Link } from "react-router-dom"
import {Sun, Moon} from "lucide-react"
import { ContestStore } from "../context/ContextWrapper"
const Form = ()=>{

    const [darkTheme, setDarkTheme] = useContext(ContestStore)

    const handleClick = ()=>{
        setDarkTheme(!darkTheme)      
    }

    return (
        <div className="flex justify-center items-center">
            <div className={` ${darkTheme?"dark":"light"} flex justify-between items-center px-5 bg-gray-900 border-white w-full  p-2`}>
                <h1 className="text-violet-500 font-semibold">InspWork</h1>
                <div className="flex gap-2 text-white items-center">
                    <Link to='/'>Home</Link>
                    <Link to='/products'>Product</Link>
                    <Link to='/mynote'>MyNote</Link>
                </div>
                
                <h1 onClick={handleClick} className="bg-violet-500 h-10 w-11 flex justify-center items-center rounded-full text-sm text-white">
                    {darkTheme?<Sun />:<Moon />}
                </h1>
                
            </div>
            
        </div>
    )
}

export default Form