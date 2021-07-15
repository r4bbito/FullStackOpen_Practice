import React from 'react'
import Input from './Input'

const PersonForm = (props) => {
    return(
      <form onSubmit={props.submitFunction}>
        <Input text={'name:'} value={props.nameValue} onChange={props.nameChange}/>
        <Input text={'number:'} value={props.numberValue} onChange={props.numberChange}/>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
  }

export default PersonForm