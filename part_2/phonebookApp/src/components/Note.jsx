const Note = ({ person, deletePhoneNote }) => {
  return (
    <div>
      <p key={person.name}>Name: {person.name}<br/>Phone: {person.number}</p>
      <button type="button" onClick={() => deletePhoneNote(person.id)}>Delete</button>
      <hr/>
     </div>
  )
}

export default Note
