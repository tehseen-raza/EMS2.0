import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className='text-center my-3'>
            <Link className='d-block' to='/'>LOGO</Link>
        </header>
    )
}

export default Header