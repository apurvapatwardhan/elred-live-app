import React, { useEffect, useState } from 'react'
import './Skills.css'
import { BiSolidPencil } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { HOBBY_URL, SKILL_URL, SUB_URL } from '../../../constants';

function Skills() {

  

  const navigate = useNavigate();
  const {skill, hobby, subject} = useSelector(state => state.skills);
  const dispatch = useDispatch();


  return (
    <div className="skills">
        <div className='skills-head'>
            <p>Skills</p>
            <BiSolidPencil onClick={() => {
              navigate("/myskills")
            }}/>
        </div>
      <div className="skills-one">
        <p>I am incredible at these skills/professionally great at</p>
        <div className="skills-skill">{skill.map(sk => {
          return (<div>
            <p>{sk}</p>
            <p className='skill-remove'>x</p>
          </div>)
        })}</div>
      </div>
      <div className="skills-two">
        <p>Hobbies i am passionate about</p>
        <div className="skills-hobby">
        {hobby.map(sk => {
          return (<div>
            <p>{sk}</p>
            <p className='skill-remove'>x</p>
          </div>)
        })}
        </div>
      </div>
      <div className="skills-three">
        <p>My favurite subjects are</p>
        <div className="skills-subject">
        {subject.map(sk => {
          return (<div>
            <p>{sk}</p>
            <p className='skill-remove'>x</p>
          </div>)
        })}
        </div>
      </div>
    </div>
  )
}

export default Skills
