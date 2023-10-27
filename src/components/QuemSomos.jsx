import React from 'react'
import QuemSomosCard from './QuemSomosCard'

function QuemSomos() {
    return (
    <section id='quemsomos' className="min-h-screen p-4 bg-gray-200">
        <h1 className="text-title1 mb-4 font-bold">Quem Somos</h1>
        <div className='flex flex-col gap-4'>
            <QuemSomosCard
                nome="Dra. Sanda Silveira de Melo"
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
                nome="Dra. Sanda Silveira de Melo"
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
                nome="Dra. Sanda Silveira de Melo"
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
                nome="Dra. Sanda Silveira de Melo"
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
                nome="Dra. Sanda Silveira de Melo"
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