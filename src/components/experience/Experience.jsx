import React from 'react'
import  {BsFillPatchCheckFill} from 'react-icons/bs'
import './experience.css'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>
      <div className='container experience_container'>
        <div className='experience_frontend'>
          <h3>Frontend Development</h3>
          <div className='experience_content'>
            <article className='experience_details'>
            <BsFillPatchCheckFill  className='experience_details_icon'/>
            <div>
              <h4>HTML5</h4>
              <small className='text-light'>Experienced</small></div>
            </article>
            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details_icon'/>
            <div>
              <h4>CSS3</h4>
             <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details_icon'/>
            <div>
              <h4>JavaScript</h4>
             <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details_icon'/>
            <div>
              <h4>React</h4>
             <small className='text-light'>Experienced</small>
            </div>
            </article>
          </div>
        </div>
        <div className='experience_backend'>
          <h3>Backend Development</h3>
          <div className='experience_content'>
            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details_icon'/>
            <div>
              <h4>Node.js</h4>
             <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details_icon'/>
            <div>
              <h4>Go</h4>
             <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details_icon'/>
            <div>
              <h4>Kotlin</h4>
             <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details_icon'/>
            <div>
              <h4>MySQL</h4>
             <small className='text-light'>Experienced</small>
            </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience