import React from 'react';
import { useNavigate } from 'react-router-dom';

//styles
import '../styles/closeSession.css';
import { clearLocal } from '../utils/localStorage';

const CloseSession = ({ toggleCloseSessionPop }) => {
    const navigate = useNavigate();

    const closeSession = () => {
        toggleCloseSessionPop();
        clearLocal();
        navigate('/');
    };

    return (
        <div className="pop-container">
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
                            type="button"
                            onClick={closeSession}
                        >
                            Si
                        </button>
                        <button
                            className="close-dark-btn"
                            type="button"
                            onClick={toggleCloseSessionPop}
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
