import React,{useState} from 'react'
import { Card, Container, Button, Modal, Form } from 'react-bootstrap';
import {  Link } from 'react-floating-action-button'


const Details = ({tenantsData}) =>{

	 const [show, setShow] = useState(false);
	 const [name, setName] = useState();
	 const [email, setEmail] = useState();
	 const [imageLink, setImageLink] = useState();

	  const handleClose = () => setShow(false);
	  

	const editData = (tenants) => {
		console.log(tenants);
		setShow(true)
		setName(tenants.name)
		setEmail(tenants.email)
		setImageLink(tenants.photo)
	}

	const saveChange = () => {
		setShow(false)
	}

	return(
			<>

				

			      <Modal show={show} onHide={handleClose}>
			        <Modal.Header closeButton>
			          <Modal.Title>
			          	Edit User
			          </Modal.Title>
			        </Modal.Header>
			        <Modal.Body>
			        	<Form>
						  <Form.Group className="mb-3" controlId="formBasicEmail">
						    <Form.Label>Name</Form.Label>
						    <Form.Control type="text" placeholder={name} />
						  </Form.Group>

						  <Form.Group className="mb-3" controlId="formBasicEmail">
						    <Form.Label>Email address</Form.Label>
						    <Form.Control type="email" placeholder={email}/>
						  </Form.Group>

						  <Form.Group className="mb-3" controlId="formBasicEmail">
						    <Form.Label>Image link</Form.Label>
						    <Form.Control type="text" placeholder={imageLink} />
						  </Form.Group>
						</Form>
					</Modal.Body>
			        <Modal.Footer>
			          <Button variant="secondary" onClick={handleClose}>
			            Close
			          </Button>
			          <Button variant="primary" onClick={()=>saveChange()}>
			            Save Changes
			          </Button>
			        </Modal.Footer>
			      </Modal>

				<Container  style={{ display:'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(17.45rem, 1fr))', justifyItems: 'center' }}>
				{
					tenantsData.map((tenants, id)=>{
						return(
								<Card style={{ width: '18rem', marginTop:'30px' }}>
								  <Card.Img variant="top"  src={tenants.photo} />
								  <Card.Body>
								    <Card.Title>{tenants.name}</Card.Title>
								    <Card.Text>
								      {tenants.email}
								    </Card.Text>
								    <Card.Text>
								      {tenants.phone}
								    </Card.Text>
								    <Button variant="primary" onClick={()=>editData(tenants)}>Edit</Button>
								    <Button variant="danger">Remove</Button>
								  </Card.Body>
								</Card>
							)
					})
				}
				
	            <Link href="#"
	                tooltip="Add user link"
	                icon="fas fa-user-plus" 
	                className="fab-item btn btn-link btn-lg text-white"/>
			</Container>

   
				
			</>
		)
}

export default Details