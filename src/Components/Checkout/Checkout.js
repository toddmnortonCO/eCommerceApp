import React, {Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import stripe from '../../config';
import axios from 'axios';
import Header from '../Header/Header';
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
  onToken = async(token) => {
    token.card = void 0;

    await axios.post('/api/payment', {token, amount: 100})
          .then(() => {
            alert('Payment Submitted')
          })
          .catch(err => console.log(err))
  }

  getShoppingCart = () => {
    axios
      .get("/api/shoppingCart/")
      .then((res) => this.setState({ stock: res.data }))
      .catch((err) => console.log(err));
  };
   

  render(){
    return (
      <div className="App">
        <Header />
        <StripeCheckout 
          label='Proceed to Checkout'
          token={this.onToken}
          stripeKey={stripe.publicKey}
          amount={100}
          shippingAddress={true}
          billingAddress={true}
          />
      </div>
    );
  }
}

export default Checkout;