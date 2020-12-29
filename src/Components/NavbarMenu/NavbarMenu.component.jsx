import React, {useState} from 'react'
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai'
import NavbarMenuData from './NavbarMenu.data'
import './NavbarMenu.styles.css'
import { IconContext } from 'react-icons' 

const Navbar = () =>{
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return(
        <div>
            <IconContext.Provider value ={{color: '#f6f8fa' }}>
            <div className="navbar">
                <div>
                    <Link to="#" className='menu-bars'>
                        <FaBars className='bars' onClick={showSidebar} />
                     </Link>
                </div>

                <div className="navLinks">
                <ul>
                <li>
                    <Link to='/'>
                        Portfolio
                    </Link>
                </li>
                <li>                    
                    <Link to='/resume'>
                        Resume
                    </Link></li>
                <li>                   
                     <Link to='/Contact'>
                        Contact
                    </Link></li>
                </ul>


            </div>


            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                
                <ul className="nav-menu-items" onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars">
                            <AiOutlineClose />
                        </Link>

                    </li>
                    {NavbarMenuData.map((item, index) =>{
                        return(
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                                </Link>

                            </li>
                        )
                    }) }
                </ul>
            </nav>


          
            </IconContext.Provider>
        </div>
        
    )
}

export default Navbar