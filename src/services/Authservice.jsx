import { clearStorage, getToken, getUser } from '../hooks/useLocalStorage';
import {loginApi} from '../features/actions/auth/loginAction'

const AuthService = {
  isLoggedIn: () => {
    return !!getToken();
  },
  login: async (data,dispatch,navigate) => {
    const response = await dispatch(loginApi(data));
    if (response) {
      navigate('/admin');
    }
  },
  logout: () => {
    clearStorage()    
    // Redirect the user to the login page
    window.location.href = '/';
  },
  getUser: () => {
    return getUser();
  },
};

export default AuthService;