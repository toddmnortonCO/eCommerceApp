import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getUser } from "../../redux/reducer";
import "./Landing.scss";

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  handleRegister = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    axios
      .post("/api/register", { email, password })
      .then((res) => {
        this.props.getUser(res.data);
        this.props.history.push("/dashboard");
      })
      .catch((err) => console.log(err));
  };

  handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    axios
      .post("/api/login", { email, password })
      .then((res) => {
        this.props.getUser(res.data);
        this.props.history.push("/dashboard");
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
    <div>
      Hello this is the landing page
    </div>
    );
  }
}

const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps, { getUser })(Landing);
