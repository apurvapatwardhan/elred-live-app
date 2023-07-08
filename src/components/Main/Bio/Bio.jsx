import React from 'react'
import { BiSolidPencil } from 'react-icons/bi'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'

function Bio() {
    const {aboutMe, resume, bloodGroup} = useSelector(state => state.bio);
  return (
    <>
    <div className='home-bio '>
        <p>{'<'}</p>
        <p>My Bio</p>
      </div>
      <div className='home-aboutme '>
        <div className='home-aboutme-head'>
          <p>About ME</p>
          <NavLink to="/mybio"><p><BiSolidPencil /></p></NavLink>
        </div>
        <div className='home-aboutme-text'>
          <p>{aboutMe.length === 0 ? 'No About me added yet': aboutMe}</p>
        </div>
      </div>
      <div className='home-bg '>
        <p>Blood Group</p>
        <p> {bloodGroup}</p>
      </div>
      <div className='home-resume '>
        <div className='home-resume-left'>
          <img src="https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
          <p>Resume</p>
        </div>
        <div className='home-resume-right'>{'>'}</div>
      </div></>
  )
}

export default Bio
