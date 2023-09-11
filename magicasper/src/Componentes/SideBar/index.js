import React, {useState} from 'react'
import { Link } from "react-router-dom"
import {SidebarData} from './data'
import * as AiIcons from "react-icons/ai"
import * as FaIcons from "react-icons/fa"
import './index.css'
import { IconContext } from 'react-icons/lib'
import SubMenu from './Submenu';


const SideBar = ({professores}) => {
  professores = ['Marcio Ribeiro', 'Roberta Lopez']
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar)
  return (
    <>
    <div id='fullsidebar'> 
      <IconContext.Provider value={{color:'#ffff'}}>
          <div className='sidebar'>
            <Link to="#" className='menu-bar'>
              <FaIcons.FaBars onClick={showSidebar}/>
            </Link>
          </div>
          <nav className={sidebar ? 'nav-menu active': 'nav-menu'}>
            <ul className='nav-menu-itens'>
              <li className='navbar-toggle'>
                  <Link to= "#" className='menu-bars'>
                    <AiIcons.AiOutlineClose onClick={showSidebar}/>
                  </Link>
              </li>
              {SidebarData.map((item, index) => {
                return <SubMenu item={item} key={index} />;
              })}
            </ul>
          </nav>
        </IconContext.Provider>
    </div>
    </>
  )
}

export default SideBar
