import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import ContactsList from './ContactsList/ContactsList';
import Form from './Form/Form';
import Filter from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

formSubmitHandler=(data)=>{
console.log(data);
// const contact = {
//   id: nanoid(),
//   name:data.name,
//   number: data.number,
// }

this.setState(prevState =>({
  contacts: [...prevState.contacts, { id: nanoid(), ...data }], 
}))

};

  render() {
    const { contacts } = this.state;
    return (
      <>
        <h2>Phonebook</h2>
        <Form onSubmit={this.formSubmitHandler}/>
        <ContactsList
          contacts={contacts}
          onDeleteContact={this.deleteContact}
        />
        <Filter />
      </>
    );
  }
}
