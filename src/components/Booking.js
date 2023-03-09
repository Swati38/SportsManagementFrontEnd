import React from 'react'
import AppHeader from './AppHeader'
import '../App.css';
import {Form,Button,Card} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
//import bgImage from './images/bgImage';

const Booking = () => {
    const[academy,setAcademy]=useState([]);
      return (
    <div  >
    <AppHeader/>
   <div className="your-component-class">
   <div className='container'>
    <div className='row'>
        <div className='col-md-4'>
            </div>
            <div className='col-md-8' style={{color:"black", height:"600px",width:"800px",backgroundColor:"white", borderRadius:"20px", marginTop:"100px",
        opacity:"0.8" }}>


            <Form>
                <br></br><br></br>
            <Form.Group className="mb-3" controlId="">
        <Form.Label style={{fontSize:"36px",fontWeight:600}}> Find  <span style={{fontWeight:800, height:"25px",width:"100px",backgroundColor:"green",borderRadius:"16px"}}>Best</span>  Venue Near You !!</Form.Label>
        <Form.Control type="text" placeholder="Enter City" style={{height:"60px",fontSize:"29px"}} />
        <Form.Text className="text-muted" style={{fontSize:"20px",fontWeight:500}}>
         Can search venue based on your location!!!
        </Form.Text>
      </Form.Group>

    
<NavLink to="/findByCity"> <Button variant="success" 
style={{marginLeft:"40%" ,paddingLeft:"60px",paddingRight:"60px",fontSize:"24px", fontWeight:700,color:"black"}}>
        Submit
      </Button></NavLink>
    </Form>

   ;


    <Card>
{academy.map(academy=>(
    <Card.Body>
{academy.city}
</Card.Body>
))}

      
    </Card>

            </div>
            
        </div>


   </div>

  
    </div>
    </div>
    )
 
}


export default Booking
