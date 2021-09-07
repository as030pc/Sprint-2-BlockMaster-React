import React, { Component } from 'react'
import { BrowserRouter as Router, 
        Switch,
        Route,

} from 'react-router-dom'

import Registro from '../components/Registro'
import ListContainer from '../containers/ListContainer'
import Login from '../components/Login'
import Detalle from '../components/Detalle'
import Principal from '../components/Principal'


export default class AppRouter extends Component {
    render() {
        return (
            <Router> 
                <Switch>
                    <Route exact path = "/detalle" component = {Detalle} />
                    <Route exact path = "/login" component ={Login} /> 
                    <Route exact path = "/registro" component ={Registro} />
                    <Route exact path = "/" component ={ListContainer} />
                    <Route exact path = "/principal" component = {Principal} />
                    
                </Switch>
            </Router>
    
        )
    }
}
