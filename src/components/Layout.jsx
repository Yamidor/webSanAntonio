
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Content from '../components/Content';
import Footer from '../components/Footer';
const Layout =({children}) =>{
    return(
        <div className="Main">
            <Header header={'header'}/>
            <Navbar navbar={'navbar'}/>
            <Sidebar sidebar={'sidebar'}/>
            <Content conten={'conten'} children ={children}/>
            <Footer footer={'footer'}/>
        </div>
    )
}

export default Layout;