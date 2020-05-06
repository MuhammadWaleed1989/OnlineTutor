import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:5000/';

class UserService {

    getAllUser(userTypeID) {
        return axios.post(API_URL + 'users', { UserTypeID: userTypeID });
    }
    postUserData(data) {

        return axios.put(API_URL + 'users/' + JSON.parse(localStorage.getItem('UserID')), data);
    }
    getPublicContent() {
        return axios.get(API_URL + 'all');
    }

    getUserBoard() {
        return axios.get(API_URL + 'user', { headers: authHeader() });
    }

    getModeratorBoard() {
        return axios.get(API_URL + 'mod', { headers: authHeader() });
    }

    getAdminBoard() {
        return axios.get(API_URL + 'admin', { headers: authHeader() });
    }
}

export default new UserService();