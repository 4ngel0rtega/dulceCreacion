

// Imports of Images
import { GiHamburgerMenu } from 'react-icons/gi';
import img1 from '../assets/logo.jpeg';
import { useState } from 'react';

function Navbar() {
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    const toggleMenu = () => {
        setIsOpenMenu(!isOpenMenu);
    }
  return (
    <nav className="bg-pastelPink sticky top-0 z-50">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"> 
            <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
                <img src={img1} alt="Logo de Dulce Creación" className="h-16 rounded-full"/>
                <span className='self-center text-2xl font-semibold whitespace-nowrap text-white'>Dulce Creación</span>
            </a>
            <button onClick={() => toggleMenu()} className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-pastelPink-dark hover:text-pastelPink-light focus:outline-none focus:ring-2 focus:ring-pastelPink-light' aria-label='Abrir menú'>
                <GiHamburgerMenu className='h-5 w-5'/>
            </button>
            <div className={`${isOpenMenu ? '' : 'hidden'} w-full md:block md:w-auto`}>
                <ul className='font-medium flex flex-col p-4 md:p-0 mt-4 border border-pastelPink-light rounded-lg bg-pastelPink-dark md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent'>
                    <li>
                        <a href="" className='block py-2 px-3 text-white rounded-sm hover:bg-pastelPink-light hover:text-pastelPink-dark md:hover:bg-transparent md:border-0 md:hover:text-pastelPink-dark '>Inicio</a>
                    </li>
                    <li>
                        <a href="" className='block py-2 px-3 text-white rounded-sm hover:bg-pastelPink-light hover:text-pastelPink-dark md:hover:bg-transparent md:border-0 md:hover:text-pastelPink-dark '>Nosotros</a>
                    </li>
                    <li>
                        <a href="" className='block py-2 px-3 text-white rounded-sm hover:bg-pastelPink-light hover:text-pastelPink-dark md:hover:bg-transparent md:border-0 md:hover:text-pastelPink-dark '>Servicios</a>
                    </li>
                    <li>
                        <a href="" className='block py-2 px-3 text-white rounded-sm hover:bg-pastelPink-light hover:text-pastelPink-dark md:hover:bg-transparent md:border-0 md:hover:text-pastelPink-dark '>Productos</a>
                    </li>
                    <li>
                        <a href="" className='block py-2 px-3 text-white rounded-sm hover:bg-pastelPink-light hover:text-pastelPink-dark md:hover:bg-transparent md:border-0 md:hover:text-pastelPink-dark '>Galería</a>
                    </li>
                    <li>
                        <a href="" className='block py-2 px-3 text-white rounded-sm hover:bg-pastelPink-light hover:text-pastelPink-dark md:hover:bg-transparent md:border-0 md:hover:text-pastelPink-dark '>Contacto</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  );
}

export default Navbar;