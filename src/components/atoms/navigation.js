import React, { Component } from 'react';
import logo from '../../logo.svg';
import httpRequest from '../services/httpRequest';
import * as apiInfo from '../services/apiUrl';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FunctionBased from '../examples/functionBased';
import ClassBased from '../examples/classBased';
import AddingUser from '../atoms/addusercontainer';



class Navigation extends Component {
    clickHandler = (name) => {
        alert(name)
    }
    componentDidMount() {
        
    }
    
    render() {
        return (
            <Router>
                <div>
                    <div className="header">
                        <ul>
                            <li><Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link></li>
                            <li><Link to="/functionbased">functionbased</Link></li>
                            <li><Link to="/classbased">classbased</Link></li>
                            <li><Link to="/addinguser">AddUser ({this.props.userList.length}) </Link></li>

                        </ul>
                    </div>
                    <Route component={() => <FunctionBased clickHandler={this.clickHandler.bind(this, 'Deepak')} />} exact path="/functionbased" />
                    <Route component={() => <ClassBased clickHandler={this.clickHandler.bind(this, 'Sabharwal')} />} exact path="/classbased" />
                    <Route component={AddingUser} exact path="/addinguser" />
                </div>
            </Router>
        )
    }
}
let mapStoreToProps = (store) => {
    return {
        userList: store.postUserValueReducer.userList
    }
}
export default connect(mapStoreToProps)(Navigation);