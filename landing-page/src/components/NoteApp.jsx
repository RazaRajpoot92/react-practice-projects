import { useContext } from "react";
import NoteForm from "./NoteForm";
import { ContestStore } from "../context/ContextWrapper";


const NoteApp = ()=>{

    const [darkTheme, setDarkTheme] = useContext(ContestStore)

    return (
        <div className={`${darkTheme?"dark":"light"}  pt-8`} >
            <h1 className={`${darkTheme?"text-white":"text-black"} text-center text-5xl font-bold`}>My <span className="text-violet-500">Note</span> App</h1>
            <NoteForm />
        </div>
    )
}

export default NoteApp;