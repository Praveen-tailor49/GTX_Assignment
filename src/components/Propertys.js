import React from 'react'
import List from '../JsonFile'
import { Link } from "react-router-dom"
import { Button, Card, Container } from 'react-bootstrap';

 const PropertyList = ({showDetail}) => {

	return(
		<>
			<Container  style={{ display:'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(17.45rem, 1fr))', justifyItems: 'center' }}>
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
			</Container>
		</>
	)
}


export default PropertyList