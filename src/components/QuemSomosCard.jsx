import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function QuemSomosCard(props) {
    const image = require(`../imgs/${props.imgName}`)

    return (
    <Link to="/" className="
        shadow-black
    ">
        <div className="bg-white rounded shadow-md shadow-gray-400 flex items-center h-64
            ease
            duration-200
            hover:bg-gray-100
            hover:ease-in-out
            hover:delay-100
            hover:scale-[1.01]
        ">
            <div className="h-full w-72 overflow-hidden relative
                md:w-80
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
                <img src={image} alt='image' className="
                    h-full w-full rounded bg-cover
                    object-cover
                ">
                </img>
            </div>
            <div className="h-full w-full p-4">
                <h2 className="font-bold text-[1.3rem] md:text-title1">{props.nome}</h2>   
                <ul>
                    <h2 className='font-bold text-[0.9rem] md:text-[1.1rem]'>
                        {props.speciality}
                    </h2>
                    {props.areas ?  props.areas.map((spec) => (
                        <li className="
                            text-[0.9rem]
                            md:text-[1rem]
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