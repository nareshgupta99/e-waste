import axios from "axios";
import { privateAxios } from "./helper";

const APP_BASE_URL = "http://localhost:8181/api/auth";

class AuthService {
  registerVisitors(data) {
    return axios.post(APP_BASE_URL + "/register/visitor", data);
  }

  registerRecycler(data) {
    return axios.post(APP_BASE_URL + "/register/recycler", data);
  }

  login(data) {
    return axios.post(APP_BASE_URL + "/login", data);
  }

  isTokenValid(token) {
    if (!token) return false;

    const decodedToken = JSON.parse(atob(token.split(".")[1])); // decode jwt token
    const expirationDate = new Date(decodedToken.exp * 1000); // // Convert the 'exp' claim to milliseconds

    return expirationDate > new Date();
  }

  fetchUserRoles() {
    return privateAxios.get("/user/roles");
  }


}

export default AuthService = new AuthService();
