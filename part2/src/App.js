import React, { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number : newNumber
    }

    const isNameUnique = persons.some(person => person['name']===newName)
    const isNumberUnique = persons.some(person => person['number']===newNumber)

    if (isNameUnique) 
      alert(`Name ${newName} is already added to phonebook`)
    else if (isNumberUnique) 
      alert(`Number ${newNumber} is already added to phonebook`)
    else{
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
  }
  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter text={'filter shown with'} value={newFilter} onChange={handleFilterChange}/>

      <h3>Add a new</h3>

      <PersonForm submitFunction={addPerson} nameValue={newName} nameChange={handleNameChange} numberValue={newNumber} numberChange={handleNumberChange}/>

      <h3>Numbers</h3>

      <Persons filter={newFilter} persons={persons}/>

    </div>
  )
}

export default App
