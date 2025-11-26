import React from 'react'
import "./about.css";
import { FaCheckCircle, FaLightbulb, FaUsers, FaHeart } from "react-icons/fa";

const About = () => {
  return (
    <div className="about">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="container">
          <h1>About SkillSphere</h1>
          <p className="hero-subtitle">Empowering learners worldwide to achieve their dreams through quality education</p>
        </div>
      </div>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h2>Our Mission</h2>
              <p>
                At SkillSphere, we believe that education should be accessible to everyone, everywhere. Our mission is to democratize learning by providing high-quality, affordable courses that help individuals unlock their full potential and achieve their career goals.
              </p>
              <p>
                We partner with industry experts and experienced educators to create courses that are not only comprehensive but also practical and relevant to today's job market.
              </p>
            </div>
            <div className="mission-image">
              <div className="image-placeholder">
                <FaLightbulb className="large-icon" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <FaCheckCircle className="value-icon" />
              <h3>Quality First</h3>
              <p>Every course is carefully crafted and reviewed to ensure the highest educational standards.</p>
            </div>
            <div className="value-card">
              <FaUsers className="value-icon" />
              <h3>Student-Centric</h3>
              <p>Your success is our priority. We design everything with the learner's experience in mind.</p>
            </div>
            <div className="value-card">
              <FaLightbulb className="value-icon" />
              <h3>Innovation</h3>
              <p>We constantly evolve our platform and content to stay ahead of industry trends.</p>
            </div>
            <div className="value-card">
              <FaHeart className="value-icon" />
              <h3>Community</h3>
              <p>Building a supportive learning community where everyone can grow together.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <h2>Our Impact</h2>
          <div className="stats-grid">
            <div className="stat-box">
              <h3>10,000+</h3>
              <p>Students Enrolled</p>
            </div>
            <div className="stat-box">
              <h3>50+</h3>
              <p>Courses Available</p>
            </div>
            <div className="stat-box">
              <h3>95%</h3>
              <p>Completion Rate</p>
            </div>
            <div className="stat-box">
              <h3>4.8/5</h3>
              <p>Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2>Why Students Choose Us</h2>
          <div className="reasons-grid">
            <div className="reason-item">
              <div className="reason-number">01</div>
              <h3>Expert Instructors</h3>
              <p>Learn from professionals with years of industry experience and proven teaching methods.</p>
            </div>
            <div className="reason-item">
              <div className="reason-number">02</div>
              <h3>Flexible Learning</h3>
              <p>Study at your own pace with lifetime access to course materials and regular updates.</p>
            </div>
            <div className="reason-item">
              <div className="reason-number">03</div>
              <h3>Practical Skills</h3>
              <p>Focus on hands-on projects and real-world applications that employers value.</p>
            </div>
            <div className="reason-item">
              <div className="reason-number">04</div>
              <h3>Career Support</h3>
              <p>Get certified and access resources to help you advance in your chosen field.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <h2>Ready to Transform Your Career?</h2>
          <p>Join our community of learners and start your journey today</p>
          <a href="/courses" className="common-btn">Explore Courses</a>
        </div>
      </section>
    </div>
  )
}

export default About 
