import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import stripe from '../../config';
import axios from 'axios';
import Header from '../Header/Header';
import { connect } from "react-redux";
import './Checkout.scss';



class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stock: [],
      productName: "",
      productDescription: "",
      productPrice: "",
      productReview: "",
    }
  }

  componentDidMount() {
    this.getShoppingCart();
    if (!this.props.user.email) {
      this.props.history.push("/");
    }
  }

  onToken = async (token) => {
    token.card = void 0;

    await axios.post('/api/payment', { token, amount: 100 })
      .then(() => {
        alert('Payment Submitted')
      })
      .catch(err => console.log(err))
  }

  getShoppingCart = () => {
    axios
      .get(`/api/shoppingCart/`)
      .then((res) => this.setState({ stock: res.data }))
      .catch((err) => console.log(err));
  };

  removeItem = (product_id) => {
    console.log(product_id)
    axios
      .delete(`/api/shoppingCart/${product_id}`)
      .then(() => { this.getShoppingCart() })
      .catch((err) => console.log(err))
  }

  render() {
    console.log(this.state.stock);
    const mappedShoppingCart = this.state.stock.map((shoppingCart) => (
      <div className="inventory-container">
        <p className="item">{shoppingCart.product_name}</p>
        <p>{shoppingCart.product_price}</p>
        <button
          className='button'
          onClick={() => this.removeItem(shoppingCart.product_id)}
        >
          Remove from Cart
        </button>
      </div>
    ));

    return (
      <div className="App">
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <Header />
        <section>
          <div>{mappedShoppingCart}</div>
        </section>
        <StripeCheckout
          label='Donate $1'
          token={this.onToken}
          stripeKey={stripe.public_key}
          amount={100}
        />
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps)(Checkout);