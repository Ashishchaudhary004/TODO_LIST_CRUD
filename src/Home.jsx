import React, { useEffect, useState } from 'react'
import Create from './Create'
import './App.css'
import axios from 'axios'
import { BsCircleFill, BsFillCheckCircleFill, BsFillTrashFill, BsFillTreeFill } from 'react-icons/bs'
function Home() {
    const [todos, setTodes]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:4000/get')
        .then(result=>setTodes(result.data))
        .catch(err=>console.log(err))
    })

    const handleEdit=(id)=>{
        axios.put('http://localhost:4000/update/'+id)
        .then(result=>{
            location.reload()
        })
        .catch(err=>console.log(err))
    }
    const handleDelete=(id)=>{
        axios.delete('http://localhost:4000/delete/'+id)
        .then(result=>{
            location.reload()
        })
        .catch(err=>console.log(err))
    }

  return (
    <div className='home'>
      <h1>Todo List</h1>
      <Create/>
      {
       todos.length === 0 
       ?   // then
       <div><h2>NO RECORD FOUND</h2></div>
       :  // else
       todos.map((todo) => (
           <div className='task'>
            <div className='checkbox' onClick={()=>handleEdit(todo._id)}>
                {todo.done ? <BsFillCheckCircleFill className='icon'></BsFillCheckCircleFill>:
                <BsCircleFill className='icon'/>
                }
                <p className={todo.done ? "line_through": ""}>{todo.task}</p>
            </div>
            <div>
                <span><BsFillTrashFill className='icon' onClick={()=>handleDelete(todo._id)}/></span>
            </div>
           </div>
       ))   
      }
    </div>
  )
}

export default Home
