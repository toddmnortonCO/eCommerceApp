import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { clearUser } from "../../redux/reducer";
import "./Header.scss";

const Header = props => {

  const logout = () => {
    props.clearUser();
    props.history.push('/');      
  };

    return (
      <div>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <section className="navbar"
        position='fixed'>
          <div className="ul">
          <span title="Home">
            <Link className="link" to="dashboard">
              <img
              className="image"
                src="data:image/jpeg;base64,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"
                alt="Home"
              ></img>
            </Link>
            </span>
            {/* <span>
              <Link className='link' to='customerservice'>Customer Service</Link>
            </span> */}
            <span title="Checkout">
            <Link className="link" img="fa fa-home" to="checkout">
              <img
              className="image"
              onMouseOver="Checkout"
              src="https://thumbs.dreamstime.com/b/money-bag-sign-icon-dark-background-money-bag-sign-icon-dark-background-simple-vector-icon-116960213.jpg"
                alt="Checkout"
                />
            </Link>
            </span>
          </div>
          <h3 className="h3">Todd's Computer Emporium</h3>
          <button className="logout-button" onClick={logout}>Log Out</button>
        </section>
      </div>
    );
  }

const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps, { clearUser })(withRouter(Header));
