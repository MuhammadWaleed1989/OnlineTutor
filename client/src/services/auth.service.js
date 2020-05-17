import axios from "axios";
import authHeader from './auth-header';

const API_URL = "http://localhost:5000/";

class AuthService {
    login(data) {
        return axios
            .post(API_URL + "login", data)
            .then(response => {
                if (response.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(response.data.user[0]));
                    localStorage.setItem("accessToken", JSON.stringify(response.data.accessToken));
                    localStorage.setItem("UserID", JSON.stringify(response.data.user[0].UserID));
                }

                return response.data;
            });
    }

    logout() {
        localStorage.removeItem("user");
        localStorage.removeItem("accessToken");
        localStorage.removeItem("UserID");
    }

    register(data) {
        return axios.post(API_URL + "user",
            data
        );
    }

    getUserTypes() {
        return axios.get(API_URL + "usertypes",

        );
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));;
    }

    // register(data) {
    //     return axios.post(API_URL + "updatePassword",
    //         data
    //     );
    // }

    updatePassword(data) {
        return axios.put(API_URL + 'updatePassword/' + JSON.parse(localStorage.getItem('UserID')), data, { headers: authHeader() });
    }

}

export default new AuthService();