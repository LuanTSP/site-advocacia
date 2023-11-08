import React from 'react'
import Hero from '../components/Hero'
import Especialidades from '../components/Especialidades'
import QuemSomos from '../components/QuemSomos'
import Contato from '../components/Contato'

function Home() {
  return (
    <main className='overflow-x-hidden'>
      <Hero/>
      <Especialidades/>
      <QuemSomos/>
      <Contato/>
    </main>
  )
}

export default Home