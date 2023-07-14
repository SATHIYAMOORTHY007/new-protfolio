import React, { useState } from 'react'
import { FaBars, FaReact } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { HiX } from 'react-icons/hi'
import './index.scss'
const data = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'About',
    to: '/about',
  },
  {
    label: 'Skill',
    to: '/skill',
  },
  {
    label: 'Projects',
    to: '/projects',
  },
]
function Index() {
  const [toggleIcon, setToggleIcon] = useState(false)
  const handelToggle = () => {
    setToggleIcon(!toggleIcon)
  }
  return (
    <div>
      <nav className="navbar">
        <div className="navbar_container">
          <Link to={'/'} className="navbar_container_logo">
            <FaReact size={30} />
          </Link>
        </div>
        <ul className={`navbar_container_menu ${toggleIcon ? 'active' : ''}`}>
          {data.map((item, key) => (
            <li key={key} className="navbar_container_menu_list">
              <Link className="navbar_container_menu_list_links" to={item.to}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav-icon" onClick={handelToggle}>
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </nav>
    </div>
  )
}

export default Index
