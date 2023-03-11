import React from 'react'
import  { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const Review = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [feedback, setFeedback] = useState('');
   
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // TODO: Implement feedback submission logic here
      console.log('Submitted feedback:', { name, email, feedback });
      // Reset form
      setName('');
      setEmail('');
      setFeedback('');
    } 

  return (
<>
      <div className="login-background">
<div className="container ">
<div className="row " >
  <div className="col-md-4">
  <br/><br/><br/><br/><br/><br/>
  <h2> Give Your Valuable Feedback </h2>
  <hr/>
  <Form>

<Form.Group className="mb-3" controlId="">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Name" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBascPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="">
    <Form.Label>Your Feedback</Form.Label>
    <Form.Control as="textarea" rows={3}  placeholder="FeedBack" />
  </Form.Group>

 

 
  <Button variant="warning" type="submit">
    Submit your feedback
  </Button>
</Form>
  </div>
  <div className="col-md-8"></div>
</div>
</div>
   </div>
    </>
  );
    
}

export default Review
