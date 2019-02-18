import axios from 'axios';

const apiUrl = () => {
    switch (window.origin) {
        case "http://localhost:3000":
            return 'http://localhost:3004'

        default:
            return 'http://localhost:3004'

    }
};
axios.defaults.baseURL = apiUrl();

async function httpRequest(url, requestType, postData=null, params=null) {
    axios.defaults.headers={
        'Content-Type': 'application/json',
        'token': 'nahi hai',
        'UserId':'nahi hai',
        'UserType': 'nahi hai',
        'DeviceID': 'nahi hai'
    };
let res;
res = await axios({method: requestType, url: url, data: postData, params: params});
    return res;
// try {
//     res = await axios({method: requestType, url: url, data: postData, params: params});
//     return res;
// } catch (e) {
//     throw new Error();
// }
}


export default httpRequest;