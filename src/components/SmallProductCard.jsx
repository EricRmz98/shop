//styles
import '../styles/smallProductCard.css';
import { formatSize } from '../utils/format';

//icons
import { VscTrash } from 'react-icons/vsc';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromCartThunk } from '../store/slices/cart.slice';

const SmallProductCard = ({ product, index }) => {
    const dispatch = useDispatch();
    const { list, user } = useSelector((state) => state);

    return (
        <div className="small-product-card">
            <div className="small-product-card-image-container">
                <img src={product.imagen} alt="imagen del producto" />
            </div>
            <div className="small-product-card-info-container">
                <p className="m-0">{product.nombre}</p>

                <p className="m-0">
                    TALLA <span>{formatSize(product.nombreTalla)}</span>
                </p>
            </div>
            <button
                type="button"
                onClick={() => {
                    dispatch(deleteFromCartThunk(index, list, user.token));
                }}
            >
                <VscTrash size={26} />
            </button>
        </div>
    );
};

export default SmallProductCard;
