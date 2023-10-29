import React from 'react'
import QuemSomosCard from './QuemSomosCard'

function QuemSomos() {
    return (
    <section id='quemsomos' className="min-h-screen p-4 bg-gray-200">
        <h1 className="text-title1 mb-4 font-bold">Quem Somos</h1>
        <div className='flex flex-col gap-4'>
            <QuemSomosCard
                imgName="woman1.jpg"
                nome="Dra. Sanda Silveira de Melo"
                speciality="Especialista em Direito Criminal"
                areas = {[
                    "Assassinato",
                    "Sequestro",
                    "Furto ou Roubo",
                    "Invasão de Propriedade",
                    "Agressão",
                ]}
            />
            <QuemSomosCard
                imgName="woman2.jpg"
                nome="Dra. Maria de Castro Dinda"
                speciality="Especialista em Direito Tributário"
                areas = {[
                    "Assassinato",
                    "Sequestro",
                    "Furto ou Roubo",
                    "Invasão de Propriedade",
                    "Agressão",
                ]}
            />
            <QuemSomosCard
                imgName="man1.jpg"
                nome="Dr. Paulo da Costa Chavier"
                speciality="Especialista em Direito Criminal"
                areas = {[
                    "Assassinato",
                    "Sequestro",
                    "Furto ou Roubo",
                    "Invasão de Propriedade",
                    "Agressão",
                ]}
            />
            <QuemSomosCard
                imgName="man2.jpg"
                nome="Dr. Mário de Andrade Verne"
                speciality="Especialista em Direito Criminal"
                areas = {[
                    "Assasinato",
                    "Sequestro",
                    "Furto ou Roubo",
                    "Invasão de Propriedade",
                    "Agressão",
                ]}
            />
            <QuemSomosCard
                imgName="man3.jpg"
                nome="Dr. Felipe Gusmão Castro"
                speciality="Especialista em Direito Criminal"
                areas = {[
                    "Assasinato",
                    "Sequestro",
                    "Furto ou Roubo",
                    "Invasão de Propriedade",
                    "Agressão",
                ]}
            />
        </div>
    </section>
    )
}

export default QuemSomos