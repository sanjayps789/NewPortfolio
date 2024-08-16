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
    },[])
    return (
        <div id='works' style={{minHeight:'80vh'}} className='w-100 d-flex align-items-center justify-content-center bg-black flex-column'>
            <h1 className='text-white fw-bold pb-4'>My Works</h1>
            <div style={{ width: '90%' }} className="container">
                <div className="row py-5 mb-5">
                   { workData.length > 0?
                   workData.map((item,index)=>(
                    <div key={index} className="col-lg-3 col-md-4 d-flex align-items-center justify-content-center">
                    <Card  className=' mb-5 p-2 py-4 rounded-4' 
                    style={{
                         width: '20rem',
                          height: '22rem',
                          backgroundColor:'#212121'}}>
                        <Card.Img style={{height:'150px'}} className='img-fluid rounded' variant="top" src={item.image} />
                        <Card.Body>
                            <Card.Title style={{color:'white'}} className='fw-bold'>{item?.title}</Card.Title>
                            <Card.Text style={{color:'white'}}>{item?.description.slice(0,50)}...</Card.Text>
                            <div className='d-flex align-items-center justify-content-between'>
                                <Link target="_blank" to={item?.github}><i  className="fa-brands fa-github fs-3"></i></Link>
                                <Link target="_blank" to={item?.url}><i className="fa-solid fa-link fs-3 ps-3"></i></Link>
                            </div>
                            <i className="fa-solid "></i>
                        </Card.Body>
                    </Card>
                </div>
                   )):<div><h1>No Data Found</h1></div> }
                </div>
            </div>
        </div>
    )
}

export default Works