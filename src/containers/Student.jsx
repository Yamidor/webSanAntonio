import React, {useEffect, useState} from 'react';
import StudentService from '../services/student-service'

const Student = () => {
    const [students, setStudents] = useState([]);
    const [status, setStatus] = useState(false);
    useEffect(() => {
        cargarStudents();
    },[status]);

    const cargarStudents = async () =>{
        let est = await fetch("http://localhost:8080/students?currentPage=0&sizePage=100");
        const res = await est.json();
        setStudents(res.content);
        setStatus(true)
    }

    
    return(
        <div className="container">
            {students.map(student =>
                <div key={student.id}>
                    <h1>{student.fullName}</h1>
                </div>
            )}
                
         
            
        </div>
    )

}
export default Student;