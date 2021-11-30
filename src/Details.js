import React from 'react'
import { Table, ButtonGroup, Button } from 'react-bootstrap';


const Details = ({tenantsData}) =>{

	return(
			<>
				<Table striped bordered hover style={{marginTop:'30px'}}>
				  <thead>
				    <tr>
				      <th>Name</th>
				      <th>Email</th>
				      <th>Phone No</th>
				      <th>Actions</th>
				    </tr>
				  </thead>

				  {
				  	tenantsData.map(tenants=>{
				  		return(
				  			<tbody>
							    <tr>
							      <td>{tenants.name}</td>
							      <td>{tenants.email}</td>
							      <td>{tenants.phone}</td>
							      <td>
							      		<ButtonGroup aria-label="Basic example">
										  <Button variant="primary">Add</Button>
										  <Button variant="info">Edit</Button>
										  <Button variant="danger">Remove</Button>
										</ButtonGroup>
									</td>
							    </tr>
							  </tbody>
				  		)
				  	})
				  }
				</Table>
			</>
		)
}

export default Details