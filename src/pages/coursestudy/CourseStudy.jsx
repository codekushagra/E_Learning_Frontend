import React, { useEffect } from 'react'
import "./coursestudy.css"
import {Link, useNavigate, useParams} from 'react-router-dom'
import {CourseData} from "../../context/CourseContext"
import { server } from '../../main'

const CourseStudy = ({user}) => {
    const params = useParams();
    const { fetchCourse, course } = CourseData();
    const navigate = useNavigate();

    if(user && user.role!=="admin" && !user.subscription.includes(params.id)) return navigate("/");

    useEffect (()=>{
        fetchCourse(params.id)
    },[])

  return (
    <>
      {course && (
        <div className='course-study-page'>
          <div className="container">
            <div className="course-study-card">
              <img src={course.image?.startsWith('http') ? course.image : `${server}/${course.image}`} alt="" className="course-image" />
              <div className="course-study-content">
                <h2>{course.title}</h2>
                <h4>{course.description}</h4>
                <h5>By {course.createdBy}</h5>
                <h5>Duration: {course.duration} weeks</h5>
                
                <Link to={`/lectures/${course._id}`} className="lectures-btn">
                  View Lectures
                </Link>
                
                {course.notesLink && (
                  <a 
                    href={course.notesLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="lectures-btn"
                    style={{marginTop: '10px', display: 'inline-block'}}
                  >
                    📝 Download Notes
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default CourseStudy