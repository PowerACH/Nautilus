import React from 'react';
import Logo from '../assets/global/nautilus-logo-sprite@2x.png'
import Navbar from 'bootstrap';
import Nav from 'bootstrap';

export default class Navbars extends React.Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
            // <section>
            //     <nav className = "navbar">
            //             <ul>
            //                 <li className = "navlogo" href="#">
            //                         <img src= {Logo} />

            //                 </li>
            //                 <li>Issues</li>
            //                 <li>Topics</li>
            //                 <li>Blog</li>
            //                 <li>Newsletter</li>
            //             </ul>
            //     </nav>
            // </section>
        )
    }
}