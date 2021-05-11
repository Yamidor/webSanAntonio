import React from 'react';
import Teacher from '../img/avatar.jpg'
import Silvio from '../img/silvio.jpeg'
import Yamid from '../img/yamid.jpeg'
import Olguer from '../img/olguer.jpeg'
import '../styles/teachers.css'
const Teachers = () => {
    return(
        <div className="container">
            <h1 className="title-teacher">Docentes</h1>
            <div className="container-teachers">
                <div className="teacher">
                    <a href="#miModal1">
                        <img src={Silvio} alt="Teacher" className="img-teacher"/>
                    </a>
                    <div id="miModal1" class="modal">
                        <div class="modal-contenido">
                            <a href="#" className="close">X</a>
                            <h2 className="name-teacher">SILVIO OBIDIO BURBANO RAMOS</h2>
                            <div className="container-teachers-info">
                                <img src={Silvio} alt="Teacher" className="img-teacher-modal"/>
                                <div className="title-items">
                                    <h4 className="title-item">CARGO:</h4>
                                    <h4 className="title-item">TITULO(S):</h4>
                                </div>
                                <div className="description-items">
                                    <p className="description-item">Rector</p>
                                    <p className="description-item">Licenciado en matematicas</p>
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
                <div className="teacher">
                    <a href="#miModal2">
                        <img src={Yamid} alt="Yamid" className="img-teacher"/>
                    </a>
                    <div id="miModal2" class="modal">
                        <div class="modal-contenido">
                            <a href="#" className="close">X</a>
                            <h2 className="name-teacher">RUBEN YAMID ORDOÑEZ GOMEZ</h2>
                            <div className="container-teachers-info">
                            <img src={Yamid} alt="Teacher" className="img-teacher-modal"/>
                                <div className="title-items">
                                    <h4 className="title-item">CARGO:</h4>
                                    <h4 className="title-item">TITULO(S):</h4>
                                    <h4 className="title-item">ASIGNATURAS:</h4>
                                    <h4 className="title-item">GRADOS:</h4>
                                </div>
                                <div className="description-items">
                                    <p className="description-item">Docente</p>
                                    <p className="description-item">Ingeniero de sistemas</p>
                                    <p className="description-item">Etica-Tecnologia e informatica</p>
                                    <p className="description-item">6° 7° 8° 9° 10° 11°</p>
                                </div>

                            </div>
                        </div>  
                    </div>
                </div>
                <div className="teacher">
                    <a href="#miModal3">
                        <img src={Olguer} alt="Olger" className="img-teacher"/>
                    </a>
                    <div id="miModal3" class="modal">
                        <div class="modal-contenido">
                            <a href="#" className="close">X</a>
                            <h2 className="name-teacher">OLGUER AGUIRRE</h2>
                            <div className="container-teachers-info">
                                <img src={Olguer} alt="Teacher" className="img-teacher-modal"/>
                                <div className="title-items">
                                    <h4 className="title-item">CARGO:</h4>
                                    <h4 className="title-item">TITULO(S):</h4>
                                    <h4 className="title-item">ASIGNATURAS:</h4>
                                    <h4 className="title-item">GRADOS:</h4>
                                </div>
                                <div className="description-items">
                                    <p className="description-item">Docente</p>
                                    <p className="description-item">Licenciado en matematicas</p>
                                    <p className="description-item">Matematicas-Fisica</p>
                                    <p className="description-item">8° 9° 10° 11°</p>
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Teachers;