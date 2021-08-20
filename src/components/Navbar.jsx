import { Link, useHistory } from 'react-router-dom';
import '../styles/navbar.css'

const Navbar = (props) =>{
    const {navbar} = props;
    return(
        <nav className={navbar}>
            <ul>
                <li className="li">
                    <Link  to="/">
                        <b>Inicio</b> 
                    </Link>
                </li>
                <li className="li">
                    <Link  to="/view">
                        <b>Visión</b> 
                    </Link>
                </li>
                <li className="li">
                    <Link  to="/mission">
                        <b>Misión</b> 
                    </Link>
                </li>
                <li className="li">
                    <Link  to="/teachers">
                        <b>Docentes</b> 
                    </Link>
                </li>
                <li className="li">
                    <Link  to="/students">
                        <b>Estudiantes</b> 
                    </Link>
                </li>
            </ul>
            
            
        </nav>
    )
}

export default Navbar;