import React from 'react'
import { Link } from 'react-router-dom'

function QuemSomosCard(props) {
  return (
    <Link to="/" className="
        duration-200
        ease
        hover:before:scale-x-100
        shadow-black
        relative

        before:scale-x-0
        before:origin-left
        before:duration-500
        before:ease
        before:content-['']
        before:bottom-0
        before:left-0
        before:right-0
        before:top-0
        before:bg-[rgba(0,0,0,0.2)]
        before:rounded
        before:absolute
        before:z-[1]
    ">
        <div className="bg-white rounded shadow-md shadow-gray-400 flex items-center h-64">
            <div className="
                h-full w-80 bg-woman bg-center rounded bg-cover relative overflow-hidden
                
                before:content-['']
                before:absolute
                before:top-0
                before:right-0
                before:left-0
                before:bottom-0
                before:bg-[rgba(0,0,0,0.2)]
                before:-rotate-[30deg]
                before:translate-y-1/2
                before:-translate-x-[35%]
                before:scale-y-[300]
            ">
            </div>
            <div className="h-full w-full p-4">
                <h2 className="font-bold text-title1">{props.nome}</h2>   
                <ul>
                    <h2 className='font-bold text-[1.15rem]'>
                        {props.speciality}
                    </h2>
                    {props.areas ?  props.areas.map((spec) => (
                        <li className="
                            before:content-['●']
                            before:mr-4
                            before:text-[0.6rem]
                            before:text-yellow-400
                        ">
                            {spec}
                        </li>
                    )) : "Nothing"}
                </ul>
            </div>
        </div>
    </Link>
  )
}

export default QuemSomosCard