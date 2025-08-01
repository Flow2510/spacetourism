import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header/header'
import Home from './pages/home'
import Destinations from './pages/destinations'
import Crew from './pages/crew'

function App() {

  return (
    <>
      <div className='background'></div>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/destinations' element={<Destinations />} />
          <Route path='/crew' element={<Crew />} />
        </Routes>
      </main>

    </>
  )
}

export default App
