import React, { Component } from 'react';
import Adduser from './adduser';
import * as apiInfo from '../services/apiUrl';
import httpRequest from '../services/httpRequest'
import FormValues from './formValues';
import { connect } from 'react-redux';
import { ACTION_CREATORS } from "../helpers/user";
class AddingUser extends Component {
    state = {
        id: '',
        loader: false
    }
    componentDidMount() {
        this.getProjectList()

    }

    getProjectList = () => {
        httpRequest(apiInfo.users.url, apiInfo.users.getrequestType, null, null).then((response) => {
            const userList = response.data;
            this.props.onDataGet(userList)
        });
    }

    handleClick = event => {
        console.log(event.currentTarget.id)
        this.setState({ ...this.state, id: event.currentTarget.id });
        let newID = event.currentTarget.id;

        httpRequest(apiInfo.del.url + '/' + newID, apiInfo.del.requestType, null, null).then((response) => {
            this.getProjectList()

        })
    }
    postUserValue = (data) => {
        const Userdetail = {
            "id": data.id,
            "Name": data.Name,
            "Designation": data.Designation,
            "Phone": data.Phone,
        };

        httpRequest(apiInfo.users.url, apiInfo.users.requestType, Userdetail, null).then((response) => {
            console.log("response", response);
        })
        this.getProjectList();
    }
    render() {
        return (
            <>
                <Adduser onSubmit={(data) => this.postUserValue(data)}></Adduser>
                <FormValues />
                <ul className="person">
                    {this.props.userList.map(user => <li onClick={this.handleClick} key={user.id} id={user.id}><p className="userhead">{user.Name}</p>
                        <p className="desg">
                            ({user.Designation})
                    </p>
                        <p>
                            Call: {user.Phone}
                        </p>
                    </li>)}
                </ul>


            </>
        )
    }
}
let mapStoreToProps = (store) => {
    return {
        userList: store.postUserValueReducer.userList
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onDataGet: (data) => dispatch({ type: 'GET_DATA', data: data })
    }
}
export default connect(mapStoreToProps, mapDispatchToProps)(AddingUser);