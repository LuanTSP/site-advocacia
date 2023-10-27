import React from 'react'
import HeroButton from './HeroButton'

function Hero() {
  return (
    <section className="
            min-h-[calc(100vh-6rem)] bg-judges bg-cover bg-left-top
            px-4
        ">
        <div className='flex flex-col w-1/2 text-white pt-24 gap-4'>
            <h1 className="
                text-title1
                font-bold
                ">Soluções de Qualidade para Pessoas Físicas e Jurídicas
            </h1>
            <h2 className='font-bold'
                >Agende sua consulta com um de nossos advogados ou conheça nossas áreas de atuação.
            </h2>
            <div className='w-full flex gap-12 justify-between'>
                <HeroButton text="CONTATO" id="#contato"/>
                <HeroButton text="CONHEÇA" id="#especialidades"/>
            </div>
        </div>
        
    </section>
  )
}

export default Hero