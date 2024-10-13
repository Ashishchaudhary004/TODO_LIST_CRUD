import React from 'react'
import axios from 'axios'
import { useState } from 'react'
function Create() {
    const [task, settask]=useState()
    const handleAdd=()=>{
        axios.post('http://localhost:4000/create',{task:task})
        .then(result => {
            location.reload()
        })
        .catch(err=>console.log(err))
    }
  return (
    <div>
      <input type="text" name="input" className="create_form" onChange={(e)=>settask(e.target.value)}></input>
      <button type="button" name="button" className="create_form_b" onClick={handleAdd}>Create</button>
    </div>
  )
}

export default Create
