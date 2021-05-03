import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout'
import Home from '../containers/Home';
import Student from '../containers/Student';
import View from '../containers/View';
import Mission from '../containers/Mission';
import StudentCreate from '../containers/StudentCreate';

const App = () => {
    return(
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} /> 
                    <Route exact path="/view" component={View} /> 
                    <Route exact path="/mission" component={Mission} /> 
                    <Route exact path="/students" component={Student} />
                    <Route exact path="/student/create" component={StudentCreate} />        
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}
 export default App;