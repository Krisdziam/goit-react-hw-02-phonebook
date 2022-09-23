import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import ContactsList from './ContactsList/ContactsList';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './App.module.css'

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  formSubmitHandler = data => {
    if (this.isDuplicate(data)) {
      // return alert(`${data.name} already exist`)
      const error = toast.error(`${data.name} already exist`, {
        position: toast.POSITION.TOP_CENTER,
      });
      return error;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), ...data }],
    }));
  };

  filterState = e => {
    const filter = e.target.value;
    this.setState({
      filter: filter,
    });
  };
  filterContactsByName = () => {
    const { contacts, filter } = this.state;
    const normalizeContacts = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeContacts)
    );
  };

  isDuplicate({ name }) {
    const { contacts } = this.state;
    const result = contacts.find(contact => contact.name === name);
    return result;
  }

  render() {
    const filteredContacts = this.filterContactsByName();

    return (
      <div className={styles.container}>
        <h1>Phonebook</h1>
        <Form onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>

        
        <ContactsList
          contacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
        <Filter filter={this.state.filter} filterState={this.filterState} />
        <ToastContainer />
      </div>
    );
  }
}
