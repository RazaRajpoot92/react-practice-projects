

const Form = ()=>{

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(e)
    }

    return (
        <div className="flex justify-center">
            <form onSubmit={(e)=>handleSubmit(e)}>
                <input className="rounded-lg border-2 border-gray-500 w-100 py-1 px-2 text-gray-500" type="text" placeholder="Enter your name" />
                <button className="bg-black text-white px-4 py-1.5 border-2 rounded-lg ml-1">Submit</button>
            </form>
        </div>
    )
}

export default Form