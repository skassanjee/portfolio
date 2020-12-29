import React from 'react';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { GrDocument, GrContactInfo } from 'react-icons/gr'
import { VscFolder, VscAccount, VscNote } from 'react-icons/vsc'
import Navbar from './NavbarMenu.component';


const NavbarMenuData = [
    {
        title: 'Portfolio',
        path:'/',
        icon: <VscFolder />,
        cName: 'nav-text'
    },

    {
        title: 'Resume',
        path:'/resume',
        icon: <VscNote/>,
        cName: 'nav-text'
    },

    {
        title: 'Contact',
        path:'/contact',
        icon: <VscAccount />,
        cName: 'nav-text'
    },
]

export default NavbarMenuData