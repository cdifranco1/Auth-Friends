import React from 'react';
import { NavLink } from 'react-router-dom';

const links = {
  padding: '2%',
  textDecoration: 'none',
  color: 'black'
}

const navContainer= {
  display: "flex",
  justifyContent: 'flex-end'
}

export const Nav = () => {
  return (
    <div style={navContainer}>
      <NavLink style={links} to="/friends">Friends</NavLink>
      <NavLink style={links} to="/">Login</NavLink>
    </div>
  )
}