import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      number: '',
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    this.props.addContact(name, number);
    this.setState({ name: '', number: '' });
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    if (name === 'number') {
      const isValidPhoneNumber = value.match(/^[\d\s()-]*$/);
      if (!isValidPhoneNumber) return;
    }
    this.setState({ [name]: value });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className="contact-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          pattern="[A-Za-zА-Яа-я]+"
          title="Name may contain only letters"
          value={name}
          onChange={this.handleInputChange}
          required
        />

        <input
          type="tel"
          name="number"
          pattern="[0-9]+"
          title="Phone number must be digits"
          value={number}
          onChange={this.handleInputChange}
          required
        />

        <button type="submit">Add contact</button>
      </form>
    );
  }
}
// jopa
ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default ContactForm;
