import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { nanoid } from 'nanoid'

export function ContactForm({onSubmit}){

const [form, setForm]= useState({name:'', number:''})
      
    const handleNameChange = e => {
        const { name, value } = e.currentTarget;
    setForm(form =>({...form, [name]:value}))
    };
    

const handleSubmit = e => {
   e.preventDefault()
        
const newContact = {
        id: nanoid(),
        ...form,
        }

        onSubmit(newContact);
        setForm({ name: '', number: '' })
    };


 return (
    <div className='ContactForm'>
    <div className='NameField'></div>
       <form
          className='inputButton'
          onSubmit={handleSubmit}>
    <h2>Name</h2>
        <label>
        <input className='InputField' 
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleNameChange}
            value={form.name}                         
        /></label> 
        
    <h2>Number</h2>
        <label>
        <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleNameChange}
            value={form.number}
        /></label>   
             
        <button 
            className='Button'
            type='submit'>Add contact
        </button>
        </form>

    </div>
    )
};

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};