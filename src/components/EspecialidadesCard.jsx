import React, { useEffect } from 'react'
import AOS from 'aos'

function EspecialidadesCard(props) {
    useEffect(() => {
        AOS.init({
            duration:200,
            delay:100,
            offset:50,
            easing:"ease-out"
        })
    })

  return (
    <div data-aos="fade-zoom-in" className="flex flex-col w-72 min-h-96 border border-gray-950 rounded-lg 
        shadow-md shadow-gray-900
        duration-100
        ease
        hover:cursor-pointer
        hover:shadow-lg
        hover:shadow-gray-800
    ">
        <div className="
            flex items-center justify-center bg-darkGray py-1 font-bold capitalize
            rounded-t-lg
        ">
            {props.title ? props.title : "title"}
        </div>
        <div className='flex items-center justify-center w-full h-full p-4'>
            {props.icon}
        </div>
        <ul className="flex justify-center flex-col px-4 h-1/2 gap-1">
            <li className="text-[0.9rem] 
                before:content-['●'] 
                before:text-yellow-400
                before:text-[0.8rem]
                before:mr-4
            ">
                {props.description1 ? props.description1 : "description1"}
            </li>
            <li className="text-[0.9rem] 
                before:content-['●'] 
                before:text-yellow-400 
                before:text-[0.8rem]
                before:mr-4
            ">
                {props.description2 ? props.description2 : "description2"}
            </li>
            <li className="text-[0.9rem] 
                before:content-['●'] 
                before:text-yellow-400 
                before:text-[0.8rem]
                before:mr-4
            ">
                {props.description3 ? props.description3 : "description3"}
            </li>
        </ul>
        <div className="
            h-20 bg-darkGray flex items-center justify-center w-full px-4 py-8
            rounded-b-lg
        ">
            {props.footer ? props.footer : "footer"}
        </div>
    </div>
  )
}

export default EspecialidadesCard