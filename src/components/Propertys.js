import React from 'react'
import List from '../JsonFile'
import NavBar from './Navbar'
import { Link } from "react-router-dom"
import { Button, Card } from 'react-bootstrap';

 const PropertyList = ({showDetail}) => {

	return(
		<>
			<NavBar/>
			<div style={{ display:'grid', gridTemplateColumns:'auto auto auto auto'}}>
				{
					List.map((list, id)=>{
						return(
								<Card style={{ width: '18rem', marginTop:'30px' }}>
								  <Card.Img variant="top"  src={list.photos} />
								  <Card.Body>
								    <Card.Title>{list.property_name}</Card.Title>
								    <Card.Text>
								      {list.address}
								    </Card.Text>
								    <Link to='/detail'>
								    	<Button variant="primary" onClick={()=>showDetail(list.tenants)}>Tenants</Button>
								  	</Link>
								  </Card.Body>
								</Card>
							)
					})
				}
			</div>
		</>
	)
}


export default PropertyList