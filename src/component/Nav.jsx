import React from 'react'
import { Link } from 'react-router-dom'


function Nav () {
  return (
    <>
    <div className="navbar bg-green-400 text-white px-6">
  <div className="flex-1">
    <h1 className="btn btn-ghost text-2xl"><Link to='' >Todo App</Link></h1>
  </div>
  <div className="flex gap-8">
  <button  className="btn btn-square btn-ghost text-xl">
      <Link to='/login'>Login</Link>
    </button> 
      <button className="btn btn-square btn-ghost text-xl">
      <Link to='/register' >Register</Link>
    </button>
  </div>
  
</div>
    </>
  )
}

<>
</>
export default Nav