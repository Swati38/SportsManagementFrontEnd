import {React, useState} from 'react'
import {Button, Form} from "react-bootstrap"
import { NavLink } from 'react-router-dom';
const Login = () => {
    const [isButtonClicked, setIsButtonClicked] = useState(false);

    const handleButtonClick = () => {
      setIsButtonClicked(true);
    }
  return (
    <div className='login-background'>
    <div className='container'>
        <div className='row'>
            <div className='col-md-8 '>
                </div>
                <div className='col-md-4 ' style={{color:"black", height:"600px",width:"800px",backgroundColor:"white", borderRadius:"20px", marginTop:"100px",
        opacity:"0.8" }}>
<br></br>
<h2 style={{textAlign:"center"}}>Login</h2>
<hr/>
                <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{fontSize:"26px",fontWeight:600}} >Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  style={{height:"50px",fontSize:"20px", fontWeight:500}}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label style={{fontSize:"26px",fontWeight:600}}>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" style={{height:"50px",fontSize:"20px", fontWeight:500}} />
      </Form.Group>
      
      <Button variant="success" type="submit">
        Login
      </Button> &nbsp;&nbsp;
      <span>Not Registered ?</span>
      <br/><br/>

      <div>
{!isButtonClicked && (
  <Button variant='success' onClick={handleButtonClick}>Register</Button>
)}
{isButtonClicked && (
  <div>   
   <NavLink to="/player"><Button variant="success" style={{marginRight:"50px"}}>As Player</Button> </NavLink>
   <NavLink to="/owner"> <Button variant="success">As Academy</Button></NavLink>
  </div>
)}
</div>
    </Form>
                </div>
               
        </div>
    </div>

  
    </div>
  )
}

export default Login

