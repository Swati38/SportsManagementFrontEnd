import {React,useState} from 'react'
import AppHeader from './AppHeader'
import {Form,Button,ButtonGroup,Dropdown,Card} from 'react-bootstrap';
import bg from "../images/bg2.jpg"

const CityBasedAcademy = () => {
    const [query, setQuery] = useState('');
    const[academy,setAcademy]=useState([]);



    const handleChange = event => {
      setQuery(event.target.value);
    };
  
    const handleSubmit = event => {
      event.preventDefault();
      //onSearch(query);
    };
  return (
    <div>
      <AppHeader/>
<br></br>
<div className='Container'>
    <div className="row">
        <div className="col-md-8">

        <Form onSubmit={handleSubmit}>

<Form.Group className="mb-3" controlId="">
   
   <Form.Control type="text" placeholder="Search by Academy Name" value={query} onChange={handleChange} style={{height:"50px",fontSize:"24px",marginLeft:"50px",width:"60%"}}/>
   <br></br>
   <Button variant="success" 
style={{marginLeft:"20%" ,paddingLeft:"60px",paddingRight:"60px",fontSize:"20px", fontWeight:500,color:"white"}}>
   Search
 </Button>
 </Form.Group>

</Form>
        </div>
        <div className="col-md-4">
       
    <Dropdown as={ButtonGroup}>
      <Button variant="outline-success">Available Sports</Button>

      <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Cricket</Dropdown.Item>
        <Dropdown.Item href="#/action-2">FootBall</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Badminton</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Table Tennis</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        </div>
    </div>
</div>


    
{
    academy.map(academy=>(
        <Card style={{ width: '18rem' }}>
<Card.Img variant="top" src={academy.photo} />
      <Card.Body>
        <Card.Title>{academy.name}</Card.Title>
        <Card.Text>
         {academy.description}
        </Card.Text>
        <Button variant="primary">Show Academy</Button>
      </Card.Body>
      </Card>
    ))
}
      </div>
  )
}

export default CityBasedAcademy

