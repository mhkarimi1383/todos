import React from 'react'
import { Offline, Online } from 'react-detect-offline'
import { Navbar } from 'react-bootstrap'

const Header = () => {
  return (
    <Navbar bg='primary' variant='dark'>
      <Navbar.Brand>
        کارام
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className='justify-content-end'>
        <Navbar.Text>
          <Offline>آفلاین</Offline>
          <Online>آنلاین</Online>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header;
