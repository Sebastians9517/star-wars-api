import React from 'react'

const NavBar = (props) => {
  return(
    <header className="App-header">
      <img
      src="https://icon-library.com/images/starwars-icon/starwars-icon-20.jpg"
      alt="logo"
      style={{ width: "100px", height: "100px"}}
      className="App-logo"
      />
      {props.navItems.map((navItem, idx) =>
        <a key={idx} href={navItem.url}>{navItem.name}</a>
      )}
    </header>
  )
}

export default NavBar
