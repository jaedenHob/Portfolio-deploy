
import { useState } from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import About from './components/About'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
function App() {

  return (
    <>
      <div className='bg-slate-50'>
        <Sidenav />
        <Main />
        <About />
        <Education />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App;
