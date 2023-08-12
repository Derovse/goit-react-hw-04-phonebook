import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    addContact(name, number);
    setName('');
    setNumber('');
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    if (name === 'number') {
      const isValidPhoneNumber = value.match(/^[\d\s()-]*$/);
      if (!isValidPhoneNumber) return;
    }
    if (name === 'name') {
      const isValidName = value.match(/[A-Za-zА-Яа-я]+/);
      if (!isValidName) return;
    }
    if (name === 'number') setNumber(value);
    if (name === 'name') setName(value);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        pattern="[A-Za-zА-Яа-я]+"
        title="Name may contain only letters"
        value={name}
        onChange={handleInputChange}
        required
      />

      <input
        type="tel"
        name="number"
        pattern="[0-9]+"
        title="Phone number must be digits"
        value={number}
        onChange={handleInputChange}
        required
      />

      <button type="submit">Add contact</button>
    </form>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default ContactForm;
