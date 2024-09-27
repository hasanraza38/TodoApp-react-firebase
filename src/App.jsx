import React from 'react'

import { useState ,useRef} from "react"

function App() {
  let todoVal=useRef()
  let [todo,setTodo]=useState([])
  
  const addTodo=(event)=>{
    event.preventDefault();
    // console.log(todoVal.current.value);
    todo.push(todoVal.current.value)
    setTodo([...todo])
    console.log(todo);
  todoVal.current.value =""   
  }

  const editTodo=(index)=>{
    // console.log('Edit todo =>',index);
    let editedValue=prompt('Enter Updated Todo :')
    editedValue = " " ? alert('Please Enter A Todo') :
    todo.splice(index,1,editedValue)
    setTodo([...todo])
  }

  const deleteTodo=(index)=>{
    // console.log('delete todo =>',index);
    todo.splice(index,1)
     setTodo([...todo])    
  }

  return(
    <div className="m-10">
      <h1 className="text-center text-3xl font-semibold">Todo App</h1>
  <form onSubmit={addTodo}>
  <div className="input-group flex p-3 mb-3 mt-3 border border-black border-opacity-25 rounded">
  <input ref={todoVal} required type="text" className="form-control w-full pl-1" placeholder="Enter Todo" aria-label="Todo" aria-describedby="basic-addon1"/>
  <span className="input-group-text" id="basic-addon1"><button type="submit" className="btn btn-light">Add</button></span>
 </div>
 </form>
    
    <ol>
{

todo.map((item,index)=>{
    return(
             <div className='ml-4' key={index}>
      <div className="d-flex gap-3">
      <li className=" text-3xl font-semibold">{index + 1 } : {item}
      <button className="btn btn-success text-white mx-2 btn-sm" onClick={()=>editTodo(index)}>Edit</button>
      <button className="btn btn-error btn-sm text-white" onClick={()=>deleteTodo(index)}>Delete</button>
      </li>
      </div>
             </div>
    )
  })}
    </ol>

</div>
)
  
}
export default App