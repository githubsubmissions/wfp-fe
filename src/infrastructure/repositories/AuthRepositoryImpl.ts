import {updateApiClientHeaders} from '../utils/apiClient';
import AuthRepository from "../../domain/repositories/AuthRepository";


class AuthRepositoryImpl implements AuthRepository {
    async login(payload: { email: string; password: string }):  Promise<null | string> {
        const token = (payload.email === 'only@employee.com') || (payload.email === 'only@employee2.com') ? '123' : null;
        if (token) {
            updateApiClientHeaders({
                Authorization: `Bearer ${token}`,
            });
            localStorage.setItem('token', token);
            localStorage.setItem('email', payload.email)
        }
        return token;
    }

    async logout(): Promise<void> {
        localStorage.removeItem('token');
        localStorage.clear();
        updateApiClientHeaders({});
    }
}
export default AuthRepositoryImpl;
