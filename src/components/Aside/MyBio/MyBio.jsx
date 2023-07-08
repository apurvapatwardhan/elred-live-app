import React from 'react'
import { BiSolidFilePdf } from 'react-icons/bi'
import { RiDeleteBinFill, RiGalleryFill } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import { setAboutMe, setBloodGroup, setResume } from '../../../redux/Slices/BioSlice'
import { toast } from 'react-hot-toast'
import "./MyBio.css"
import { useNavigate } from 'react-router-dom'

function MyBio() {
  const bloodGroups = [
    'A+(Positive)',
    'B+(Positive)',
    'O+(Positive)',
    'A-(Negative)',
    'B-(Negative)',
    'O-(Negative)',
  ]

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {aboutMe, resume, bloodGroup} = useSelector(state => state.bio);


  //handlers
  const bloodGroupHandler = (e) => {
    // console.log(e);
    dispatch(setBloodGroup(e.target.value))
  }

  const aboutMeHandler =(e) => {
    // console.log(e.target.value)
    const size = e.target.value.length;
    if(size < 3 || size > 500) {
      toast.error('Chars should be less than 500 and more than 3')
    }
    if(size > 500) {
      return 
    }
    dispatch(setAboutMe(e.target.value))
  }

  const resumeHandler =(e) => {
    console.log(e.target.files[0]);
    const size = parseInt((e.target.files[0].size) / (1024 * 1024));
    if(size <= 5) {
      dispatch(setResume({fileName:e.target.files[0].name, file:e.target.files[0]}));
    }
    else {
      toast.error('File size should be less than 5MB')
    }
  }

  const showResume = resume.file != null;
  const saveEnabled = (aboutMe.length > 2 && aboutMe.length <= 500) && (bloodGroups.includes(bloodGroup)) && (resume.file);

  console.log(aboutMe, resume, bloodGroup)

  return (
    <div className="my-bio">
      <div className="home-bio ">
        <p onClick={() => navigate(-1)}>{'<'}</p>
        <p>My Bio</p>
      </div>
      <div className="mybio-about">
        <p>Write Something about yourself</p>
        <textarea onChange={aboutMeHandler}/>
        <span>3/500</span>
      </div>
      {
        showResume ? (<div className="mybio-resume">
        <div className="mybio-resume-preview">
          <img src="" alt="resume" />
        </div>
        <div className="mybio-resume-text">
          <div className="mybio-resume-left">
            <BiSolidFilePdf />
            <p>My Resume</p>
          </div>
          <div className="mybio-resume-right">
            <RiDeleteBinFill />
          </div>
        </div>
      </div>) : (
        <div className='mybio-no-resume'>
          <div><RiGalleryFill /></div>
          <p>Upload Resume</p>
          <input type='file' accept='application/pdf' onChange={resumeHandler}/>
        </div>
      )
      }
      <div className="mybio-bg">
        <p>Blood Group</p>
        <select onChange={bloodGroupHandler}>
          <option value={''}>Select a blood group</option>
          {bloodGroups.map((bg) => {
            return <option value={bg}>{bg}</option>
          })}
        </select>
      </div>
      <div className="mybio-save">
        {
          saveEnabled ? (<button onClick={() => navigate("/")} className='mybio-save-enable'>Save</button>) : (null)
        }
      </div>
    </div>
  )
}

export default MyBio
