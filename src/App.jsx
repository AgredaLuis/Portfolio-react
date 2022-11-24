import React from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Sidebar from "./components/sidebar/Sidebar"
import Services from './components/services/Services'
import Resume from './components/resume/Resume'
import Home from './components/home/Home'
import About from './components/about/About'
import Portfolio from './components/Portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Blog from './components/blog/Blog'
import Contact from './components/contact/Contact'
import Pricing from './components/pricing/Pricing'


function App() {

  return (
    <div className="App">
        <Sidebar />
        <main className='main'>
          <Home/>
          <About />
          <Services/>
          <Resume />
          <Portfolio />
          <Pricing />
          <Testimonials />
          <Blog />
          <Contact />
        </main>
    </div>
  )
}

export default App
