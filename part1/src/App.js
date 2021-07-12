import React, { useState } from 'react'

const random = array => Math.floor(Math.random()*array.length)

const findestGreatestIndex = array => {
  const arrayCopy = [...array]
  const largestNumber = arrayCopy.sort()[array.length-1]
  const largestIndex = array.findIndex(number => number === largestNumber)
  return largestIndex
}

const Button = ({ text, buttonHandler }) => {
  return(
    <button onClick={buttonHandler}>
      {text}
    </button>
  )
}
const Anecdote = (props) => {
  return(
    <>
      <h1>Anecdote {props.text}</h1>
      <p>
        {props.anecdotes}
      </p>
      <p>
        has {props.votes} votes
      </p>
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(Array.apply(null, new Array(7)).map(Number.prototype.valueOf,0))

  let randomNumber = random(anecdotes)
  if (randomNumber===selected){
    randomNumber = random(anecdotes)
  }

  let nextAnecdote = () => setSelected(randomNumber)
  let addVote = () => {
    const copy = [...vote]
    copy[selected] +=1
    setVote(copy)
  }

  let voteCopy = [...vote]
  const indexNeeded = findestGreatestIndex(voteCopy)

  return (
    <>
      <Anecdote text="of the day" anecdotes={anecdotes[selected]} votes={vote[selected]}/>
      <Button text="vote" buttonHandler={addVote}/>
      <Button text="next anecdote" buttonHandler={nextAnecdote}/>
      <Anecdote text="with most votes" anecdotes={anecdotes[indexNeeded]} votes={vote[indexNeeded]}/>
    </>
  )
}

export default App