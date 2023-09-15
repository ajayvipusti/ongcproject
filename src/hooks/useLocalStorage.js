export function setToken( response ) {
    localStorage.setItem("token", JSON.stringify(response?.access_token));
    localStorage.setItem("user", JSON.stringify(response?.data?.data));
  }
  
  export function removeToken() {
    localStorage.removeItem("token");
  }
  
  export function logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  }
  
  export function clearStorage() {
    localStorage.clear();
  }
  
  export function getUser() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      return user;
    } else {
      return null;
    }
  }
  
  export function getToken() {
    const token = JSON.parse(localStorage.getItem("token"));
    if (token) {
      return token;
    } else {
      return null;
    }
  }