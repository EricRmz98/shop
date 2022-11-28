import axios from 'axios';
import { useState } from 'react';

//styles
import '../styles/singIn.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/slices/user.slice';

const SignIn = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const submitSignInForm = (e) => {
        e.preventDefault();

        const form = {
            nombre: name.trim(),
            email: email.trim(),
        };

        if (name.trim() != '' && email.trim() != '') {
            axios
                .post('https://examen.pitayasoft.mx/api/User/Registro', form)
                .then((res) => {
                    dispatch(setUser({ name, token: res.data.id }));
                    navigate('/session');
                });
        } else {
            alert('Ingresa tu datos');
        }
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
