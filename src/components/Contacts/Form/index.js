import React from 'react'

export default function Form({addContact,contacts}) {
    const [form,setForm] = React.useState({fullname:"",phone_number:""})
    const onchangeInput= (e)=>{
        setForm({...form,[e.target.name]:e.target.value})
    };

    const onSubmit = (e)=>{
        e.preventDefault();
        if (form.fullname==="" || form.phone_number==="") {
            return false;
        }

        addContact([...contacts,form])
        setForm({fullname:"",phone_number:""})
        console.log(form)
    };
  return (
      
    <div>
        <input name='fullname' placeholder='Fullname' value={form.fullname} onChange={onchangeInput}></input><br></br>
        <input name='phone_number' placeholder='Phone Number'value={form.phone_number} onChange={onchangeInput}></input><br></br>
        <button onClick={onSubmit}>Add</button>
    </div>
  )
}
