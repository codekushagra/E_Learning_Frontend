import React from 'react';
import "./testimonials.css"
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
    const testimonialsData = [
        {
          id: 1,
          name: "Sarah Johnson",
          position: "Web Developer",
          message:
            "This platform transformed my career! The courses are incredibly well-structured and the instructors are industry experts. I landed my dream job within 3 months of completing the Full Stack course.",
          image:
            "https://th.bing.com/th/id/OIP.GKAiW3oc2TWXVEeZAzrWOAHaJF?w=135&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
          rating: 5,
        },
        {
          id: 2,
          name: "Michael Chen",
          position: "Data Scientist",
          message:
            "The hands-on projects and real-world applications made all the difference. I've learned more here in 6 months than I did in 2 years of self-study. Highly recommended!",
          image:
            "https://th.bing.com/th?q=Current+Bachelor&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
          rating: 5,
        },
        {
          id: 3,
          name: "Emily Rodriguez",
          position: "UI/UX Designer",
          message:
            "The quality of instruction is outstanding. Each course is packed with valuable insights and practical tips. The community support is amazing too!",
          image:
            "https://th.bing.com/th/id/OIP.GKAiW3oc2TWXVEeZAzrWOAHaJF?w=135&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
          rating: 5,
        },
        {
          id: 4,
          name: "David Kumar",
          position: "Software Engineer",
          message:
            "Best investment I've made in my education. The courses are up-to-date with current industry standards and the certificates are recognized by employers.",
          image:
            "https://th.bing.com/th?q=Current+Bachelor&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
          rating: 5,
        },
        {
          id: 5,
          name: "Lisa Thompson",
          position: "Product Manager",
          message:
            "Flexible learning at its best! I could learn at my own pace while working full-time. The platform is user-friendly and the content is top-notch.",
          image:
            "https://th.bing.com/th/id/OIP.GKAiW3oc2TWXVEeZAzrWOAHaJF?w=135&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
          rating: 5,
        },
        {
          id: 6,
          name: "James Wilson",
          position: "Mobile Developer",
          message:
            "The instructors are passionate and knowledgeable. They explain complex concepts in a way that's easy to understand. Worth every penny!",
          image:
            "https://th.bing.com/th?q=Current+Bachelor&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
          rating: 5,
        },
      ];

    const renderStars = (rating) => {
        return [...Array(5)].map((_, index) => (
            <FaStar
                key={index}
                className={index < rating ? "star filled" : "star"}
            />
        ));
    };
  
    return (
      <section className='testimonials'>
          <div className="container">
            <div className="section-header">
              <h2>What Our Students Say</h2>
              <p>Real reviews from real students who transformed their careers</p>
            </div>
          </div>
          <div className="testimonials-wrapper">
            <div className="testimonials-marquee">
                {testimonialsData.map((e) => (
                    <div key={e.id} className="testimonial-card">
                        <div className="quote-icon">"</div>
                        <div className="stars-rating">
                            {renderStars(e.rating)}
                        </div>
                        <p className='message'>{e.message}</p>
                        <div className='student-info'>
                            <div className='student-image'>
                                <img src={e.image} alt={e.name} />
                            </div>
                            <div className='info'>
                                <p className='name'>{e.name}</p>
                                <p className='position'>{e.position}</p>
                            </div>
                        </div>
                    </div>
                ))}
                {/* Duplicate for seamless scrolling */}
                {testimonialsData.map((e) => (
                    <div key={`dup-${e.id}`} className="testimonial-card">
                        <div className="quote-icon">"</div>
                        <div className="stars-rating">
                            {renderStars(e.rating)}
                        </div>
                        <p className='message'>{e.message}</p>
                        <div className='student-info'>
                            <div className='student-image'>
                                <img src={e.image} alt={e.name} />
                            </div>
                            <div className='info'>
                                <p className='name'>{e.name}</p>
                                <p className='position'>{e.position}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
          </div>
      </section>
    );
};

export default Testimonials;
