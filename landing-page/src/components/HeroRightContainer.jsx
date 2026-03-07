import React from 'react'
import Card from './Card'

const HeroRightContainer = () => {
    

    const users = [{
        imgUrl: "https://plus.unsplash.com/premium_photo-1672373832627-062c83d263dc?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    },{
        imgUrl: "https://plus.unsplash.com/premium_photo-1672373833745-ac04484a96b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHdvcmtpbmclMjBtYW58ZW58MHx8MHx8fDA%3D"
    },
    {
        imgUrl: "https://images.unsplash.com/photo-1600275669283-4bf2bb8a990c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        imgUrl: "https://images.unsplash.com/photo-1600878459108-617a253537e9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdvcmtpbmclMjBtYW58ZW58MHx8MHx8fDA%3D"
    },
    {
        imgUrl: "https://images.unsplash.com/photo-1600878459108-617a253537e9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdvcmtpbmclMjBtYW58ZW58MHx8MHx8fDA%3D"
    }

]
  return (
    <div className='w-10/12 flex gap-2 overflow-scroll p-2'>
        
        {users.map((elem, id) => (
            <Card key={id} id={id} url={elem.imgUrl} />
        ))}
    </div>
  )
}

export default HeroRightContainer