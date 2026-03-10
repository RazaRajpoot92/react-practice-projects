import NoteForm from "./NoteForm";


const NoteApp = ()=>{

    return (
        <div className="min-h-screen bg-gray-100 pt-8">
            <h1 className="text-center text-5xl font-bold">My <span className="text-violet-500">Note</span> App</h1>
            <NoteForm />
        </div>
    )
}

export default NoteApp;