import React, { useState } from 'react'

const Header = ({ text }) => {
  return(
    <>
      <h1>{text}</h1>
    </>
  )
}

const TableColumn = ({ text, value }) => {
  return(
    <>
      <tr>
        <th>{text}</th>
        <td>{value}</td>
      </tr>
    </>
  )
}

const Statistic = ({ text, value }) => {
  return(
    <>
      <p>
        {text} {value}
      </p>
    </>
  )
}

const Button = (props) => {
  return(
    <>
      <button onClick={props.handleButton}>
        {props.text}
      </button>
    </>
  )
}

const Buttons = (props) => {
  return(
    <>
      <Header text="give feedback"/>
      <Button handleButton={props.handleGood} text="good"/>
      <Button handleButton={props.handleNeutral} text="neutral"/>
      <Button handleButton={props.handleBad} text="bad"/>
    </>
  )
}
const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad
  const average = ((good*1)+(bad*-1))/all
  const positive = (good/all)*100 + ' %'
  if (all==0) {
    return(
      <>
        <Header text="statistics"/>
        <Statistic text="No information given"/>
      </>
    )
  }
  return(
    <>
      <Header text="statistics"/>
      <table>
        <TableColumn  text="good" value={good}/>
        <TableColumn  text="neutral" value={neutral}/>
        <TableColumn  text="bad" value={bad}/>
        <TableColumn  text="all" value={all}/>
        <TableColumn  text="average" value={average}/>
        <TableColumn  text="positive" value={positive}/>
      </table>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const giveGood = () => setGood(good + 1)
  const giveNeutral = () => setNeutral(neutral + 1)
  const giveBad = () => setBad(bad + 1)

  return (
    <>
      <Buttons handleGood={giveGood} handleNeutral={giveNeutral} handleBad={giveBad}/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </>
  )
}

export default App