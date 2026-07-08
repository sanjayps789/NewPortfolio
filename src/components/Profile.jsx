import React from 'react'
import { Button } from 'react-bootstrap'
import image from '/assets/sanjay.png'
import { Link } from 'react-router-dom'

function Profile() {
    return (
        <div id='home' style={{ paddingTop: '100px' }} className='w-100 d-flex align-items-center justify-content-center bg-black '>
            <div style={{ width: '90%' }} className="container ">
                <div className="row d-flex align-items-center justify-content-center w-100">
                    <div className="col-lg-6 d-flex align-items-center justify-content-center flex-flex-sm-column-reverse">
                        <div >
                            <h1 style={{ fontSize: '45px' }} className='text-white  fw-bold'>I'm
                                <span className='  ms-4'>Sanjay PS</span></h1>
                            <h3 className='text-white py-2'>MERN STACK DEVELOPER</h3>
                            <div className="d-flex justify-content-start   align-items-center">
                                <Button target='_blank' href='https://drive.google.com/file/d/1ULll-S1hLtFu8RhY8yDeMWlLi7yJblos/view?usp=sharing' variant="light" className='rounded-pill px-3 py-2 fw-medium'>Download CV</Button>
                                <Link to="https://github.com/sanjayps" target="_blank" title='github'><i className="fa-brands fa-github fs-1 ps-lg-5 ps-3"></i></Link>
                                <Link to="https://www.linkedin.com/in/sanjay-ps193" target="_blank" title='linkedin'><i className="fa-brands fa-linkedin fs-1 ps-lg-5 ps-3"></i></Link>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-6 d-flex align-align-items-center justify-content-center">
                        <img style={{ width: '100% ', height: 'auto' }} className="img-fluid rounded-circle " src={image} alt="image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile