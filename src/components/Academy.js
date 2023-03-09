import {React,useState,useEffect} from 'react'
import AppHeader from './AppHeader'
import Carousel from 'react-slick';
import { Button ,ListGroup} from 'react-bootstrap';
import '../App.css';


const Academy = () => {
    const [academy, setAcademy] = useState([]);
    const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('/api/images')
      .then(response => response.json())
      .then(data => setImages(data))
      .catch(error => console.error(error));
  }, []);

  

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div>
      <AppHeader/>
      <div className='container'>
        <div className='row'>
            <div className='col-md-6'>
                {academy.name}
                <h2>Academy name</h2>
                <hr/>
                <Carousel {...settings}>
      {images.map(image => (
        <div key={image}>
          <img src={image} alt="carousel" />
        </div>
      ))
      }
    </Carousel>
    <hr/>



        <div className='row'>
        <ListGroup as="ol" >
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start "
      >
        <div className="ms-2 me-auto">
          <div className=" content" >Description</div>
          {academy.description}
        </div>
        
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="content">Location</div>
          {academy.location}
        </div>
        
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className=" content">Contact Details</div>
          {academy.contactDetails}
        </div>       
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className=" content">Address</div>
          {academy.address}
        </div>       
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className=" content">City</div>
          {academy.city}
        </div>       
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className=" content">Number of sports available are</div>
          {academy.noOfSports}
        </div>       
      </ListGroup.Item>

    </ListGroup>
        </div>

            </div>
            <div className='col-md-6'>
                <div className='row'>

                    <div className='col-md-6' ><Button variant="success">Book Now</Button> </div>
                    <div className='col-md-6'><Button variant="success">Show Reviews</Button></div>
                </div>
                
                
                </div>
        </div>
      </div>

    </div>
  )
}

export default Academy


