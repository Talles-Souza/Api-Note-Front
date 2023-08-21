import { api } from '../connection';
import { toast } from 'react-toastify';
import jwt_decode from 'jwt-decode';

export const Login = async (email, passWord) => {
    var tokenDecodificado = null;
    try {
        const response = await api.post(`Person/login`, {
            email: email,
            passWord: passWord
        });
        console.log(response)
        if (response.status === 200) {
            tokenDecodificado = jwt_decode(response.data.acess_token);
            tokenDecodificado['token'] = response.data.acess_token;
            api.defaults.headers["Authorization"] = `Bearer ${response.data.acess_token}`;
            console.log(tokenDecodificado);
            return tokenDecodificado;
        }else{
            return false;
        }
    } catch (error) {
        if (error.message === 'Network Error') {
            toast.error('Network error.');
        } else {
            toast.error('Erro ao realizar o login.');
        }
    }

}