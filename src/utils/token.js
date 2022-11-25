const getLocalToken = () => {
    return localStorage.getItem('token');
};

const setLocalToken = (token) => {
    localStorage.setItem('token', token);
};

const clearLocalToken = () => {
    localStorage.removeItem('token');
};

export { getLocalToken, setLocalToken, clearLocalToken };
