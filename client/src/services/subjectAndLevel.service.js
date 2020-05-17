import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:5000/';

class SubjectAndLevelService {

    getallsubjects() {
        return axios.get(API_URL + 'getallsubjects', { headers: authHeader() });
    }

    savesubject(data) {
        return axios.post(API_URL + 'savesubject', data, { headers: authHeader() });
    }

    getsubjectbyid(SubjectID) {
        return axios.get(API_URL + 'getsubjectbyid/' + SubjectID + '/edit', { headers: authHeader() });
    }

    updatesubjectname(SubjectID) {
        return axios.put(API_URL + 'updatesubjectname/' + SubjectID, { headers: authHeader() });
    }

    deletesubject(SubjectID) {
        return axios.delete(API_URL + 'deletesubject/' + SubjectID, { headers: authHeader() });
    }

    getAllLevels() {
        return axios.get(API_URL + 'getAllLevels', { headers: authHeader() });
    }

    saveLevel(data) {
        return axios.post(API_URL + 'saveLevel', data, { headers: authHeader() });
    }

    getLevelByID(LevelID) {
        return axios.get(API_URL + 'getLevelByID/' + LevelID + '/edit', { headers: authHeader() });
    }

    updateLevelName(LevelID) {
        return axios.put(API_URL + 'updateLevelName/' + LevelID, { headers: authHeader() });
    }

    deleteLevel(LevelID) {
        return axios.delete(API_URL + 'deleteLevel/' + LevelID, { headers: authHeader() });
    }

    getAllSubjectsAndLevel() {
        return axios.get(API_URL + 'getAllSubjectsAndLevel', { headers: authHeader() });
    }

    savesubjectlevels(data) {
        return axios.post(API_URL + 'savesubjectlevels', data, { headers: authHeader() });
    }

    getsubjectlevelsbyID(LevelID) {
        return axios.get(API_URL + 'getsubjectlevelsbyID/' + LevelID + '/edit', { headers: authHeader() });
    }

    updatesubjectlevels(LevelID) {
        return axios.put(API_URL + 'updatesubjectlevels/' + LevelID, { headers: authHeader() });
    }

    deletesubjectlevels(LevelID) {
        return axios.delete(API_URL + 'deletesubjectlevels/' + LevelID, { headers: authHeader() });
    }
}

export default new SubjectAndLevelService();