import api from "../_api/baseApi";


export async function getAllEnroll(){
    try {
        const {data} = await api.get('enrolls');
        return data;
    } catch (error) {
        return error;
    }
}


export async function getSingleEnroll(id){
    try {
        const {data} = await api.get(`enroll/${id}`);
        return data[0];
    } catch (error) {
        return error;
    }
}


export async function addEnroll(enroll){
    try {
        return await api.post('enroll',enroll); 
    } catch (error) {
        return error;
    }
}


export async function updateEnroll(enroll){
    try {
        return await api.patch(`enroll/${enroll.id}`,enroll); 
    } catch (error) {
        return error;
    }
}


export async function deleteEnroll({id}){
    try {
        return await api.delete(`enroll/${id}`,id); 
    } catch (error) {
        return error;
    }
}