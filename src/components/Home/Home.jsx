import React from 'react'
import {BiSolidPencil} from "react-icons/bi"
import "./Home.css"
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Bio from '../Main/Bio/Bio'
import Skills from '../Main/Skills/Skills'

function Home() {

  const {aboutMe, resume, bloodGroup} = useSelector(state => state.bio);
  console.log(aboutMe, bloodGroup)
  return (
    <div className='home'>
      <Bio />
      <Skills />
    </div>
  )
}

export default Home
