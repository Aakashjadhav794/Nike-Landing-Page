import React from 'react'
import '../App.css'
import log from '../assets/img/logo.png';
const Appbar = () => {
  return (
    <div>
      <nav>
          <div className='logo' >
            <img src={log} width={75} alt="nike" />
          </div>
        <ul>
          <li>Home</li>
          <li>Menu</li>
          <li>Stores</li>
          <li>About</li>
        </ul>
        <button>Login</button>
      </nav>
    </div>
  )
}

export default Appbar
