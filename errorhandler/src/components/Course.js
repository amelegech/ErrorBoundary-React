import React from 'react'
import ErrorBoundary from './ErrorBoundary';

 const Course=(props)=> {

    if(props.name==="JAVA"){
      throw new Error("Java is not my major!")      
    }
    return (
        <div>
        <p>{}</p>
            <li>{props.name}</li>
           
        </div>
    )
}
export default Course;