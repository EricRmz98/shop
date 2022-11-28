import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

//styles
import '../styles/session.css';

//components
import CloseSession from '../components/CloseSession';
import AddProduct from '../components/AddProduct';
import ProductCard from '../components/ProductCard';
import DeleteProduct from '../components/DeleteProduct';

const Session = () => {
    const [showCloseSessionPop, setShowCloseSessionPop] = useState(false);
    const [showAddProductPop, setShowAddProductPop] = useState(false);
    const [showDeleteProductPop, setShowDeleteProductPop] = useState(false);

    const navigate = useNavigate();
    const cart = useSelector((state) => state.cart);
    const user = useSelector((state) => state.user);

    const toggleCloseSessionPop = () => {
        setShowCloseSessionPop(!showCloseSessionPop);
    };

    const toggleAddProductPop = () => {
        setShowAddProductPop(!showAddProductPop);
    };

    const toggleDeleteProductPop = () => {
        setShowDeleteProductPop(!showDeleteProductPop);
    };

    const goToCart = () => {
        if (cart.length != 0) {
            navigate('/cart');
        }
    };

    useEffect(() => {
        if (!user.token) {
            navigate('/');
        }
    }, [user]);

    return (
        <>
            {showCloseSessionPop && (
                <CloseSession toggleCloseSessionPop={toggleCloseSessionPop} />
            )}
            {showAddProductPop && (
                <AddProduct
                    toggleAddProductPop={toggleAddProductPop}
                    cart={cart}
                />
            )}
            {showDeleteProductPop && (
                <DeleteProduct
                    toggleDeleteProductPop={toggleDeleteProductPop}
                    token={user.token}
                />
            )}

            <header className="session-header">
                <p className="m-0">
                    Bienvenido, {user.name}
                    <br />
                    Escoge tus prendas
                </p>
            </header>
            <div className="session-container">
                <div>
                    {cart.map((product, index) => (
                        <ProductCard
                            key={index}
                            product={product}
                            index={index}
                            toggleDeleteProductPop={toggleDeleteProductPop}
                            cart={cart}
                            token={user.token}
                        />
                    ))}

                    <p
                        className={
                            cart.length > 0
                                ? 'session-counter'
                                : 'session-counter-0'
                        }
                    >{`${cart.length}/4`}</p>

                    <div className="session-btn-container">
                        <button
                            className={
                                cart.length > 0
                                    ? 'session-dark-btn'
                                    : 'session-light-btn'
                            }
                            type="button"
                            onClick={toggleAddProductPop}
                        >
                            Escanea tus productos
                        </button>

                        {cart.length > 0 && (
                            <>
                                <button
                                    className="session-light-btn"
                                    type="button"
                                    onClick={goToCart}
                                >
                                    Enviar a carrito
                                </button>
                                <button className="session-clear-cart-btn">
                                    Limpiar carrito
                                </button>
                            </>
                        )}
                    </div>
                </div>

                <button
                    className="session-transparent-btn"
                    type="button"
                    onClick={toggleCloseSessionPop}
                >
                    Cerrar Sesión
                </button>
            </div>
            <footer className="session-footer"></footer>
        </>
    );
};

export default Session;
