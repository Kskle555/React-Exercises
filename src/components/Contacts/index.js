import React from 'react'
import List from './List'
import Form from './Form'
import "./styles.css"

export default function Contacts() {
    const [contacts,setContacts] = React.useState([
      {fullname:"Mehmet",phone_number:"123123"},
      {fullname:"Ayşe",phone_number:"12345678"},
      {fullname:"Nazlı",phone_number:"9874563"}
    ]);
    React.useEffect(()=>{
        console.log(contacts)
    },[contacts])
  return (
    <div id='container'>
    <h1>Contacts</h1><List contacts={contacts}/>
    <Form addContact={setContacts} contacts={contacts}/>
    </div>
  )
}
