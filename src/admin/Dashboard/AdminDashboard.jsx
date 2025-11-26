import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../Utils/Layout';
import axios from 'axios';
import {server} from '../../main.jsx';
import "./dashboard.css";

const AdminDashboard = ({ user }) => {
  const navigate = useNavigate();

  if (user && user.role !== "admin") return navigate("/");

  const [stats, setStats] = useState([]);

  async function fetchStats() {
    try {
      const { data } = await axios.get(`${server}/api/stats`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });
      setStats(data.stats);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(()=>{
    fetchStats()
  },[])

  return (
    <Layout>
      <div className="admin-dashboard">
        <h1>Dashboard Overview</h1>
        <div className="stats-container">
          <div className='stats-card'>
            <h3>Total Courses</h3>
            <p>{stats.totalCoures}</p>
          </div>

          <div className='stats-card'>
            <h3>Total Lectures</h3>
            <p>{stats.totalLectures}</p>
          </div>

          <div className='stats-card'>
            <h3>Total Users</h3>
            <p>{stats.totalUsers}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
