import React from 'react'
import Component2 from './Component2'

function Component1( {fname,setName}) {
  return (
    <div>
      <Component2 fname={fname} setName={setName}></Component2>
     
    </div>
  )
}

export default Component1
