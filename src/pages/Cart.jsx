import axios from 'axios';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

//components
import SmallProductCard from '../components/SmallProductCard';

//styles
import '../styles/cart.css';

const Cart = () => {
    const navigate = useNavigate();

    const list = useSelector((state) => state.list);
    const user = useSelector((state) => state.user);

    useEffect(() => {
        if (list.length == 0) {
            navigate('/session');
        }

        if (!user.token) {
            navigate('/');
        }
    }, [list, user]);

    const sendToFittingRoom = (token) => {
        axios
            .post('https://examen.pitayasoft.mx/api/User/TerminarRegistro', {
                IdRegistro: token,
            })
            .then(() => {
                alert('Tus prendas fueron enviadas al probador');
                window.location.reload(false);
            });
    };

    return (
        <>
            <header className="cart-header">
                <p className="m-0">
                    Bienvenido, {}
                    <br />
                    Escoge tus prendas
                </p>
            </header>
            <p className="cart-subtitle">ESTAS SON TUS OPCIONES</p>
            <div className="cart-container">
                {list.map((product, index) => (
                    <SmallProductCard
                        key={index}
                        product={product}
                        index={index}
                    />
                ))}
            </div>
            <div className="cart-button-container">
                <button
                    className="cart-dark-button"
                    type="button"
                    onClick={() => sendToFittingRoom(user.token)}
                >
                    Enviar a Probador
                </button>
                <button
                    className="cart-light-button"
                    type="button"
                    onClick={() => navigate('/session')}
                >
                    Regresar escanear SKU
                </button>
            </div>
            <footer className="cart-footer"></footer>
        </>
    );
};

export default Cart;
