import Button from 'react-bootstrap/Button';
import {registerAcademyOwner} from "../services/Academy-helper";
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function AcademyOwnerRegisteration()
{  const navigate= useNavigate();
    const[owner,setOwner]=useState({
        ownerName:"",
        mobileNo:"",
        email:"",
        ownerPhoto:"",
        ownerAddress:"",
        aadharNo:"",
        regDate:"",
        gender:""
    });
 
  
    const handle = (e) => {
        const newowner={...owner};
        newowner[e.target.id]=e.target.value;
        setOwner(newowner);
        // console.log(owner);
    
    }
    function submit(e){
      e.preventDefault();
     console.log(owner);
     registerAcademyOwner(owner).then((res)=>{
          //console.log(res);
         //  alert("Player Registered Successfully");
          navigate('/academyRegister');
         
      }).catch(err=>{
          console.log(err);
      })
  }
   
   
    return(
      <div className='login-background'>
       
<div className='container'>
    <div className='row'>
    
        <div className='col-md-8'>
            </div>
            <div className='col-md-4' style={{color:"black", height:"800px",width:"800px",backgroundColor:"white", borderRadius:"20px", marginTop:"100px",
        opacity:"0.8" }}>
            <Form  onSubmit={(e)=>{submit(e)}}>
        {/*  */}

    {/* <Form.Group className="mb-3" >
        <Form.Label>Player Id</Form.Label>
        <Form.Control type="number" placeholder="id" value={player.id} id="id" onChange={(e)=>handle(e)} />
      </Form.Group> */}
      <br/><br/>
<h2>Academy Owner Registeration</h2>
<hr/>
<br/>

    <Form.Group className="mb-3">
        <Form.Label className='field'>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" value={owner.ownerName} id="ownerName" onChange={(e)=>handle(e)} />
      </Form.Group>


      <Form.Group className="mb-3">
        <Form.Label className='field'>Mobile No.</Form.Label>
        <Form.Control type="number" placeholder="mobileNo" value={owner.mobileNo} id="mobileNo"  onChange={(e)=>handle(e)} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label className='field'>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"   id="email" value={owner.email} onChange={(e)=>handle(e)} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label className='field'>Your Photo</Form.Label>
        <Form.Control type="file" placeholder="ownerPhoto" value={owner.ownerPhoto} id="ownerPhoto"  onChange={(e)=>handle(e)} />
      </Form.Group>

     

      <Form.Group className="mb-3" >
        <Form.Label className='field'>Aadhar No.</Form.Label>
        <Form.Control type="number" placeholder="aadharNo" value={owner.aadharNo} id="aadharNo" onChange={(e)=>handle(e)} />
      </Form.Group>

      
      <Form.Group className="mb-3" >
        <Form.Label className='field'>Registeration Date</Form.Label>
        <Form.Control type="date" placeholder="regDate" value={owner.regDate} id="regDate" onChange={(e)=>handle(e)} />
      </Form.Group>

      


      <Form.Group className="mb-3" >
        <Form.Label className='field'>Gender</Form.Label>
        <Form.Control type="text" placeholder="gender" value={owner.gender} id="gender" onChange={(e)=>handle(e)} />
      </Form.Group>



      
      <Button variant="warning" type="submit" style={{fontSize:"24px", fontWeight:700}}>
        Register
      </Button>
    </Form>
   

            </div>

    </div>

</div>

   

</div>
    )
}
export default AcademyOwnerRegisteration;