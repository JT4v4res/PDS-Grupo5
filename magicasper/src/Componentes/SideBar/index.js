import React, {useEffect, useState} from 'react'
import {Link, useParams} from "react-router-dom"
import {SidebarData} from './data'
import * as AiIcons from "react-icons/ai"
import * as FaIcons from "react-icons/fa"
import './index.css'
import { IconContext } from 'react-icons/lib'
import SubMenu from './Submenu';
import api from "../../Componentes/apis";


const SideBar = ({}) => {
  // professores = ['Marcio Ribeiro', 'Roberta Lopez']
  const [sidebar, setSidebar] = useState(false);

  const param = useParams()
    console.log(param, 'param')
    const {Materiaid} = useParams();
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    const dadosasync = async () => {
        try {
            const {data } = await api
                .get(`/materia/${Materiaid}`)

            const {professores} = data
            setData(professores[0])
        }catch (e) {
            console.log('erro: ', e);
        }

    }

    useEffect(() => {


        dadosasync();
    }, [Materiaid]);
  const showSidebar = () => setSidebar(!sidebar)

    console.log('data index sidebar', data)
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
                return <SubMenu item={item} data={data} key={index} />;
              })}
            </ul>
          </nav>
        </IconContext.Provider>
    </div>
    </>
  )
}

export default SideBar
