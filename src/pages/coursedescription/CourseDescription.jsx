import React, { useEffect, useState } from 'react'
import "./coursedescription.css";
import { useNavigate, useParams } from "react-router-dom"
import { CourseData } from '../../context/CourseContext';
import { server } from '../../main';
import axios from 'axios';
import toast from 'react-hot-toast';
import { UserData } from '../../context/UserContext';
import Loading from '../../components/loading/Loading';

const CourseDescription = ({user}) => {
    const navigate = useNavigate();
    const params = useParams(); 
    const [loading,setLoading] = useState(false)
    const {fetchUser} = UserData()
    const {fetchCourse, course, fetchCourses, fetchMyCourse } = CourseData()

    useEffect(()=>{
        fetchCourse(params.id)
    },[]);

    const checkoutHandler = async() =>{
        const token = localStorage.getItem("token")
        setLoading(true)
        const {data:{order}} = await axios.post(`${server}/api/course/checkout/${params.id}`,{},{
            headers:{
            token,
            }
        });
        
        const options = {
            "key": "rzp_test_XHcJLwEnBXfCLZ", 
            "amount": order.id, 
            "currency": "INR",
            "name": "Smart Learning", 
            "description": "Test Transaction",
            "order_id": order.id, 

            handler:async function (response){
                const {razorpay_order_id, razorpay_payment_id, razorpay_signature} = response;

                try {
                    const {data} = await axios.post(`${server}/api/verification/${params.id}`,{
                        razorpay_order_id, razorpay_payment_id, razorpay_signature,
                    },
                    {
                        headers:{
                            token,
                            },
                    }
                );

                await fetchUser();
                await fetchCourses();
                await fetchMyCourse();
                toast.success(data.message);
                setLoading(false)
                navigate(`/payment-success/${razorpay_payment_id}`);
                    
                } catch (error) {
                    toast.error(error.response.data.message)
                    setLoading(false)
                }
            },
            theme:{
                color: "#4f46e5",
            },

        };
        const razorpay = new window.Razorpay(options);
        razorpay.open();
    };
    
  return (
    <>
    {
        loading ? <Loading /> : <>
        {course && <div className='course-description'>
            <div className="container">
                <div className='course-header'>
                    <div className="course-image-container">
                        <img src={course.image?.startsWith('http') ? course.image : `${server}/${course.image}`} alt="" className='course-image' />
                    </div>
                    <div className='course-info'>
                        <h1>{course.title}</h1>
                        <p className="instructor">Instructor: {course.createdBy}</p>
                        <p className="duration">Duration: {course.duration} weeks</p>
                        <p className="price">Price: ₹{course.price}</p>
                        <p className="description">{course.description}</p>
                        
                        {
                            user && user.subscription.includes(course._id) ? ( 
                                <button onClick={()=>navigate(`/course/study/${course._id}`)} className='common-btn study-btn'>Study Now</button> 
                            ) : (
                                <button onClick={checkoutHandler} className='common-btn enroll-btn'>Enroll Now</button>
                            )
                        }
                    </div>
                </div>
            </div>
        </div> }
        </>
    }
    </>
  )
}

export default CourseDescription