import axios from "axios";

const API_URL = "http://localhost:5000/";

class AuthService {
    login(data) {
        return axios
            .post(API_URL + "login", data)
            .then(response => {
                if (response.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(response.data.user));
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

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));;
    }
}

export default new AuthService();