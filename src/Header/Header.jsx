import React from 'react';
import './Header.scss';
import {ReactComponent as Logo} from '../images/logo.svg';
import ProfilePic from '../images/image-avatar.png';
import Cart from '../images/icon-cart.svg';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CartDropDown from '../CartDropDown/CartDropDown';

const Header = ({productData, activeImg}) => {
	const counter = useSelector((state) => state.appReducer.CARTCOUNTER);

	return (
    <header>
      <Navbar expand="lg">
        <Container>
          <Link to="/" className="navbar-brand">
            <Logo />
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 nav-left"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link to="/" className="nav-link">
                Collection
              </Link>
              <Link to="/" className="nav-link">
                Men
              </Link>
              <Link to="/" className="nav-link">
                Women
              </Link>
              <Link to="/" className="nav-link">
                About
              </Link>
              <Link to="/" className="nav-link">
                Contact
              </Link>
            </Nav>
          </Navbar.Collapse>
            <div className="navbar-right">
							{counter > 0 ?
								<span className="cart-counter">{counter}</span>
								: ""
							}
              <NavDropdown
                className="cart"
                title={<img src={Cart} alt="cart" />}
                id="navbarScrollingDropdown"
              >
                <div className="dropdown-heading">Cart</div>
                <NavDropdown.Divider />
                {counter === 0 ? (
                  <div className="empty-cart">Your cart is empty</div>
                ) : (
                  <CartDropDown productData={productData} activeImg={activeImg}/>
                )}
              </NavDropdown>
              <Link to="/" className="nav-link">
                <img src={ProfilePic} className="user-img" alt="user" />
              </Link>
            </div>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
