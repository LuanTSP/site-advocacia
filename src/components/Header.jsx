import React from 'react'
import logo from '../imgs/logo.png'
import logo_nome from '../imgs/logo_nome.png'

function Header() {
  return (
    <header className='flex flex-col md:flex-row justify-between items-center bg-black min-h-24 text-white px-4'>
        <div className='mx-8 flex items-center justify-center'>
          <img src={logo} alt='Logo Advocacia' className='scale-75 w-15 hidden md:block object-cover'/>
          <img src={logo_nome} alt='Logo Nome Advocacia' className='scale-75 md:-translate-x-8'/>
        </div>
        <nav className='flex items-center justify-evenly md:pl-8 md:justify-end text-yellow-400 md:w-[400px] w-full pb-4 md:pb-0 tracking-wider'>
            <li className="list-none relative md:mr-8
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
              list-none relative md:mr-8
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
              list-none relative md:mr-8
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