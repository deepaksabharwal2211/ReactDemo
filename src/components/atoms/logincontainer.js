import React, { Component } from 'react';
import Login from '../atoms/login';
// import httpRequest from '../../services/httpRequest';
// import * as apiInfo from '../../services/apiurl';
class LoginForms extends Component {

    submitVal2 = (data) => {
        let inputDto = {
            "Username": data.Email,
            "password": data.Password
        };
        console.log(inputDto)
    }

    render() {
        return (
            <div>
                <Login onSubmit={this.submitVal2}></Login>
                {/* <p>loaging successful?? : {this.state.isLoading?'true':'false'}</p> */}
            </div>

        )
    }
}
export default LoginForms;
