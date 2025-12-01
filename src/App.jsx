import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ServiceIntro from './components/ServiceIntro'
import Problem from './components/Problem'
import Solution from './components/Solution'
import ForOwner from './components/ForOwner'
import ForCustomer from './components/ForCustomer'
import Team from './components/Team'
import Culture from './components/Culture'
import Vision from './components/Vision'
import Join from './components/Join'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <ServiceIntro />
        <Problem />
        <Solution />
        <ForOwner />
        <ForCustomer />
        <Team />
        <Culture />
        <Vision />
        <Join />
      </main>
      <Footer />
    </div>
  )
}

export default App

