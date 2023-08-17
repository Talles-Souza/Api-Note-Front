import { api } from '../connection';
import { toast } from 'react-toastify';

export const Login = async (email, passWord) => {
    
    try {
        const response = await api.post(`Person/login`, {
            email:email,
            passWord:passWord
        });

        if (response.status === 200) return true;
    } catch (error) {
        if (error.message === 'Network Error') {
            toast.error('Network error.');
        } else {
            toast.error('Erro ao realizar o login.');
        }
    }

}