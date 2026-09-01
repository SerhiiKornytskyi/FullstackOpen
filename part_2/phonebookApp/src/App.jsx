import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Note from './components/Note'
import Form from './components/Form'
import axios from 'axios'
import phoneService from './services/phones'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState(null) 
  const [notificationObject, setNotificationObject] = useState(null) // {text: ..., className: ...}

  useEffect(() => {
    phoneService.getAll().then((initialPrones) => {
      setPersons(initialPrones)
    }).catch((e) => {
      console.log(`Fetch failed, reason ${e}`);
      throw(e);
    });
  },[]);
  
  const [searchFilter, setSearchFilter] = useState('');

  const handleFilter = (e) => {
      setSearchFilter(e.target.value.trim().toLowerCase());
  }

  const deletePhoneNote = (id) => {
    const contactName = persons.find(person => person.id === id).name;
    if(window.confirm(`Are you willing to delete ${contactName} contact?`)) {
        phoneService.deleteRecord(id).then((resp) => {
        const newPersons = persons.filter(person => person.id !== resp.id);
        setPersons(newPersons);
      }).catch((e) => {
        showNotificationMessage(`Delete Phone note failed, reason ${e}`, 'error');
      });
    }
  }

  const showNotificationMessage = (notificationString, className) => {
      setNotificationObject({
         text: notificationString, 
         className: className
      });
      setTimeout(() => {
        setNotificationObject(null)
      }, 3000);
  }

  const createNewContact = (newContact) => {
    phoneService.create(newContact).then((newPersonResponse) => {
      const newPersons = persons.concat(newPersonResponse);
      setPersons(newPersons);
      showNotificationMessage(`Added ${newContact.name}`, 'success');
    }).catch((e) => {
      console.log(`Create Phone note failed, reason ${e}`);
      throw(e);
    });
  }

  const updateExistingContact = (id, newContact) => {
    phoneService.update(id, newContact).then((updatedPerson) => {
      setPersons((previousPersons) => previousPersons.map(person => person.id !== updatedPerson.id ? person : updatedPerson));
      showSuccessMessage(newContact.name);
    }).catch((e) => {
      console.log(`Updating Phone note failed, reason ${e}`);
      throw(e);
    });
  }

  const applyFormData = (newContact) => {
   
    const existingContact = persons.find((person) => person.name === newContact.name.trim());
    if (!existingContact) {
      createNewContact(newContact);
    } else {
      if(window.confirm(`${newContact.name} is already added to phonebook, update with new data?`)) {
        updateExistingContact(existingContact.id, newContact);
      }
    }
  }

  // do not render anything if persons is still null
  if (!persons) { 
    return null 
  }

  return (
    <div>
      <Filter handleFilter={handleFilter}/>
      <h2>Phonebook</h2>
      {notificationObject && <Notification message={notificationObject.text} classNameString={notificationObject.className} />}
      <Form 
        applyFormData={applyFormData}
      />
      <h2>Numbers</h2>
      {persons
        .filter(person => person.name.toLowerCase().includes(searchFilter))
        .map(person => <Note person={person} key={person.name} deletePhoneNote={deletePhoneNote}/>)}
    </div>
  )
}

export default App