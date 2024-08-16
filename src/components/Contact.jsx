import React from 'react'

function Contact() {
    return (
        <div id='contact' style={{ height: '80vh' }} className='bg-black w-100'>
            <h1 className='text-white fw-bold py-5 text-center'>Contact</h1>
            <div style={{ width: '90%' }} className='container'>
                <div className="row d-flex align-items-center justify-content-evenly w-100 ">
                    <div className="col-lg-7 d-flex align-items-center justify-content-center">
                       <div>
                            <div className='mb-2'>
                                <i class="fa-solid fa-phone"></i>
                                <span className='ms-2'>+91 9747237282</span>
                            </div>
                            <div >
                                <i class="fa-solid fa-envelope me-2"></i>
                                <span className='ms-2'>sanjayps193@gmail.com</span>
                            </div>
                       </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="pyramid-loader">
                            <div class="wrapper">
                                <span className="side side1"></span>
                                <span className="side side2"></span>
                                <span className="side side3"></span>
                                <span className="side side4"></span>
                                <span className="shadow"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <p className='text-white text-center mt-5'> Sanjayps © 2024. All rights reserved</p>
            </div>
        </div>
    )
}

export default Contact