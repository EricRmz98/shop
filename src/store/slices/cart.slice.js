import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import {
    addFirstToList,
    addFirstToListThunk,
    deleteFromList,
} from './list.slice';
import { setProductIndex } from './productIndex.slice';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            return [action.payload, ...state];
        },

        deleteFromCart: (state, action) => {
            const index = action.payload;
            const cart = state;

            cart.splice(index, 1);

            return cart;
        },
    },
});

export const addToCartThunk =
    ({ sku, token }) =>
    (dispatch) => {
        axios
            .post('https://examen.pitayasoft.mx/api/User/BuscarProducto', {
                sku,
            })
            .then((res) => {
                try {
                    dispatch(
                        addFirstToListThunk({ productSizes: res.data, token })
                    );
                    // dispatch(addToCart(res.data));
                } catch (error) {
                    alert(error);
                }
            })
            .catch(() => alert('Producto no encontrado'));
    };

export const deleteFromCartThunk =
    (productIndex, list, token) => (dispatch) => {
        axios
            .post('https://examen.pitayasoft.mx/api/User/QuitarProducto', {
                Idproducto: list[productIndex].idProducto,
                Idregistro: token,
            })
            .then(() => {
                dispatch(deleteFromCart(productIndex));
                dispatch(deleteFromList(productIndex));
                dispatch(setProductIndex(null));
            });
    };

export const { addToCart, deleteFromCart } = cartSlice.actions;

export default cartSlice.reducer;
