import Button from 'react-bootstrap/Button';
//import {registerPlayer} from "../services/player-service";
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {registerPlayer} from "../services/Player-helper";
import { useNavigate } from 'react-router-dom';
import '../App.css';

function PlayerRegisteration()
{
    const[player,setPlayer]=useState({
        name:"",
        email:"",
        mobileNo:"",
        aadharNo:"",
        gender:"",
    });
   const navigate=useNavigate();
  
    const handle = (e) => {
        const newplayer={...player};
        newplayer[e.target.id]=e.target.value;
        setPlayer(newplayer);
       // console.log(player);
    
    }
   
    function submit(e){
        e.preventDefault();
       console.log(player);
        registerPlayer(player).then((res)=>{
            //console.log(res);
           //  alert("Player Registered Successfully");
            navigate('/academy');
           
        }).catch(err=>{
            console.log(err);
        })
    }
    return(
        <div className='login-background'>
        <div className="container login-background">
            <div className="row">
                <div className="col-md-8">

                </div>
                <div className="col-md-4 " style={{color:"black", height:"600px",width:"800px",backgroundColor:"white", borderRadius:"20px", marginTop:"100px",
        opacity:"0.8" }}>
            <br/>
            <br/>
            <h2>Player Registeration</h2>
            <hr/>
                <Form  onSubmit={(e)=>{submit(e)}}>
    
    {/* onSubmit={(e)=>{submit(e)}} */}
    {/* <Form.Group className="mb-3" >
        <Form.Label>Player Id</Form.Label>
        <Form.Control type="number" placeholder="id" value={player.id} id="id" onChange={(e)=>handle(e)} />
      </Form.Group> */}


    <Form.Group className="mb-3">
        <Form.Label className='field'>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" value={player.name} id="name" onChange={(e)=>handle(e)} />
      </Form.Group>


      


      <Form.Group className="mb-3">
        <Form.Label className='field'>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"   id="email" value={player.email} onChange={(e)=>handle(e)} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label className='field'>Mobile No.</Form.Label>
        <Form.Control type="number" placeholder="mobileNo" value={player.mobileNo} id="mobileNo"  onChange={(e)=>handle(e)} />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label className='field'>Aadhar No.</Form.Label>
        <Form.Control type="number" placeholder="aadharNo" value={player.aadharNo} id="aadharNo" onChange={(e)=>handle(e)} />
      </Form.Group>


      <Form.Group className="mb-3" >
        <Form.Label className='field'>Gender</Form.Label>
        <Form.Control type="text" placeholder="gender" value={player.gender} id="gender" onChange={(e)=>handle(e)} />
      </Form.Group>


      {/* <NavLink to="/academy"></NavLink> */}
  
    <Button variant="warning" type="submit" style={{fontSize:"24px", fontWeight:500}}> 
        Register
      </Button> 
    </Form>
   

                </div>
            </div>
            </div>
       </div>
    )
}
export default PlayerRegisteration;