import React from 'react'
import "./common.css";
import { Link, useLocation } from 'react-router-dom';
import { AiFillHome, AiOutlineLogout } from "react-icons/ai";
import { FaBook, FaUserAlt } from 'react-icons/fa';

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="sidebar">
        <ul>
            <li>
                <Link to={'/admin/dashboard'} className={location.pathname === '/admin/dashboard' ? 'active' : ''}>
                    <div className='icon'><AiFillHome /></div>
                    <span>Home</span>
                </Link>
            </li>

            <li>
                <Link to={'/admin/course'} className={location.pathname === '/admin/course' ? 'active' : ''}>
                    <div className='icon'><FaBook /></div>
                    <span>Courses</span>
                </Link>
            </li>

            <li>
                <Link to={'/admin/users'} className={location.pathname === '/admin/users' ? 'active' : ''}>
                    <div className='icon'><FaUserAlt /></div>
                    <span>Users</span>
                </Link>
            </li>

            <li>
                <Link to={'/account'}>
                    <div className='icon'><AiOutlineLogout /></div>
                    <span>Logout</span>
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar