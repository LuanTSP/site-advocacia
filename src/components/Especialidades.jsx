import React from 'react'
import EspecialidadesCard from './EspecialidadesCard'
import { GiHandcuffs } from 'react-icons/gi'
import { SlPeople } from 'react-icons/sl'
import { BsFillFileSpreadsheetFill } from 'react-icons/bs'

function Especialidades() {
    return (
    <section id="especialidades" className="pt-4 px-4 pb-8 font-Roboto bg-black text-white min-h-screen">
        <h1 className='text-title1 mb-4'>Algumas de Nossas Especialidades</h1>
        <div className="flex justify-center flex-wrap gap-8
            lg:justify-evenly
        ">
            <EspecialidadesCard
                title="Direito Criminal"
                icon={<GiHandcuffs className='w-28 h-28'/>}
                description1="Ação Penal Pública Incondicionada"
                description2="Ação Penal Privada Exclusiva"
                description3="Ação Penal Pública Condicionada"
                footer="Advogado especialista em processos criminais"
            />
            <EspecialidadesCard
                title="Direito Criminal"
                icon={<BsFillFileSpreadsheetFill className='w-28 h-28'/>}
                description1="Ação Penal Pública Incondicionada"
                description2="Ação Penal Privada Exclusiva"
                description3="Ação Penal Pública Condicionada"
                footer="Advogado especialista em processos criminais"
            />
            <EspecialidadesCard
                title="Direito Criminal"
                icon={<SlPeople className='w-28 h-28'/>}
                description1="Ação Penal Pública Incondicionada"
                description2="Ação Penal Privada Exclusiva"
                description3="Ação Penal Pública Condicionada"
                footer="Advogado especialista em processos criminais"
            />
        </div>
    </section>
    )
}

export default Especialidades