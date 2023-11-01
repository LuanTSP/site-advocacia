import React, { useEffect } from 'react'
import HeroButton from './HeroButton'

function Hero() {
  return (
    <section className="
            min-h-[calc(100vh-6rem)] bg-judges bg-cover bg-left-top pb-8 px-4
            flex items-center justify-center
            md:items-start
            md:justify-start
        ">
        <div className='flex w-4/5 flex-col text-white pt-24 gap-4
            md:w-3/5
        '>
            <h1 className="
                text-title1
                font-bold
                ">Soluções de Qualidade para Pessoas Físicas e Jurídicas
            </h1>
            <h2 className='font-bold'
                >Agende sua consulta com um de nossos advogados ou conheça nossas áreas de atuação.
            </h2>
            <div className='w-full flex gap-12 justify-between flex-col
                sm:flex-row
            '>
                <HeroButton text="CONTATO" id="#contato"/>
                <HeroButton text="CONHEÇA" id="#especialidades"/>
            </div>
        </div>
    </section>
  )
}

export default Hero