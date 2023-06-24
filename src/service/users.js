import axios from 'axios';

axios.defaults.baseURL = 'https://64934f44428c3d2035d1a3bf.mockapi.io/';

export async function getUsers(page, amount) {
    const { data } = await axios.get(`users?page=${page}&limit=${amount}`);
    return data;
};

export async function getUserById(id) {
    const { data } = await axios.put(`users/${id}`);
    return data;
};

export async function updateUser(id, newData) {
    const { data } = await axios.put(`users/${id}`, newData);
    return data;
};

export async function getAllUsers() {
    const { data } = await axios.get(`users`);
    return data;
};