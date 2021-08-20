import React from 'react';
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
        <div className="container">
            <h1 className="title-teacher">Docentes</h1>
            <div className="container-teachers">
                {teachers.map(teacher =>
                <div className="teacher">
                    <a href="#miModal2">
                        <img src={teacher.img} alt={teacher.img} className="img-teacher"/>
                    </a>
                    <div id="miModal2" className="modal">
                        <div className="modal-contenido">
                            <a href="#" className="close">X</a>
                            <h2 className="name-teacher">{teacher.name}</h2>
                            <div className="container-teachers-info">
                            <img src={Yamid} alt="Teacher" className="img-teacher-modal"/>
                                <div className="title-items">
                                    <h4 className="title-item">CARGO:</h4>
                                    <h4 className="title-item">TITULO(S):</h4>
                                    <h4 className="title-item">ASIGNATURAS:</h4>
                                    <h4 className="title-item">GRADOS:</h4>
                                </div>
                                <div className="description-items">
                                    <p className="description-item">{teacher.cargo}</p>
                                    <p className="description-item">{teacher.titles}</p>
                                    <p className="description-item">{teacher.materias}</p>
                                    <p className="description-item">{teacher.grados}</p>
                                </div>

                            </div>
                        </div>  
                    </div>
                </div>
                )}
            </div>
        </div>
    )

}
export default Teachers;