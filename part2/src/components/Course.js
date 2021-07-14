import React from 'react'

const Course = ({ course }) => {
    return(
      <>
        <h1>Web development curriculum</h1>
        <Courses courses={course[0]}/>
        <Courses courses={course[1]}/>
      </>
    )
  }
  const Courses = ({ courses }) => {
    return(
      <>
        <Header name={courses['name']}/>
        <Content parts={courses['parts']}/>
        <Calculation parts={courses['parts']}/>
      </>
    )
  }
  const Header = ({ name }) => {
    return(
      <>
        <h2>{name}</h2>
      </>
    )
  }
  const Content = ({ parts }) => {
    return(
      <>
        {parts.map((part, i) => 
          <Part part={part}/>
        )}
        {/* <Part part={parts[0]}/>
        <Part part={parts[1]}/>
        {/* <Part part={parts[2]}/>
        <Part part={parts[3]}/> */} 
      </>
    )
  }
  const Part = ({ part }) => {
    return(
      <>
        <p>
          {part['name']} {part['exercises']}
        </p>
      </>
    )
  }
  const Calculation = ({ parts }) => {
    const sum = parts.reduce((sum, part) => {
      return sum + part['exercises']
    }, 0)
    return(
      <>
        <strong>
          total of {sum} exercises
        </strong>
      </>
    )
  }

export default Course