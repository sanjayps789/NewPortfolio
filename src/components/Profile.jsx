import React from 'react'
import { Button } from 'react-bootstrap'
import image from '../assets/sanjay.png'

function Profile() {
    return (
        <div id='home' style={{ paddingTop:'200px' }} className='w-100 d-flex align-items-center justify-content-center bg-black '>
            <div style={{width:'90%'}} className="container ">
                <div className="row d-flex align-items-center justify-content-center w-100">
                    <div className="col-lg-6 d-flex align-items-center justify-content-center flex-flex-sm-column-reverse">
                       <div >
                            <h1 style={{ fontSize: '45px' }} className='text-white  fw-bold'>I'm
                                <span   className='  ms-4'>Sanjay PS</span></h1>
                            <h3 className='text-white py-2'>MERN STACK DEVELOPER</h3>
                            <div className="d-flex justify-content-start   align-items-center">
                                <Button target='_blank' href='https://drive.google.com/file/d/1ULll-S1hLtFu8RhY8yDeMWlLi7yJblos/view?usp=sharing' variant="light" className='rounded-pill px-3 py-2 fw-medium'>Download CV</Button>
                                <i className="fa-brands fa-github fs-1 ps-lg-5 ps-3"></i>
                                <i className="fa-brands fa-linkedin fs-1 ps-lg-5 ps-3 "></i>
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