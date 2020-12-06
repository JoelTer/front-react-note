import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'
import Note from './components/Note'
import Contact from './components/Contacts'
import Notificacion from "./components/Notificacion";
import noteService from "./services/Notes";
import contactsService from "./services/Contacts"

const Footer = () => {
  const footerStyle = {
    color: 'green',
    fontStyle: 'italic',
    fontSize: 16
  }
  return (
    <div style={footerStyle}>
      <br />
      <em>Note app, Department of Computer Science, University of Helsinki 2020</em>
    </div>
  )
}

const App = (props) => {
  const [notes, setNotes] = useState([])
  const [contacts, setContacts] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [errorMessage, setErrorMessage] = useState('some error happened...')


  const toggleImportanceOf = id => {
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }
  
    // console.log(noteService.update(id,changedNote));
    noteService.update(id, changedNote).then(response => {
      console.log(response.data);
        setNotes(notes.map(note => note.id !== id ? note : response.data.note))
      }).catch(error => {
        console.log(error);
        setErrorMessage(
          `Note '${note.content}' was already removed from server`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
        // setNotes(notes.filter(n => n.id !== id))
      })
  }


  const addNote = event => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      date: new Date(),
      important: Math.random() < 0.5,
    }
    noteService.create(noteObject).then(response => {
      setNotes(notes.concat(response))
      setNewNote('')
    })
  }

  //COSNULTAR NOTAS
  const getNotes = () => {
    noteService.getAll().then(response =>{
      setNotes(response);
      setErrorMessage(null)
    }).catch(err=>{
      setErrorMessage(err)
    })
  }

  const getContacts = () =>{
    contactsService.getAll().then(response=>{
      setContacts(response)
      setErrorMessage(null)
    }).catch(err=>{
      setErrorMessage(err)
    })
  }
  
  useEffect(getNotes, [])
  useEffect(getContacts, [])

  const handleNoteChange = (event) => {
    setNewNote(event.target.value)
  }

  return (
    <div>
      <h1>Notes</h1>
      <Notificacion message={errorMessage} />
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div>      
      <ul>
        {notes.map((note, i) => 
          <Note
            key={i}
            note={note} 
            toggleImportance={() => toggleImportanceOf(note.id)}
          />
        )}
      </ul>

      <h1>Contacts</h1>
      <Notificacion message={errorMessage} />   
      <ul>
        {contacts.map((contact, i) => 
          <Contact
            key={i}
            contact={contact}
          />
        )}
      </ul>
      <Footer/>
    </div>
  )
}


export default App;