import React, {Component} from 'react';


class Form extends Component {
    constructor() {
      super();
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(event) {
      event.preventDefault();
      const data = new FormData(event.target);
  
      fetch('/api/form-submit-url', {
        method: 'POST',
        body: data,
      });
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Enter Your Name</label>
          <input id="name" name="name" type="text" />
  
          <label htmlFor="email">Enter your email</label>
          <input id="email" name="email" type="email" />
  
          <label htmlFor="birthdate">Enter your birth date</label>
          <input id="birthdate" name="birthdate" type="text" />
  
          <button>Send data!</button>
        </form>
      );
    }
  }

  export default Form;