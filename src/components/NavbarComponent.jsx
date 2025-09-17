import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Navbar.css'

const NavbarComponent = () => {
  const [active, setActive] = useState('Home')
  const [search, setSearch] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  const navigate = useNavigate()

  const handleSearch = () => {
    if (search.trim()) {
      navigate(`/category/${search.trim()}`)
      setSearch('')
      setIsOpen(false) 
    }
  }

  return (
    <div className='navbar'>
      <div className='navbar__logo'>
        <h2 onClick={() => { setActive("Home"); navigate("/") }}>
          INSIGHT STREAM
        </h2>
      </div>
      <div className='navbar__links'>
        <p className={active === 'Home' ? 'active' : ''} onClick={() => { setActive("Home"); navigate("/") }}>Home</p>
        <p className={active === 'General' ? 'active' : ''} onClick={() => { setActive("General"); navigate("/category/general") }}>General</p>
        <p className={active === 'Technology' ? 'active' : ''} onClick={() => { setActive("Technology"); navigate("/category/technology") }}>Technology</p>
        <p className={active === 'Politics' ? 'active' : ''} onClick={() => { setActive("Politics"); navigate("/category/politics") }}>Politics</p>
        <p className={active === 'Sports' ? 'active' : ''} onClick={() => { setActive("Sports"); navigate("/category/sports") }}>Sports</p>
        <p className={active === 'Art & Culture' ? 'active' : ''} onClick={() => { setActive("Art & Culture"); navigate("/category/art&culture") }}>Art & Culture</p>
      </div>
      <div className={`search-icon ${isOpen ? 'open' : ''}`}>
        <input
          className="search-icon__input"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        />
        <div
          className="search-icon__wrapper"
          onClick={() => {
            if (isOpen && search.trim()) {
              handleSearch()
            } else {
              setIsOpen(!isOpen)
            }
          }}
        >
          <div className="search-icon__glass"></div>
          <div className="search-icon__handle"></div>
        </div>
      </div>
    </div>
  )
}

export default NavbarComponent

