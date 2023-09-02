import React, {useState} from 'react'
import { Link } from "react-router-dom"
import {SidebarData} from './data'
import * as AiIcons from "react-icons/ai"
import * as FaIcons from "react-icons/fa"
import './index.css'
import { IconContext } from 'react-icons/lib'

function SideBar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar)
  return (
    <>
    <IconContext.Provider value={{color:'#ffff'}}>
      <div>
        <div className='sidebar'>
          <Link to="#" className='menu-bar'>
            <FaIcons.FaBars onClick={showSidebar}/>
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active': 'nav-menu'}>
          <ul className='nav-menu-itens' onClick={showSidebar}>
            <li className='navbar-toggle'>
                <Link to= "#" className='menu-bars'>
                  <AiIcons.AiOutlineClose/>
                </Link>
            </li>
            {SidebarData.map((item, index) => {
              return(
                 <li key={index} className={item.cName}>
                  <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                  </Link>
                 </li>
              );
            })}
          </ul>
        </nav>
      </div>
      </IconContext.Provider>
    </>
  )
}

export default SideBar
