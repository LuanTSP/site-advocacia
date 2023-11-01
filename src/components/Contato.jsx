import React, { useEffect } from 'react'
import { BiSolidMap } from 'react-icons/bi'
import { FaPhoneVolume } from 'react-icons/fa6'
import { ImWhatsapp } from 'react-icons/im'
import AOS from 'aos'

function Contato() {
    useEffect(() => {
        AOS.init()
    }, [])

  return (
    <footer id='contato' className="min-h-screen bg-black p-4 text-white w-100">
        <h1 data-aos="fade-zoom-in" data-aos-duration="500" className='text-title1 font-bold mb-4'>Onde nos Encontrar ?</h1>
        <div data-aos="fade-zoom-in" data-aos-duration="500" data-aos-dalay="100" className='mx-auto w-100 md:w-5/6'>
            <iframe
                className='w-[100%] h-[300px] mb-4' 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8117.536269511317!2d-63.90011888273006!3d-8.765132466869705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92325b665998520b%3A0x75d0f25ad2c5198b!2sPorto%20Velho%2C%20State%20of%20Rond%C3%B4nia!5e0!3m2!1sen!2sbr!4v1698618867079!5m2!1sen!2sbr"style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
            </iframe>
            <div className='flex flex-col gap-4'>
                <div>
                    <h2 className='text-[1.5rem] font-bold flex items-center gap-4'>
                        Localidade:
                    </h2>
                    <span className='flex items-center gap-4'>
                        <BiSolidMap/>
                        Av. Gov. Jorge Teixeira, 1215 - São Cristovão
                    </span>
                </div>
                <div className='flex gap-2 flex-col'>
                    <h2 className='text-[1.5rem] font-bold'>
                        Contato:
                    </h2>
                    <span className='flex items-center gap-4'>
                        <FaPhoneVolume/>
                        (69) 98457-7739
                    </span>
                    <span className='flex items-center gap-4 text-[1rem]'>
                        <ImWhatsapp/>
                        (69) 99375-5335
                    </span>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Contato