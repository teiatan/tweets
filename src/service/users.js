import axios from 'axios';

axios.defaults.baseURL = 'https://64934f44428c3d2035d1a3bf.mockapi.io/';

export async function getUsers(page, amount) {
    const { data } = await axios.get(`users?page=${page}&limit=${amount}`);
    return data;
};

export async function updateUserFollowers(id, newFollowers) {
    const { data } = await axios.put(`users/${id}`, {followers: newFollowers});
    return data;
};

export async function getUserFollowers(id) {
    const { data } = await axios.put(`users/${id}`);
    return data.followers;
};

export async function getUserById(id) {
    const { data } = await axios.put(`users/${id}`);
    return data;
};

export async function getSessionFollowers(id) {
    const { data } = await axios.put(`sessions/${id}`);
    return data;
};


