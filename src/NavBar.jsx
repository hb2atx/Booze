import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, NavItem, Navbar } from "reactstrap";
import "./NavBar.css";

function NavBar({ numSnacks, numDrinks }) {
  return (
    <div>
      <Navbar expand="md">
        <NavLink to="/" className="navbar-brand">
          Snack or Booze
        </NavLink>

        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink to="/snacks">Snacks ({numSnacks})</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/drinks">Drinks ({numDrinks})</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;