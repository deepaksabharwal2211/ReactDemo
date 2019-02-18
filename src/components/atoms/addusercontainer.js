import React, { Component } from 'react';
import Adduser from './adduser';
import * as apiInfo from '../services/apiUrl';
import httpRequest from '../services/httpRequest'
import FormValues from './formValues';
import { connect } from 'react-redux';
import { ACTION_CREATORS } from "../helpers/user";
class AddingUser extends Component {
    state = {
        userList: [],
        id: '',
        loader: false
    }
    componentDidMount() {

        httpRequest(apiInfo.users.url, apiInfo.users.getrequestType, null, null).then((response) => {
            console.log("response", response.data);
            const userList = response.data;
            console.log(userList)
            this.setState({ userList });
        });
    }

    getProjectList = () => {
        httpRequest(apiInfo.users.url, apiInfo.users.getrequestType, null, null).then((response) => {
            console.log("response", response.data);
            const userList = response.data;
            console.log(userList)
            this.setState({ userList });
        });
    }

    handleClick = event => {
        console.log(event.currentTarget.id)
        this.setState({ ...this.state, id: event.currentTarget.id });
        let newID = event.currentTarget.id;

        httpRequest(apiInfo.del.url + '/' + newID, apiInfo.del.requestType, null, null).then((response) => {
            console.log(response);
            console.log(response.data);
            this.state.userList.splice(0, 1);
            let newUserList = this.state.userList;
            this.setState({ userList: newUserList });
            alert('deleted');
            this.getProjectList();
        })
    }
    postUserValue = (data) => {
        console.log('testing')
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
                    {this.state.userList.map(user => <li onClick={this.handleClick} key={user.id} id={user.id}><p className="userhead">{user.Name}</p>
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


// const mapStateToProps = state => ({ 'filterEstimate': state.estimate.filterEstimate });

// const mapDispatchToProps = dispatch => ({
//     filterEstimateClicked: (value) => dispatch(ACTION_CREATORS.estimateFilter(value))
// });

// export default connect(mapStateToProps, mapDispatchToProps)(AddingUser);
export default AddingUser;