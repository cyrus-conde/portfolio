import React,{Fragment,useState} from 'react';
import ReactDOM from 'react-dom/client';
import {FaBars, FaTimes} from 'react-icons/fa';
import logo from '../assets/logo.png';
import {Link} from 'react-scroll';

const Nav = () => {


    const [nav,setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    
    const menuList =[
        {
            item: 'Home',
            itemLink: 'home'
        },
        {
            item: 'About',
            itemLink: 'about'
        },
        {
            item: 'Experience',
            itemLink: 'experience'
        },
        {
            item: 'Projects',
            itemLink: 'projects'
        },
        {
            item: 'Contact',
            itemLink: 'contact'
        }
    ]
    
    const navItems = menuList.map((e,index) => {
        return <Link activeClass="active border-b-4 border-green-500" to={e.itemLink} spy={true} smooth={true} offset={-60} duration={500} key={index} className="text-gray-300 nav-item cursor-pointer hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-md font-medium" >{e.item}</Link>
       
    })

    const mobile_navItems = menuList.map((e,index) => {
        
        return <Link to={e.itemLink} activeClass='active border-b-4 border-green-500' spy={true} smooth={true} offset={-60} duration={500} key={index} className="text-gray-300 nav-item cursor-pointer hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">{e.item}</Link>
        
    })
    return (
        <Fragment>
            
            <nav className="bg-gray-800">
                <div className="mx-auto max-w-7xl px-2 md:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                            
                            <div onClick={handleClick} className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="true">
                            
                            {!nav ? <FaBars/> : <FaTimes/>}
                            </div>
                        </div>
                        
                        <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                            <div className="flex flex-shrink-0 items-center">
                                <img className="block h-10 w-auto lg:hidden" src={logo} alt="McMac"/>
                                <img className="hidden h-10 w-auto lg:block" src={logo} alt="McMac"/>
                                <span className='text-white'>McMac Tech</span>
                            </div>
                            <div className="hidden md:ml-6 md:block">
                                <div className={nav ? "nav-menu active flex space-x-4" : "nav-menu flex space-x-4"} >
                                    {navItems}
                                    
                                </div>
                            </div>
                        </div>
                    
                    </div>
                    
                </div>

                
                <div className={!nav ? 'hidden': 'md:hidden'} id="mobile-menu">
                    <div className="space-y-1 px-2 pt-2 pb-3">
                    {mobile_navItems}
                    
                    </div>
                </div>

            </nav>
        
        
</Fragment>
        
    );
}
export default Nav
