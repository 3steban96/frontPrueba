import axios from 'axios';
import config from '../../../../config'

export default async function apiEditUser(dataUser, id) {
    try {
        const response = await axios.patch(`${config.API_URL}/editUser/${id}`, dataUser);
        return response.data;
    } catch (error) {
        console.error('Error al agregar usuario:', error);
        throw error;
    }
}
