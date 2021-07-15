import React from 'react'

const Persons = ({ filter, persons }) => {
    const insensitiveFilter = filter.toUpperCase()
    const stringPersons = persons.map(person => `${person['name']} ${person['number']}`)
    const filterStrings = stringPersons.filter(string => string.toUpperCase().includes(insensitiveFilter))
    const filterPersons = filterStrings.map((person,i) => 
      <p key={i}>
        {person}
      </p>
    )
    return(
      <div>
        {filterPersons}
      </div>
    )
  }

export default Persons