import React from 'react';
import styles from './ContactsList.module.css'

const ContactsList = ({ contacts,onDeleteContact }) => (
    <>
    <h2>Contacts</h2>
  <ul className={styles.list}>
    {contacts.map(({id,number,name}) => (
      <li className={styles.item} key={id}>
        <p>{name}:</p>
        <p>{number}</p>
        <button onClick={()=> onDeleteContact(id)}>Delete</button>
      </li>
    ))}
  </ul>

  </>
);

export default ContactsList;
