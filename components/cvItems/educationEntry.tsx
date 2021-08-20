import React from 'react'

const EducationEntry = ({school,degree,details}) =>{

  return <>
    <h3>{school}</h3>
    <h4>{degree}</h4>
    {details}
  </>
}

export default EducationEntry