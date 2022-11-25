const getLocalToken = () => {
    return localStorage.getItem('token');
};

const setLocalToken = (token) => {
    localStorage.setItem('token', token);
};

const getLocalName = () => {
    return localStorage.getItem('name');
};

const setLocalName = (name) => {
    localStorage.setItem('name', name);
};

const clearLocal = () => {
    localStorage.clear();
};

export { getLocalToken, setLocalToken, getLocalName, setLocalName, clearLocal };
