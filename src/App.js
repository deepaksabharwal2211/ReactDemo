import React, { Component } from 'react';
import { rootPath, loginPath } from './components/helpers/routes';
import './App.css';
import Navigation from './components/atoms/navigation';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from './components/helpers/store';
import Login from './components/atoms/login';
import * as apiInfo from './components/services/apiUrl';
import httpRequest from './components/services/httpRequest'
class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      isError: false
    };
  }
  submitVal2 = (data) => {
    let inputDto = {
      "Username": data.Email,
      "Password": data.Password,
      "DeviceID": Math.random()
    };
    if (inputDto.Username === "abc@abc.com" && inputDto.Password === "onlyme123") {
      httpRequest(apiInfo.post.url, apiInfo.post.requestType, inputDto, null).then((response) => {
        console.log("response", response);
        window.location.replace(rootPath);
      })
    }
    else {
      alert('wrong details');
    }




  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            {/* <ClassBased clickHandler={this.clickHandler.bind(this,'Deepak')}></ClassBased>
<FunctionBased clickHandler={this.clickHandler.bind(this,'Sabharwal')}></FunctionBased> */}
            {/* <Navigation></Navigation>*/}
            {/* <LoginForm></LoginForm> */}
            <Switch>
              <Route exact path={loginPath} render={() => (<Login {...this.state} onSubmit={(data) => this.submitVal2(data)} />)} />
              <Route exact path={rootPath} component={Navigation} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
