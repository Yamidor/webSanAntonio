import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelopeSquare, faPhone, faMapMarkerAlt, faAddressCard} from '@fortawesome/free-solid-svg-icons';
import Teacher from '../img/avatar.jpg'
import Silvio from '../img/silvio.jpeg'
import Yamid from '../img/yamid.jpeg'
import Olguer from '../img/olguer.jpeg'
import '../styles/teachers.css'
const Teachers = () => {
    const teachers = [
                        {
                            id: 1, 
                            name: "SILVIO OBIDIO BURBANO RAMOS",
                            titles: "Licenciado en matematicas",
                            cargo: "Rector",
                            img: Silvio,
                            materias: "",
                            grados: ""
                        },
                        {
                            id: 2, 
                            name: "RUBEN YAMID ORDOÑEZ GOMEZ",
                            titles: "Ingeniero de sistemas",
                            cargo: "Docente",
                            img: Yamid,
                            materias: "Etica-Tecnologia e informatica",
                            grados: "6° 7° 8° 9° 10° 11°"
                        },
                        {
                            id: 3, 
                            name: "OLGUER AGUIRRE",
                            titles: "Licenciado en matematicas",
                            cargo: "Docente",
                            img: Olguer,
                            materias: "Matematicas-Fisica",
                            grados: "8° 9° 10° 11°"
                        },

                    ]
    console.log(teachers);
    return(
        <div className="container-teachers">
            <h1 className="title-teachers" >Docentes</h1>
            {teachers.map(teacher =>
                <div className="card-container-teachers" key={teacher.id}>
                    <div className="card-title" >
                        <h4>{teacher.name}</h4>
                    </div>
                    <div className="card-content-teachers">
                        <img src={teacher.img} alt={teacher.img} className="img-teachers"/>
                    </div>
                    <div className="card-footer-teachers" >
                        <h5><FontAwesomeIcon icon={faAddressCard} color="green"/> {teacher.titles}</h5>
                        <h5> {teacher.cargo}</h5>
                        <h5> {teacher.email}</h5>
                        <h5> {teacher.materias}</h5>
                        <h5> {teacher.grados}</h5>
                    </div>
                </div>
            )}
        </div>
    )

}
export default Teachers;