import React from 'react'
import { useNavigate } from 'react-router-dom'
import './home.css';
import Testimonials from '../../components/testimonials/Testimonials';
import { FaCreditCard, FaBookOpen, FaLaptopCode, FaCertificate, FaUsers, FaGraduationCap, FaStar, FaRocket } from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate()
  return (
    <div>
      {/* Hero Section */}
      <div className="home">
        <div className="home-content">
          <span className="badge">🚀 Transform Your Future</span>
          <h1>Master New Skills with Expert-Led Courses</h1>
          <p>Join thousands of learners advancing their careers through our comprehensive online courses. Learn at your own pace, anywhere, anytime.</p>
          <div className="cta-buttons">
            <button onClick={()=>navigate("/courses")} className='common-btn primary-btn'>Explore Courses</button>
            <button onClick={()=>navigate("/about")} className='common-btn secondary-btn'>Learn More</button>
          </div>
          
          {/* Quick Stats */}
          <div className="quick-stats">
            <div className="stat-item">
              <FaUsers className="stat-icon" />
              <div>
                <h3>10,000+</h3>
                <p>Active Learners</p>
              </div>
            </div>
            <div className="stat-item">
              <FaGraduationCap className="stat-icon" />
              <div>
                <h3>50+</h3>
                <p>Expert Courses</p>
              </div>
            </div>
            <div className="stat-item">
              <FaStar className="stat-icon" />
              <div>
                <h3>4.8/5</h3>
                <p>Average Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose SkillSphere?</h2>
            <p>Everything you need to succeed in your learning journey</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="icon-box"><FaRocket /></div>
              <h3>Learn at Your Pace</h3>
              <p>Flexible learning schedules that fit your lifestyle. Access courses 24/7 from any device.</p>
            </div>
            <div className="feature-card">
              <div className="icon-box"><FaBookOpen /></div>
              <h3>Expert Instructors</h3>
              <p>Learn from industry professionals with years of real-world experience.</p>
            </div>
            <div className="feature-card">
              <div className="icon-box"><FaLaptopCode /></div>
              <h3>Hands-on Projects</h3>
              <p>Build your portfolio with practical projects and real-world applications.</p>
            </div>
            <div className="feature-card">
              <div className="icon-box"><FaCertificate /></div>
              <h3>Verified Certificates</h3>
              <p>Earn recognized certificates to showcase your achievements.</p>
            </div>
            <div className="feature-card">
              <div className="icon-box"><FaCreditCard /></div>
              <h3>Secure Payments</h3>
              <p>Multiple payment options with bank-level security and encryption.</p>
            </div>
            <div className="feature-card">
              <div className="icon-box"><FaUsers /></div>
              <h3>Community Support</h3>
              <p>Join a vibrant community of learners and get help when you need it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="access-section">
        <div className="container">
          <div className="section-header">
            <h2>Start Learning in 4 Simple Steps</h2>
            <p>Your journey to success begins here</p>
          </div>
          <div className="steps-grid">
            <div className="step-card">
              <span className="step-number">1</span>
              <div className="step-content">
                <h3>Create Account</h3>
                <p>Sign up in seconds with your email. No credit card required to browse.</p>
              </div>
            </div>
            <div className="step-card">
              <span className="step-number">2</span>
              <div className="step-content">
                <h3>Choose Course</h3>
                <p>Browse our catalog and find the perfect course for your goals.</p>
              </div>
            </div>
            <div className="step-card">
              <span className="step-number">3</span>
              <div className="step-content">
                <h3>Start Learning</h3>
                <p>Access video lectures, notes, and assignments instantly.</p>
              </div>
            </div>
            <div className="step-card">
              <span className="step-number">4</span>
              <div className="step-content">
                <h3>Get Certified</h3>
                <p>Complete the course and receive your verified certificate.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Learning Journey?</h2>
            <p>Join thousands of students already learning on SkillSphere</p>
            <button onClick={()=>navigate("/courses")} className='common-btn cta-btn'>Browse Courses Now</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home