import React, { Component } from 'react'
import styles from './Form.module.css'

export default class Form extends Component {
    state={
        name: '',
        number: '',
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });

 
    }

    handleSubmitForm = (e)=>{
        e.preventDefault()
    this.props.onSubmit(this.state)
    this.reset()
    }
    
    reset =()=>{
        this.setState({
            name: '',
            number: '',   
        })
    }

  render() {
    
    return (
        <>
<form className={styles.form} onSubmit={this.handleSubmitForm}>
  <h2>Add new contact</h2>
          <label >Name</label>
          <input
           placeholder='Enter name'
           onChange={this.handleInputChange}
            type="text"
            name="name"
           value = {this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label >Number</label>
          <input
              placeholder='Enter number'
           onChange={this.handleInputChange}
            type="tel"
            name="number"
           value = {this.state.number}
           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button type='submit' className={styles.addBtn}>Add Contact</button>
          
        </form></>
    )
  }
}
