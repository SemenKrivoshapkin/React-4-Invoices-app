import React from 'react';
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className='header-left'>
            <h1>Invoices</h1>
            <p>There are total 7 invoices</p>
        </div>
        <div className='header-right'>
            <select>Filter by status</select>
            <button>Add new invoice</button>
        </div>
    </div>
  )
}

export default Header