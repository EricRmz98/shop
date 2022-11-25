import React, { useEffect, useState } from 'react';

//utils
import { clearLocal, getLocalName } from '../utils/localStorage';

//styles
import '../styles/session.css';
import { useNavigate } from 'react-router-dom';
import CloseSession from '../components/CloseSession';

const Session = () => {
    // const [token, setToken] = useState('')
    // const [name, setName] = useState('')

    // useEffect(() => {

    // }, [])

    const [showCloseSession, setShowCloseSession] = useState(false);

    const togglePopUp = () => {
        setShowCloseSession(!showCloseSession);
    };

    return (
        <>
            {showCloseSession && <CloseSession togglePopUp={togglePopUp} />}
            <header className="session-header">
                <p className="m-0">
                    Bienvenido, {getLocalName()}
                    <br />
                    Escoge tus prendas
                </p>
            </header>
            <div className="session-container">
                <div>
                    <p>0/0</p>
                </div>
                <div>
                    <button
                        className="transparent-btn"
                        type="button"
                        onClick={togglePopUp}
                    >
                        Cerrar Sesión
                    </button>
                </div>
            </div>
            <footer className="session-footer"></footer>
        </>
    );
};

export default Session;
