import React from 'react'
import Loader1 from './Loader1'

function About() {
    return (
        <div id='about' style={{ height: '90vh' }} className='bg-black d-flex align-items-center justify-content-center w-100'>

            <div style={{width:'90%'}} className='container'>
                <h1 className='text-white text-center fw-bold py-3'>About Me</h1>
                <div className="row d-flex align-items-center justify-content-center">
                    <div className="col-lg-4">
                       <div className='d-flex align-items-center justify-content-center'> <Loader1/></div>
                    </div>
                    <div className="col-lg-6">
                    <p style={{textAlign:'justify', fontSize:'17px',lineHeight:'2',width:'90%'}} className='text-white text-start w-100'>Hello! I'm Sanjay PS, a passionate MERN stack developer with a knack for turning ideas into reality. With a strong foundation in web development, including expertise in React, MongoDB, Node.js, and Express.js, I love crafting solutions that are not just functional but also engaging and user-friendly. My journey has been shaped by a desire to learn, innovate, and continuously evolve in the fast-paced world of technology.</p>
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default About