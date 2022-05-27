import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import './header.scss'
function Header() {
    const redirect = [
        {
            displayName: "Home",
            path: "/"
        },
        {
            displayName: "Features",
            path: "/features"
        },
        {
            displayName: "Test",
            path: "/test"
        },
        {
            displayName: "Q&A",
            path: "/help"
        }
    ]

    const  {pathname} = useLocation()
    const active = redirect.findIndex((item) => item.path == pathname)
  return (
    <div className="header">
        <div className="header-container">
            <div className="header-logo">Hnam</div>
            <div className="header-menu">
                {redirect.map((item, i) => (
                    <Link to={item.path} className={`header-item ${active == i ? 'active' : ''}`} key={i}>{item.displayName}</Link>
                ))}
            </div>
            <Link to="/login" className='header-login'>Login</Link>
        </div>
    </div>
  )
}

export default Header