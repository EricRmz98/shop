import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//icons
import { AiOutlineClose } from 'react-icons/ai';

//styles
import '../styles/productCard.css';

//utils
import { formatSize } from '../utils/format';

//components
import DeleteProduct from './DeleteProduct';

//actions
import { setProductIndex } from '../store/slices/productIndex.slice';
import { changeProductSizeInListThunk } from '../store/slices/list.slice';

const ProductCard = ({
    product,
    index,
    toggleDeleteProductPop,
    cart,
    token,
}) => {
    const dispatch = useDispatch();

    const list = useSelector((state) => state.list);

    const prepareToDeleteProduct = (index) => {
        dispatch(setProductIndex(index));
        toggleDeleteProductPop();
    };

    return (
        <div className="product-card">
            <button
                className="product-card-delete-btn"
                type="button"
                onClick={() => prepareToDeleteProduct(index)}
            >
                <AiOutlineClose />
            </button>
            <div className="product-card-img-container">
                <img src={product[0].imagen} alt="imagen del producto" />
            </div>
            <div className="product-card-info ta-start">
                <p className="m-0">{product[0].nombre}</p>

                <div>
                    <p className="m-0">TALLA</p>
                    <div className="product-card-size-buttons-container">
                        {product.map((productSize, sizeIndex) => (
                            <button
                                className={
                                    productSize.nombreTalla ===
                                    list[index].nombreTalla
                                        ? 'product-size-btn-dark'
                                        : 'product-size-btn-light'
                                }
                                key={productSize.idProducto}
                                type="button"
                                disabled={!productSize.disponibilidad}
                                onClick={() =>
                                    dispatch(
                                        changeProductSizeInListThunk(
                                            {
                                                index,
                                                sizeIndex,
                                                cart,
                                            },
                                            list,
                                            token
                                        )
                                    )
                                }
                            >
                                {formatSize(productSize.nombreTalla)}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
