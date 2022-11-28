import { useDispatch, useSelector } from 'react-redux';
import { deleteFromCartThunk } from '../store/slices/cart.slice';
import { setProductIndex } from '../store/slices/productIndex.slice';

//styles
import '../styles/deleteProduct.css';

const DeleteProduct = ({ toggleDeleteProductPop, token }) => {
    const productIndex = useSelector((state) => state.productIndex);
    const cart = useSelector((state) => state.cart);
    const list = useSelector((state) => state.list);

    const dispatch = useDispatch();

    return (
        <div className="pop-container">
            <div className="delete-product-pop-up">
                <div>
                    <p>
                        ¿Desea eliminar
                        <br />
                        la prenda?
                    </p>
                    <div className="delete-product-btn-container">
                        <button
                            className="close-light-btn"
                            type="button"
                            onClick={() => {
                                dispatch(
                                    deleteFromCartThunk(
                                        productIndex,
                                        list,
                                        token
                                    )
                                );
                                toggleDeleteProductPop();
                            }}
                        >
                            Si
                        </button>
                        <button
                            className="close-dark-btn"
                            type="button"
                            onClick={() => {
                                toggleDeleteProductPop();
                                dispatch(setProductIndex(null));
                            }}
                        >
                            No
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteProduct;
