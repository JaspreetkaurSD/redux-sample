import { API_URL } from '../config.js';

export function login(params) {

    let formD = new FormData();
    formD.append('username', 'jass');
    formD.append('password', 'password');
    const object = {
        method: 'POST',
        body: formD
    }

    return fetch(`${API_URL}/login`, object)
            .then(res => res.json())
            .then(res => {
                return {response: res}
            })
            .catch(error => {
                return {error: error}
            })
}

export function settings(params) {

    let formD = new FormData();
    formD.append('username', 'jass');
    formD.append('password', 'password');
    const object = {
        method: 'POST',
        body: formD
    }
    return fetch(`${API_URL}/login`,object)
            .then(res => res.json())
            .then(res => {
                return {response: res}
            })
            .catch(error => {
                return {error: error}
            })
}