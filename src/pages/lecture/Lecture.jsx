import React, { useState } from 'react'
import "./lecture.css"

const Lecture = ({user}) => {
    const [lectures, setLectures] = useState([])
    const [lecture, setLecture] = useState([])
    const [loading, setLoading ] = useState(true)
    const [lecloading, setLecloading] = useState(false)
    
  return (
    <div>Lecture</div>
  )
}

export default Lecture

