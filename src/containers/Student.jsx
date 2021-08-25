import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelopeSquare, faPhone, faMapMarkerAlt, faAddressCard} from '@fortawesome/free-solid-svg-icons'
import StudentService from '../services/student-service';
import Teacher from '../img/avatar.jpg';
import '../styles/students.css';

const Student = () => {
    const [students, setStudents] = useState([]);
    const [status, setStatus] = useState(false);
    useEffect(() => {
        cargarStudents();
    },[status]);

    const cargarStudents = async () =>{
        let est = await fetch("https://colegio-san-antonio.herokuapp.com/enrollments?currentPage=0&sizePage=100");
        const res = await est.json();
        setStudents(res.content);
        setStatus(true)
    }

    
    return(
        <div className="container-students">
            <h1 className="title-students" >ESTUDIANTES</h1>
            {students.map(matricula =>
                <div className="card-container-students" key={matricula.student.id}>
                    <div className="card-title" >
                        <h4>{matricula.student.fullName}</h4>
                    </div>
                    <div className="card-content-students">
                        <img src={Teacher} alt={Teacher} className="img-students"/>
                    </div>
                    <div className="card-footer-students" >
                        <h5><FontAwesomeIcon icon={faAddressCard} color="green"/> {matricula.student.identificationNumber}</h5>
                        <h5><FontAwesomeIcon icon={faEnvelopeSquare} color="green"/> {matricula.student.email}</h5>
                        <h5><FontAwesomeIcon icon={faPhone} color="green"/>{matricula.student.phone}</h5>
                        <h5><FontAwesomeIcon icon={faMapMarkerAlt} color="green"/>{matricula.student.address}</h5>
                        <h5> {matricula.course.name}</h5>
                    </div>
                </div>
            )}
        </div>
    )

}
export default Student;