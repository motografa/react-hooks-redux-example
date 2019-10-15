import React from 'react';
import { useSelector, useDispatch} from 'react-redux';

export default function CourseList() {

    // state.data é um Array - Para retornar uma 
    // quantidade do array pode ser passado no use selector
    // ex:const courses = useSelector( state=> state.data.slice(deOnde, ateOnde) );

    const courses = useSelector( state=> state.data );
const dispatch = useDispatch();

function addCourse(){
    dispatch({ type: 'ADD_COURSE', title: 'GraphQL'})
}

  return (
    <>
        <ul>
            {courses.map (course => <li key={course}>{course}</li>)}
        </ul>
        <button type="button" onClick={addCourse}>
            Adcionar curso
        </button>
    </>
  );
}
