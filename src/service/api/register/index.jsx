import { api } from '../connection';
import { toast } from 'react-toastify';

export const Register = async (name, email, passWord, linkedin, gitHub) => {

    
    try {
        const response = await api.post(`Person`, {
            name: name,
            passWord:passWord,
            email:email,
            linkedin:linkedin,
            gitHub:gitHub
        });

        if (response.status === 201) return true;
    } catch (error) {
        if (error.message === 'Network Error') {
            toast.error('Network error.');
        } else {
            toast.error('Erro ao realizar o cadastro.');
        }
    }

}
    
