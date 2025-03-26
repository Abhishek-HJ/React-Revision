import React from 'react'

const Renderingusingif = (props) => {
    
var d=""
    if(props.role==="User"){
        d="Welcome User";
    }
    else if(props.role==="Admin"){
        d="Welcome Admin";
    }
  return (
    <div>
        <h1>HII</h1>
        <p>{d}</p>


    </div>
  )
}

export default Renderingusingif