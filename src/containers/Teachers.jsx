import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAddressCard} from '@fortawesome/free-solid-svg-icons';
import Silvio from '../img/silvio.jpeg'
import Tania from '../img/tania.jpeg'
import Yamid from '../img/yamid.jpeg'
import Olguer from '../img/olguer.jpeg'
import Ricardo from '../img/ricardo.jpeg'
import Yasmin from '../img/yasmin.jpeg'
import Livio from '../img/livio.jpeg'
import Edmundo from '../img/edmundo.jpeg'
import Ocana from '../img/ocaña.jpg'
import Adriana from '../img/adriana.jpeg'
import Geovany from '../img/geovany.jpeg'
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
                            name: "JEIDY TANIA JURADO SUAREZ",
                            titles: "Tecnico Administración De Empresas",
                            cargo: "Secretaria",
                            img: Tania,
                            materias: "",
                            grados: ""
                        },
                        {
                            id: 3, 
                            name: "RUBEN YAMID ORDOÑEZ GOMEZ",
                            titles: "Ingeniero de sistemas",
                            cargo: "Docente",
                            img: Yamid,
                            materias: "Etica-Tecnologia e informatica",
                            grados: "6° 7° 8° 9° 10° 11°"
                        },
                        {
                            id: 4, 
                            name: "OLGUER NICOLAS AGUIRRE MAYA",
                            titles: "Licenciado en matematicas",
                            cargo: "Docente",
                            img: Olguer,
                            materias: "Matematicas-Fisica",
                            grados: "8° 9° 10° 11°"
                        },
                        {
                            id: 5, 
                            name: "RICARDO ULISES CORAL ARCINIEGAS",
                            titles: "Licenciado en filosofia y letras",
                            cargo: "Docente",
                            img: Ricardo,
                            materias: "Filosofia-Castellano",
                            grados: "8° 9° 10° 11°"
                        },
                        {
                            id: 6, 
                            name: "DIANA YASMIN ARBOLEDA PIEDRADITA",
                            titles: "Licenciado en prescolar basica primaria e ingles",
                            cargo: "Docente",
                            img: Yasmin,
                            materias: "Ingeles-Catellano",
                            grados: "6° 7° 8° 9° 10° 11°"
                        },
                        {
                            id: 7, 
                            name: "LIVIO ERNESTO AGUIRRE AGUIRRE",
                            titles: "Licenciado en contaduria publica",
                            cargo: "Docente",
                            img: Livio,
                            materias: "Castellano-Matematicas-Estadistica-Geometrica-Competencias",
                            grados: "6° 7° 8° 9° 10° 11°"
                        },
                        {
                            id: 8, 
                            name: "JESUS EDMUNDO GONZALES GUALGUAN",
                            titles: "Licenciado en Sociales",
                            cargo: "Docente",
                            img: Edmundo,
                            materias: "Sociales-Religion",
                            grados: "6° 7° 8° 9° 10° 11°"
                        },
                        {
                            id: 9, 
                            name: "JORGE ERNESTO OCAÑA MONCAYO",
                            titles: "Licenciado en artes plasticas",
                            cargo: "Docente",
                            img: Ocana,
                            materias: "Artistica-Educacion Fisica",
                            grados: "6° 7° 8° 9° 10° 11°"
                        },
                        {
                            id: 10, 
                            name: "ADRIANA PATRICIA CASTRO DELGADO",
                            titles: "Licenciado en biologia",
                            cargo: "Docente",
                            img: Adriana,
                            materias: "Biologia-Quimica",
                            grados: "6° 7° 8° 9° 10° 11°"
                        },
                        {
                            id: 11, 
                            name: "YOBANY ADJEMIRO BURBANO LOPEZ",
                            titles: "Licenciado en educacion básica con énfasis en ciencias naturales y educación ambiental",
                            cargo: "Docente",
                            img: Geovany,
                            materias: "Primaria",
                            grados: "0° 1° 2° 3° 4° 15°"
                        }

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