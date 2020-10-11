import React from "react"

import { Navbar, Image, Container, Nav, NavDropdown, Button } from "react-bootstrap"

import logo from "../../static/images/zulip-org-logo.svg"

const CustomNavbar = ({ pageInfo }) => {
  console.log(pageInfo)
  return (
    <>
      <Navbar variant="dark" expand="lg">
        <Container>
            <Navbar.Brand href="#">
                <Image src={logo} alt="Zulip Logo" loading="lazy" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                  <NavDropdown title="Features" id="basic-nav-dropdown" renderMenuOnMount={true}>
                      <NavDropdown.Item href="/features">Overview</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">Integrations</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Rest API</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Security</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Solutions" id="basic-nav-dropdown" renderMenuOnMount={true}>
                      <NavDropdown.Item href="/for/open-source/">OS Communities</NavDropdown.Item>
                      <NavDropdown.Item href="/for/companies/">Enterprise</NavDropdown.Item>
                      <NavDropdown.Item href="/for/working-groups-and-communities/">Working Groups</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="/plans">Pricing</Nav.Link>
                  <NavDropdown title="Community" id="basic-nav-dropdown" renderMenuOnMount={true}>
                      <NavDropdown.Item href="/community">Get Involved</NavDropdown.Item>
                      <NavDropdown.Item href="/for/companies/">Enterprise</NavDropdown.Item>
                      <NavDropdown.Item href="/for/working-groups-and-communities/">Working Groups</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="/apps">Apps</Nav.Link>
                </Nav>
                <Button variant="primary">Try Now</Button>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default CustomNavbar
