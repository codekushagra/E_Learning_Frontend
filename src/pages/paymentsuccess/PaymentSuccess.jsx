import React from 'react'
import "./paymentsuccess.css"
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { User } from '../../../../server/models/User'
import { CourseData } from '../../context/CourseContext'
import Courses from '../courses/Courses'

const PaymentSuccess = () => {

    const params = useParams()
  return (
    <div className="payment-success-page">
        {User && <div className='success-message'>
            <h2>Payment Successful</h2>
            <p>Your Subscription has been activated</p>
            <p> Reference No - {params.id}</p>
            <Link to={`/${User._id}/dashboard`} className='common-btn'>Go to Dashboard</Link>
            </div>}
    </div>
  )
}

export default PaymentSuccess