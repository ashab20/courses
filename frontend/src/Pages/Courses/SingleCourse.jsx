import React from 'react'
import {useParams} from 'react-router-dom';

const SingleCourse = () => {
    const {courseId} = useParams();
    console.log(courseId)
  return (
    <div>Course id : {courseId}</div>
  )
}

export default SingleCourse