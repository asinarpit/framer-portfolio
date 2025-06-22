import './App.css'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Projects from './sections/Projects.jsx'
import Contact from './sections/Contact.jsx'
import Footer from './components/Footer.jsx'
import Testimonials from './sections/Testimonials.jsx'
import BlobCursor from './components/BlobCursor.jsx'

function App() {
  return (
    <div className='min-h-screen'>
      <BlobCursor />
      <Hero />
      <About />
      <Projects/>
      {/* <Testimonials /> */}
      <Contact/>
      <Footer />
    </div>
  )
}

export default App
