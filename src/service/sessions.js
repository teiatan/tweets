import axios from "axios";

export async function setNewSession() {
    const { data } = await axios.post(`sessions`);
    return data;
}

export async function getSessionFollowers(id) {
    const { data } = await axios.put(`sessions/${id}`);
    return data;
};

