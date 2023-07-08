import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { HOBBY_URL, SKILL_URL, SUB_URL } from '../../../constants';
import { removeSkills, setHobbies, setSkills, setSubjects } from '../../../redux/Slices/SkillsSlice';
import "./MySkills.css"

function MySkills() {
  const [formData, setFormData] = useState({
    skillData:[],
    hobbyData:[],
    subjectData:[]
  })

  const navigate = useNavigate();
  const test = useSelector(state => state.skills);
  const {skill, hobby, subject} = useSelector(state => state.skills);
  // console.log(useSelector(state => state.skills))
  const dispatch = useDispatch();


  async function fetchData(url, type='', data='') {
    const resp = await fetch(url);
    const output = await resp.json();
    console.log(output)
    setFormData(prevState => {
      return {...prevState, [type] : output.result[0][data]}
    })
  }

  useEffect(() => {
      fetchData(SKILL_URL, 'skillData', 'skills');
      fetchData(HOBBY_URL, 'hobbyData', 'hobbies');
      fetchData(SUB_URL, 'subjectData', 'subjects')
  }, [])
  return (
    <div className='myskill'>
      <div className='myskill-skills'>
        <p>I am incredible at these skills</p>
        <div className='myskill-currskill'>
            {
              skill.map(sk => {
                return (<div onClick={() => dispatch(removeSkills(sk))}>
                  <p>{sk} <span>x</span></p>
                </div>)
              })
            }
        </div>
        <div className='myskill-remskill'>
        {
            formData.skillData.filter(el => {
              return (!skill.includes(el.value))
            }).map(el => {
              return (<div><button onClick={() => dispatch(setSkills(el.value))}>{el.value}</button></div>)
            })
          }
        </div>
      </div>
      <div className='myskill-skills'>
        <p>Hobbies i am passionate about</p>
        <div className='myskill-currskill'>
        {
              hobby.map(sk => {
                return (<div onClick={() => dispatch(removeSkills(sk))}>
                  <p>{sk} <span>x</span></p>
                </div>)
              })
            }
        </div>
        <div className='myskill-remskill'>
        {
            formData.hobbyData.filter(el => {
              return (!hobby.includes(el.value))
            }).map(el => {
            return (<div><button onClick={() => dispatch(setHobbies(el.value))}>{el.value}</button></div>)})
          }
        </div>
      </div>
      <div className='myskill-skills'>
        <p>My favourite subjects</p>
        <div className='myskill-currskill'>
        {
              subject.map(sk => {
                return (<div onClick={() => dispatch(removeSkills(sk))}>
                  <p>{sk} <span>x</span></p>
                </div>)
              })
            }
        </div>
        <div className='myskill-remskill'>
          {
            formData.subjectData.filter(el => {
              return (!subject.includes(el.value))
            }).map(el => {
            return (<div><button onClick={() => dispatch(setSubjects(el.value))}>{el.value}</button></div>)})
          }
        </div>
      </div>
    </div>
  )
}

export default MySkills
