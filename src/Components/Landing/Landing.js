import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getUser } from "../../redux/reducer";
import "./Landing.scss";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleRegister = (e) => {
    e.preventDefault();
    const { email, password } = this.state
      axios
        .post("/api/register", { email, password })
        .then((res) => {
          this.props.getUser(res.data);
          this.props.history.push("/Dashboard");
        })
        .catch((err) => console.log(err));
    } 
  
  handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = this.state
      axios
      .post("/api/login", { email, password })
      .then((res) => {
        this.props.getUser(res.data);
        this.props.history.push("/Dashboard");
      })
      .catch((err) => console.log(err));
  };

  render() {
      return (
      <div className="body" >
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <h1>Todd's Computer Emporium!</h1>
        <br />
        <h5 className='h5'>Please Login to Shop</h5>
        <input
          value={this.state.email}
          name='email'
          placeholder="Email"
          autocomplete="off"
          onChange={(e) => this.handleInput(e)}
        />
        <br />
                <input
          value={this.state.password}
          name="password"
          placeholder="Password"
          className="password-input"
          autocomplete="off"
          onChange={(e) => this.handleInput(e)}
        />        
        <br />
        <br />
        <button className='login-button' onClick={this.handleLogin}>Login</button>
        <br />
        <br />
        <button className='register-button' onClick={this.handleRegister}>Register</button>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps, { getUser })(Landing);
