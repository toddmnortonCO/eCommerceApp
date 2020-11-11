import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

class Header extends Component {
  render() {
    return (
      <div>
        <section className="navbar">
            <div className='ul'>
            <Link className='link' img="fa fa-home" to='dashboard'> Home </Link>
            <Link className='link' img="fa fa-home" to="checkout"> Checkout </Link>
            </div>
          <h3 className="h3">Todd's Computer Emporium</h3>
          <button className="logout-button">Log Out</button>
        </section>
      </div>
    );
  }
}

export default Header;
