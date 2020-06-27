export const isAuthenticated = () => {
    var token = localStorage.getItem("innoscriptaUserToken");
    if (token != null)
        return true;
    else
        return false;
};