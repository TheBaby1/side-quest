import './App.css'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import AboutUsPage from './pages/AboutUsPage'

function App() {

  return (
    <>
      <Routes>
        <Route path="/landing-page" element={<LandingPage></LandingPage>}/>
        <Route path="/about-us-page" element={<AboutUsPage></AboutUsPage>} />
      </Routes>

    </>
  )
}

export default App
