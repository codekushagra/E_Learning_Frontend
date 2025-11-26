import React from "react";
import "./courseCard.css";
import { server } from "../../main";
import { UserData } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { CourseData } from "../../context/CourseContext";

const CourseCard = ({ course }) => {
  const navigate = useNavigate();
  const { user, isAuth } = UserData();
  const { fetchCourses } = CourseData();

  const deleteHandler = async (id) => {
    if (confirm("Are you sure you want to delete this course")) {
      try {
        const { data } = await axios.delete(`${server}/api/course/${id}`, {
          headers: {
            token: localStorage.getItem("token"),
          },
        });
        toast.success(data.message);
        fetchCourses();
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
  };

  return (
    <div className="course-card">
      <div className="course-image-wrapper">
        <img src={course.image?.startsWith('http') ? course.image : `${server}/${course.image}`} alt="" className="course-image" />
      </div>
      <div className="course-content">
        <h3>{course.title}</h3>
        <p className="instructor">By {course.createdBy}</p>
        <p className="duration">Duration: {course.duration} weeks</p>
        <p className="price">₹{course.price}</p>
        
        <div className="course-actions">
          {isAuth ? (
            <>
              {user && user.role !== "admin" ? (
                <>
                  {user.subscription.includes(course._id) ? (
                    <button
                      onClick={() => navigate(`/course/study/${course._id}`)}
                      className="common-btn study-btn"
                    >
                      Study Now
                    </button>
                  ) : (
                    <button
                      onClick={() => navigate(`/course/${course._id}`)}
                      className="common-btn get-started-btn"
                    >
                      Get Started
                    </button>
                  )}
                </>
              ) : (
                <button
                  onClick={() => navigate(`/course/study/${course._id}`)}
                  className="common-btn study-btn"
                >
                  Study Now
                </button>
              )}
            </>
          ) : (
            <button onClick={() => navigate("/login")} className="common-btn get-started-btn">
              Get Started
            </button>
          )}

          {user && user.role === "admin" && (
            <button
              onClick={() => deleteHandler(course._id)}
              className="common-btn delete-btn"
            >
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;