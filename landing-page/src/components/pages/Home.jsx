import IntroSection from '../IntroSection'
import BottomSection from '../BottomSection'
import Hero from '../Hero'
import Navbar from '../Navbar'
import Form from "../Form"

const Home = () => {
  return (
        <>
        <div className=" relative pb-12 p-4 bg-cover bg-[url('https://plus.unsplash.com/premium_photo-1691979240905-49a152fc53ca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGxpcXVpZCUyMGJhY2tncm91bmQlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D')]">
          <div className="custom-shape-divider-bottom-1773289195">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
            </svg>
          </div>
          <Navbar />
          <Hero />
        </div>  
        
      <IntroSection />
      <BottomSection />

    
    </>
  )
}

export default Home