import api from "../_api/baseApi";


export async function getAlluser(){
    try {
        const {data} = await api.get('users');
        return data;
    } catch (error) {
        return error;
    }
}


export async function getSingleduser({id}){
    try {
        const {data} = await api.get(`user/${id}`);
        return data;
    } catch (error) {
        return error;
    }
}


export async function addduser(user){
    try {
        return await api.post('user',user); 
    } catch (error) {
        return error;
    }
}


export async function updateduser(user){
    try {
        return await api.patch(`user${user.id}`,user); 
    } catch (error) {
        return error;
    }
}


export async function deleteduser({id}){
    try {
        return await api.delete(`user/${id}`,id); 
    } catch (error) {
        return error;
    }
}