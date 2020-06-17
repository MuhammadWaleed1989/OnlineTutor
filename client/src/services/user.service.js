import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:5000/';
const UserID = JSON.parse(localStorage.getItem('UserID'));

class UserService {

    getAllUser(userTypeID) {
        return axios.post(API_URL + 'users', { UserTypeID: userTypeID });
    }
    postUserData(data) {

        return axios.put(API_URL + 'users/' + UserID, data, { headers: authHeader() });
    }
    getUserByID(userID) {
        return axios.get(API_URL + 'user/' + userID + '/edit', { headers: authHeader() });
    }
    getTutorBio(userID) {
        return axios.get(API_URL + 'gettutorbio/' + userID, { headers: authHeader() });
    }

    postTutorBio(data) {
        return axios.post(API_URL + 'savetutorbio/' + UserID, data, { headers: authHeader() });
    }

    updateTutorBio(data) {
        return axios.put(API_URL + 'updatetutorbio/' + UserID, data, { headers: authHeader() });
    }
    updateUserProfileAccess(data) {
        return axios.put(API_URL + 'updateUserProfileAccess', data, { headers: authHeader() });
    }

}

export default new UserService();