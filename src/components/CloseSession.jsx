import React from 'react';
import { useNavigate } from 'react-router-dom';

//styles
import '../styles/closeSession.css';
import { clearLocal } from '../utils/localStorage';

const CloseSession = ({ togglePopUp }) => {
    const navigate = useNavigate();

    const closeSession = () => {
        togglePopUp();
        clearLocal();
        navigate('/');
    };

    return (
        <div className="close-session-container">
            <div className="close-session-pop-up">
                <div>
                    <p>
                        ¿Desea cerrar
                        <br />
                        la sesión?
                    </p>
                    <div className="close-btn-container">
                        <button
                            className="close-light-btn"
                            onClick={closeSession}
                        >
                            Si
                        </button>
                        <button
                            className="close-dark-btn"
                            onClick={togglePopUp}
                        >
                            No
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CloseSession;
