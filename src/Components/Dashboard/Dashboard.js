import axios from "axios";
import React, { Component } from "react";
import Header from "../Header/Header";
import { connect } from "react-redux";

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            inventory: [],
            productName: "",
            productDescription: "",
            productPrice: "",
            productReview: ""
        }
    }
  componentDidMount() {
    this.getInvetory();
    if (!this.props.user.email) {
      this.props.history.push("/");
    }
  }

  getInventory = () =>{
      axios.get('/api/inventory/')
      .then(res => this.setState({ inventory: res.data}))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <Header />
        Dashboard
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps)(Dashboard);