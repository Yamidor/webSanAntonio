import React from 'react';
const StudentCreate = () => {
    return(
        <div className="container">
            <h2>FORMULARIO DE CONTACTO:</h2>
            <form action="">
                <input maxlength="50" name="nombre" required size="50" type="text" autofocus placeholder="Escribe tu nombre" /><label>Email:</label>
                <input name="email" required type="email" placeholder="Escribe tu email" />
            </form>
        </div>
    )

}
export default StudentCreate;