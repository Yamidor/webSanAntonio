import '../styles/modal-teacher.css'
const ModalTeacher = ()=>{
    return(
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
    )
}
export default ModalTeacher;