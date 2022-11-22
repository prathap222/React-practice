import React, {useEffect, useState} from 'react'

 const One = () => {
  

const [values, setValues] = useState([]);

useEffect(()=> {

  fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => setValues([json]))

}, [])

  return (
    <div>
     
      </div>
  )
}

export default One;
