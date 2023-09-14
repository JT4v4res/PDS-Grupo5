import React from 'react'
// import materias from '../../pages/MateriasDetalhes/index'

import * as AiIcons from "react-icons/ai"
import * as FaIcons from "react-icons/fa"
import * as BsIcons from "react-icons/bs"
import * as BiIcons from "react-icons/bi"
import * as RiIcons from "react-icons/ri"

const subNav = [
  {
    title: 'Marcio Ribeiro',
    path: '../../professorDetalhes',
    icon: <BsIcons.BsPersonFill/>
  },
  // {
  //   title: 'Professor 2',
  //   path: '../../professorDetalhes',
  //   icon: <BsIcons.BsPersonFill/>
  // },
  // {
  //   title: 'Professor 3',
  //   path: '../../professorDetalhes',
  //   icon: <BsIcons.BsPersonFill/>
  // },
]

export const SidebarData = [
  {
    title: 'Detalhes',
    path: '../../MateriaDetalhes',
    icon: <BiIcons.BiSolidDetail/>,
    cName: 'nav-text'
  },
  {
    title: 'Indicadores',
    path: '../../MateriaIndicadores',
    icon: <FaIcons.FaDatabase/>,
    cName: 'nav-text'
  },
  {
    title: 'Professores',
    path: '#',
    icon: <BsIcons.BsPersonFill/>,
    iconClosed: <RiIcons.RiArrowDownSFill/>,
    iconOpened: <RiIcons.RiArrowUpFill/>,
    subNav
  },
  {
    title: 'Material de estudo',
    path: '../../materialEstudo',
    icon: <AiIcons.AiFillBook/>,
    cName: 'nav-text'
  },
]