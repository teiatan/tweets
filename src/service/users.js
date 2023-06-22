import axios from 'axios';

axios.defaults.baseURL = 'https://64934f44428c3d2035d1a3bf.mockapi.io/users';

export async function getUsers(page, amount) {
    const { data } = await axios.get(`?page=${page}&limit=${amount}`);
    return data;
};

export async function updateUserFollowers(id, newFollowers) {
    const { data } = await axios.put(`/${id}`, {followers: newFollowers});
    return data;
};

export async function getUserFollowers(id) {
    const { data } = await axios.put(`/${id}`);
    return data.followers;
};
