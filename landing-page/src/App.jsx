import {Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Products from './components/pages/Products'
import Form from './components/Form'
import MyNote from './components/pages/MyNote'


const App = () => {
  return (
    <div className=''>
        <Form />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element = {<Products />} />
          <Route path='/mynote' element = {<MyNote />} />
        </Routes>
    </div>
  )
}

export default App