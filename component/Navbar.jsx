

function Navbar1(){

    return (
<header className="App-header">
        <navbar fixed="top" >
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="light">
  <Container>
  <Navbar.Brand href="#home">Sign Language.</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#Login">Log-In</Nav.Link>
      <Nav.Link href="#Learn">Learn</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Request</Nav.Link>
      <Nav.Link eventKey={2} href="#Home">
       Home
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
</navbar>
</header> 
    );
}


exoprt default Navbar1;