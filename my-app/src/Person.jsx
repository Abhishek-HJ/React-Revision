import React from 'react'

const Person = (props) => {
  return (
    <div><p>Name:{props.name}</p>
    <p>Skill:{props.skill}</p>
    </div>
  )
}

export default Person