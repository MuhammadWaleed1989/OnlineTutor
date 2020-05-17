import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:5000/';
const UserID = JSON.parse(localStorage.getItem('UserID'));

class TutorService {

    getAllUser(userTypeID) {
        return axios.post(API_URL + 'users', { UserTypeID: userTypeID });
    }

    getTutorQualification(userID) {
        return axios.get(API_URL + 'gettutorqualifications/' + UserID, { headers: authHeader() });
    }

    postTutorQualification(data) {
        return axios.post(API_URL + 'savetutorqualification/' + UserID, data, { headers: authHeader() });
    }

    updateTutorQualification(data) {
        return axios.post(API_URL + 'savetutorbio/' + UserID, data, { headers: authHeader() });
    }

    getallsubjects() {
        return axios.get(API_URL + 'getallsubjects', { headers: authHeader() });
    }

    getAllLevelsBySubjectID(SubjectID) {
        return axios.get(API_URL + 'getAllLevelsBySubjectID/' + SubjectID, { headers: authHeader() });
    }

    getTutorAllSubjectsAndLevels() {
        return axios.get(API_URL + 'getTutorAllSubjectsAndLevels/' + UserID, { headers: authHeader() });
    }

    saveTutorSubjectAndLevels(data) {
        return axios.post(API_URL + 'saveTutorSubjectAndLevels/' + UserID, data, { headers: authHeader() });
    }




}

export default new TutorService();