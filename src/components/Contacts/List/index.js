import React from 'react'

export default function List({contacts}) {
  const [filtertext,setFilterText] = React.useState("");
  const filtered = contacts.filter((item)=>{
    return Object.keys(item).some((key)=>
      item[key]
      .toString()
      .toLowerCase().includes(filtertext.toLowerCase())
    );
  });

  console.log(filtered)
  return (
    <div>
      
      <input placeholder='Filter Contact' value={filtertext} onChange={(e)=> setFilterText(e.target.value)}></input>
      <ul className='list'>
        {
            filtered.map((contact,i)=><li key={i}>{contact.fullname} {contact.phone_number}</li>)
        }
        </ul>
        <p>
          Total Contacts ({filtered.length})
          </p></div>
  )
}
