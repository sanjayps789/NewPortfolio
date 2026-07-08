import React, { useEffect, useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import works from '../works.js'
import { Link } from 'react-router-dom'
function Works() {
    const [workData, setWorkData] = useState(works)

    const handleData = () => {
        setWorkData(works)
    }

    useEffect(() => {
        handleData()
    }, [])
    return (
        <div id='works' style={{ minHeight: '80vh' }} className='w-100 d-flex align-items-center justify-content-center bg-black flex-column'>
            <h1 className='text-white fw-bold pb-4'>My Works</h1>
            <div style={{ width: '90%' }} className="container">
                <div className="row g-4 py-5">
                    {workData.length > 0 ? (
                        workData.map((item) => (
                            <div key={item.id} className="col-lg-4 col-md-6">
                                <div className="project-card">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="project-image"
                                    />

                                    <div className="project-overlay">

                                        <h4>{item.title}</h4>

                                        <p>
                                            {item.description.length > 120
                                                ? item.description.slice(0, 120) + "..."
                                                : item.description}
                                        </p>

                                        {item.url && (
                                            <Link
                                                to={item.url}
                                                target="_blank"
                                                title="Visit Website"
                                                rel="noreferrer"
                                                className="visit-btn"
                                            >
                                                Visit Website
                                                <i className="fa-solid fa-arrow-up-right-from-square ms-2"></i>
                                            </Link>
                                        )}

                                    </div>

                                </div>
                            </div>
                        ))
                    ) : (
                        <h2 className="text-light text-center">No Projects Found</h2>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Works