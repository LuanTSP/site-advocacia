import React from 'react'
import logo from '../imgs/logo.png'
import logo_nome from '../imgs/logo_nome.png'

function Header() {
  return (
    <header className='flex justify-between items-center bg-black h-24 text-white px-4'>
        <div className='flex items-center'>
          <img src={logo} alt='Logo Advocacia' className='scale-80 w-15'/>
          <img src={logo_nome} alt='Logo Nome Advocacia' className='scale-75 w-full h-full invisible md:visible'/>
        </div>
        <nav className='flex items-center justify-end text-yellow-400 w-2/5 invisible md:visible'>
            <li className="list-none relative mr-8
              before:content-['']
              before:top-[1.4rem]
              before:bottom-[0]
              before:left-0
              before:right-0
              before:bg-yellow-400
              before:absolute
              before:h-[2px]
              before:origin-left
              before:scale-x-0
              before:duration-200
              hover:before:scale-100
            ">
              <a href='#especialidades'>
                Especialidades
              </a>
            </li>
            <li className="
              list-none relative mr-8
              before:content-['']
              before:top-[1.4rem]
              before:bottom-[0]
              before:left-0
              before:right-0
              before:bg-yellow-400
              before:absolute
              before:h-[2px]
              before:origin-left
              before:scale-x-0
              before:duration-200
              hover:before:scale-100
            ">
              <a href='#quemsomos' to="/">
                Profissionais
              </a>
            </li>
            <li className="
              list-none relative mr-8
              before:content-['']
              before:top-[1.4rem]
              before:bottom-[0]
              before:left-0
              before:right-0
              before:bg-yellow-400
              before:absolute
              before:h-[2px]
              before:origin-left
              before:scale-x-0
              before:duration-200
              hover:before:scale-100
            ">
              <a href="#contato" to="/">
                Contato
              </a>
            </li>
        </nav>
    </header>
  )
}

export default Header