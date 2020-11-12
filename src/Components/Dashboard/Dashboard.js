import axios from "axios";
import React, { Component } from "react";
import Header from "../Header/Header";
import { connect } from "react-redux";

class Dashboard extends Component {
  constructor(props) {
    super(props);
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
  handleInput = (e, val) => {
    console.log(e.target)
    this.setState({[e.target.name]: val})
  }

  getInventory = () => {
    axios
      .get("/api/inventory/")
      .then((res) => this.setState({ stock: res.data }))
      .catch((err) => console.log(err));
  };

  addToCart = (inventory) => {
    axios
      .post("/api/shoppingCart/", {
        product_id: inventory.product_id,
        product_name: inventory.product_name,
        product_price: inventory.product_price,
      })
      .then((res) => this.setState({ shopping_cart: res.data }))
      .catch((err) => console.log(err));
  };

  addReview = (product_id) => {
    axios
      .put(`/api/inventory/${product_id}`, {
        product_review: this.state.productReview,
      })
      .then(() => {
        this.getInventory();
      })
      .catch((err) => console.log(err));
  };

  render() {
    console.log(this.state.stock);
    const mappedInventory = this.state.stock.map((inventory) => (
      <div className="inventory-container">
        <p className="item">{inventory.product_name}</p>
        <p>{inventory.product_description}</p>
        <p>{inventory.product_review}</p>
        <p>{inventory.product_price}</p>
        <input 
        placeholder="Enter Review"
        onChange={(e) => this.handleInput(e, e.target.value)}
        value={this.props.product_review}
        name="productReview"
        />
        <button
          className="button"
          onClick={() => this.addReview(inventory.product_id)}
        >Add Review
        </button> <br />
        <button
          className="button"
          onClick={() => this.addToCart(inventory)}
        >
          Add To Cart
        </button>
        <br />
      </div>
    ));

    return (
      <div>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <Header />
        <section>
          <div>{mappedInventory}</div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps)(Dashboard);
