
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Allprojects from './components/Allprojects'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Contact } from './components/Contact'
import Footer from './Footer'



export default function Routing() {
    
  return (
    <div className="bg-gray-900">
    <Hero />
    <Projects />
    <Skills />
    <Contact />
    <Footer />
    
    
  </div>
  )
}
