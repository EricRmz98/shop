import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//actions
import { addToCart, addToCartThunk } from '../store/slices/cart.slice';

//styles
import '../styles/addProduct.css';

const AddProduct = ({ toggleAddProductPop, cart }) => {
    const dispatch = useDispatch();

    const { token } = useSelector((state) => state.user);

    const [sku, setSku] = useState('');

    const addProductToCart = (e) => {
        e.preventDefault();

        if (cart.length < 4) {
            dispatch(addToCartThunk({ sku, token }));
            toggleAddProductPop();
        } else {
            alert('No puedes agregar más de 4 prendas');
        }
    };

    return (
        <div className="pop-container">
            <div className="add-product-pop-up">
                <div className="">
                    <form onSubmit={addProductToCart}>
                        <div className="add-product-input-container">
                            <label className="ta-center" htmlFor="sku">
                                SKU
                            </label>
                            <input
                                id="sku"
                                type="text"
                                value={sku}
                                onChange={(e) => {
                                    setSku(e.target.value);
                                }}
                            />
                        </div>
                        <div className="add-product-btn-container">
                            <button
                                className="add-product-light-btn"
                                type="button"
                                onClick={toggleAddProductPop}
                            >
                                Cancelar
                            </button>
                            <button className="add-product-dark-btn">
                                Añadir
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;
