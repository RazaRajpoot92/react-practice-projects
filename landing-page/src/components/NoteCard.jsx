import React from 'react'

const NoteCard = (props) => {
   
  return (
    <div
            className={`h-80 w-60 relative bg-cover bg-center  bg-[url("https://static.vecteezy.com/system/resources/previews/037/152/677/large_2x/sticky-note-paper-background-free-png.png")] p-6`}
          >
            <div className="absolute top-6 right-6 h-8 w-8 bg-violet-400 flex items-center justify-center text-white rounded-full">
              { props.idx+1}
            </div>

            <h1 className="mt-8 text-gray-700 font-bold leading-5 wrap-break-words">
              {props.item.heading}
            </h1>

            <p className="mt-2 text-gray-500 wrap-break-words">{props.item.details}</p>
            <button
              onClick={() => props.fn(props.idx)}
              className="absolute bottom-3 left-18 bg-violet-500 text-white px-2 py-1 rounded-md text-sm"
            >
              Delete Note
            </button>
          </div>
  )
}

export default NoteCard