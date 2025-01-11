
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Allprojects from './components/Allprojects'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Contact } from './components/Contact'
import Footer from './Footer'
import { Header } from './components/Header'



export default function Routing() {
    
  return (
    <div className="min-h-screen bg-gray-900">
    <Header />
    <Hero />
    <Projects />
    <Skills />
    <Contact />
    <Footer />
    
    
  </div>
  )
}
