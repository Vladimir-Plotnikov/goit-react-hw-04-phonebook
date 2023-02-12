import {useState, useEffect} from 'react'
import { ContactForm } from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Sorting from './Sorting/Sorting';

import './ContactForm/ContactForm.css';
import './Sorting/Sorting.css'
import './ContactItem/ContactItem.css'

export function App(){

const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? [];
  })

const [filter, setFilter] = useState('');

useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
},[contacts])

const addContact = contact => {
    if (
      !contacts.find(
        ({ name }) => name.toLocaleLowerCase() === contact.name.toLowerCase()
      )
    ) {
      setContacts(
        contacts => [...contacts, contact]
      
    )} else {
      alert(`${contact.name} is already in contacts.`);
    }
  };

const filterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
};

  const findContact = e => {
  setFilter(e.currentTarget.value)
}
  
const deleteContact = contactId => {
  setContacts(
    contacts => contacts.filter(({ id }) => id !== contactId));
   
};
  
return (
    <div className='GlobalClass'>
      <div>
        <h1 className='PhoneBook'>Phonebook</h1>
        <ContactForm onSubmit={addContact} />
        
        <Sorting
          value={filter}
          onChange={findContact}
        />
        
        <ContactList
          contacts={filterContacts()}
          deleteContact={deleteContact}
        />
      </div>
    </div>
  )

};


