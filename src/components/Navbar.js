import React from 'react'
import { Navbar, Container } from 'react-bootstrap';


const NavBar = () => {
	return(
			<>
				<Navbar bg="primary" variant="dark">
				    <Container>
				    	<Navbar.Brand href="#home"> Real-Estate Properties</Navbar.Brand>
				    </Container>
			  	</Navbar>
			</>
		)
}

export default NavBar