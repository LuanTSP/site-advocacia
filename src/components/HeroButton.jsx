import React from 'react'

function HeroButton(props) {
  return (
    <button className="
      py-4 text-yellow-400 border rounded-full border-yellow-400
      uppercase tracking-wider font-bold text-1xl w-full relative z-[1]

      before:absolute
      before:content-['']
      before:top-0
      before:right-0
      before:left-0
      before:bottom-0
      before:bg-yellow-400
      before:rounded-full
      before:scale-x-0
      before:opacity-0
      before:z-[-1]
      before:origin-left
      before:duration-100
      before:ease-out
      
      hover:before:scale-x-100
      hover:before:opacity-100
      hover:text-white
    ">
      {props.text}
    </button>
  )
}

export default HeroButton