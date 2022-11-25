import axios from 'axios';
import { useState } from 'react';

//utils
import { setLocalToken, clearLocalToken } from '../utils/token';

//styles
import '../styles/singIn.css';

const SignIn = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [token, setToken] = useState('');

    const submitSignInForm = (e) => {
        e.preventDefault();

        const form = {
            nombre: name,
            email,
        };

        axios
            .post('https://examen.pitayasoft.mx/api/User/Registro', form)
            .then((res) => setLocalToken(res.data.id));
    };

    return (
        <>
            <header className="sign-in-header"></header>
            <div className="sign-in-container">
                <form onSubmit={(e) => submitSignInForm(e)}>
                    <label className="ta-center" htmlFor="name">
                        Nombre
                    </label>
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    />

                    <label className="ta-center" htmlFor="email">
                        Correo electrónico
                    </label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />

                    <button className="dark-btn">Ingresar</button>
                </form>
            </div>
        </>
    );
};

export default SignIn;
