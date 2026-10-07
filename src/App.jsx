import React from 'react'
import "./App.css"
import Nav from './components/Nav'
import Header from './components/Header'
import Article from './components/Article'
import Hero from './components/Hero'
import Aside from './components/Aside'

const App = () => {
  return (
    <>
      <Nav/>
      <Header/>
      <Article/>
      <Hero/>
      <Aside/>
    </>
  )
}

export default App