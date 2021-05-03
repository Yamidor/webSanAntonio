import Logo from '../img/logo.jpg'
import '../styles/Header.css'
const Header= (props)=>{
    const {header} = props
    return(
        <div className = {header}>
            <img src={Logo} alt="Logo" className="logo"/>
            <h1 className="title" >Institución Educativa San Antonio de Padua</h1>
        </div>
    )
}
export default Header;