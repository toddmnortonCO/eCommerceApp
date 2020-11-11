import axios from "axios";
import React, { Component } from "react";
import Header from "../Header/Header";
import { connect } from "react-redux";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      stock: [],
      productName: "",
      productDescription: "",
      productPrice: "",
      productReview: "",
    };
  }
  componentDidMount() {
    this.getInventory();
    if (!this.props.user.email) {
      this.props.history.push("/");
    }
  }

  getInventory = () => {
    axios
      .get("/api/inventory/")
      .then((res) => this.setState({ stock: res.data }))
      .catch((err) => console.log(err));
  };

  addToCart = () => {
    axios
      .post("/api/shoppingCart/")
      .then((res) => this.setState({ shopping_cart: res.data }))
      .catch((err) => console.log(err));
  };

  render() {
    console.log(this.state.stock)
    const mappedInventory = this.state.stock.map((inventory) => (
      <div className="inventory-container">
        <p className="item">{inventory.product_name}</p>
        <p>{inventory.product_description}</p>
        <p>{inventory.product_review}</p>
        <p>{inventory.product_price}</p>
        <button className='button' onClick={() => this.addToCart(inventory.product_id)}>
          Add To Cart
        </button>
        <br />
      </div>
    ));

    return (
      <div>
        <Header />
        <section>
          <div>{mappedInventory}</div>
        </section>
        <section>Render shopping cart here</section>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps)(Dashboard);
