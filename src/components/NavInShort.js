import React from 'react'
import './NavInShort.css'
import HamburgerIcon from './HamburgerIcon/HamburgerIcon'
const NavInShort = ({setCategory}) => {
  return (
    <div className='nav'>
        <div className='icon'>
              <HamburgerIcon setCategory={setCategory}/>
        </div>
        <div>

        </div>
        <img 
        style={{cursor:'pointer'}}
        className='logo'
        src='/images/Tik.png'
        alt='logo'
        height='80%'
        >

        </img>
    </div>
  )
}

export default NavInShort