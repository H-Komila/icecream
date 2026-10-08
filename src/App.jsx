import React from 'react'
import "./App.css"
import Nav from './components/Nav'
import Header from './components/Header'
import Article from './components/Article'
import Hero from './components/Hero'
import Aside from './components/Aside'
import Section from './components/Section'
import Wrapper from './components/Wrapper'
import VisitSection from './components/VisitSection'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Nav/>
      <Header/>
      <Article/>
      <Hero/>
      <Aside/>
      <Section/>
      <Wrapper/>
      <VisitSection/>
      <Footer/>
    </>
  )
}

export default App