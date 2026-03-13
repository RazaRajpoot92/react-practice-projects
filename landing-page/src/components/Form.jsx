
import { Link } from "react-router-dom"
const Form = ()=>{

    return (
        <div className="flex justify-center">
            <div className="flex justify-between px-5 bg-gray-900 border-white w-full border p-2 rounded-md">
                <h1 className="text-violet-500 font-semibold">InspWork</h1>
                <div className="flex gap-2 text-white">
                    <Link to='/'>Home</Link>
                    <Link to='/products'>Product</Link>
                    <Link to='/mynote'>MyNote</Link>
                </div>
            </div>
            
        </div>
    )
}

export default Form