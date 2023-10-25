import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo_advocacia.png'
import logo_nome from '../images/logo_nome_advocacia.png'

function Header() {
  return (
    <header className='flex justify-between items-center bg-black h-24 text-white px-4'>
        <div className='flex'>
          <img src={logo} alt='Logo Advocacia' className='scale-80 w-15'/>
          <img src={logo_nome} alt='Logo Nome Advocacia' className='scale-75'/>
        </div>
        <nav className='flex gap-8 text-yellow-400'>
            <li className='list-none'><Link to="/">Especialidades</Link></li>
            <li className='list-none'><Link to="/">Quem Somos</Link></li>
            <li className='list-none'><Link to="/">Contato</Link></li>
        </nav>
    </header>
  )
}

export default Header