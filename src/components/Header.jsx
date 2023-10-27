import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../imgs/logo.png'
import logo_nome from '../imgs/logo_nome.png'

function Header() {
  return (
    <header className='flex justify-between items-center bg-black h-24 text-white px-4'>
        <div className='flex'>
          <img src={logo} alt='Logo Advocacia' className='scale-80 w-15'/>
          <img src={logo_nome} alt='Logo Nome Advocacia' className='scale-75'/>
        </div>
        <nav className='flex gap-8 text-yellow-400'>
            <li className='list-none'><a href='#especialidades'>Especialidades</a></li>
            <li className='list-none'><a href='#quemsomos' to="/">Quem Somos</a></li>
            <li className='list-none'><a href="#contato" to="/">Contato</a></li>
        </nav>
    </header>
  )
}

export default Header