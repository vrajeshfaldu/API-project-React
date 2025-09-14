import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function EN() {
  return (
   <div className="dropdown lang-dropdown">
    <button className="btn dropdown-toggle" type="button" id="languageMenu" data-bs-toggle="dropdown" aria-expanded="false">
      <i className="bi bi-globe"></i> EN
    </button>
    <ul className="dropdown-menu" aria-labelledby="languageMenu">
      <li><Link className="dropdown-item" to="#">EN - English</Link></li>
      <li><Link className="dropdown-item" to="#">FR - Français</Link></li>
      <li><Link className="dropdown-item" to="#">ES - Español</Link></li>
      <li><Link className="dropdown-item" to="#">DE - Deutsch</Link></li>
    </ul>
  </div>
  )
}

export default EN