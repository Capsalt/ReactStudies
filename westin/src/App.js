
import React from 'react'
import About from './Components/About'
import Banner from './Components/Banner'
import Header from './Components/Header'
import Portfolio from './Components/Portfolio'
import Preloader from './Components/Preloader'
import Services from './Components/Services'
import Testimonal from './Components/Testimonal'
import Blog from './Components/Blog'
import Contact from './Components/Contact'
import Footer from './Components/Footer'


const App = () => {
  return (
    <div>
      <Preloader/>
      <Header/>
      <Banner/>
      <About/>
      <Services/>
      <Portfolio/>
      <Testimonal/>
      <Blog/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App

