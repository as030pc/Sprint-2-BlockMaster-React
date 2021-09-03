import React, { Component } from 'react'
import { BrowserRouter as Router, 
        Switch,
        Route,

} from 'react-router-dom'

import Registro from '../components/Registro'
import ListContainer from '../containers/ListContainer'
import Login from '../components/Login'

export default class AppRouter extends Component {
    render() {
        return (
            <Router> 
                <Switch>
                <Route exact path = "/login" component ={Login} /> 
                    <Route exact path = "/registro" component ={Registro} />
                    <Route exact path = "/" component ={ListContainer} />
                
                </Switch>
            </Router>
    
        )
    }
}
