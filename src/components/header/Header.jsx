import React from 'react'
import "./header.css";
import { Link } from 'react-router-dom';

const Header = ({isAuth}) => {
  return (
    <header>
        <div className="container header-content">
            <Link to={'/'} className='logo'>SkillSphere</Link>

            <nav className="link">
                <Link to={'/'}>Home</Link>
                <Link to={'/courses'}>Courses</Link>
                <Link to={'/about'}>About</Link>
                {isAuth ? (
                  <Link to={'/account'} className='account-btn'>Account</Link> 
                ) : (
                  <Link to={"/login"} className='login-btn'>Login</Link>
                )}
            </nav>
        </div>
    </header>
  )
}

export default Header