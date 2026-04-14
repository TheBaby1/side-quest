import './App.css'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'

function App() {

  return (
    <>
      <Routes>
        <Route path="/landing-page" element={<LandingPage></LandingPage>}/>

      </Routes>

    </>
  )
}

export default App
