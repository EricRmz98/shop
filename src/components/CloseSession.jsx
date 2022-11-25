import React from 'react';

//styles
import '../styles/closeSession.css';

const CloseSession = ({ togglePopUp }) => {
    const navigate = useNavigate();

    const closeSession = () => {
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
                    <div>
                        <button onClick={closeSession()}>Si</button>
                        <button onClick={togglePopUp}>No</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CloseSession;
