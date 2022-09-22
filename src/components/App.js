import { nanoid } from 'nanoid';
import React, { Component } from 'react';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };
  nameId = nanoid();

  handleInputChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
}
  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      name: '',
    })
  }

  render() {
    return (
      <>
        <h2>Phonebook</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={this.nameId}>Name</label>
          <input
            onChange={this.handleInputChange}
            id={this.nameId}
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <button>Add Contact</button>
        </form>
      </>
    );
  }
}
