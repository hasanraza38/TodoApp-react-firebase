import React from 'react'
import { Link } from 'react-router-dom'


function Nav () {
  return (
    <>
    <div className="navbar bg-zinc-400 text-white">
  <div className="flex-1">
    <h1 className="btn btn-ghost text-xl"><Link to='' >Todo App</Link></h1>
  </div>
  <div className="flex-none">
  <button  className="btn btn-square btn-ghost">
      <Link to='/login'>Login</Link>
    </button>
    
  </div>
  <div className="flex-none">
  <button className="btn btn-square btn-ghost">
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