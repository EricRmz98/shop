import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { addToCart } from './cart.slice';

export const listSlice = createSlice({
    name: 'list',
    initialState: [],
    reducers: {
        addFirstToList: (state, action) => {
            return [action.payload, ...state];
        },

        deleteFromList: (state, action) => {
            const index = action.payload;
            const list = state;

            list.splice(index, 1);

            return list;
        },

        changeSizeFromList: (state, action) => {
            const { index, sizeIndex, cart } = action.payload;
            const list = state;

            list[index] = cart[index][sizeIndex];

            return list;
        },
    },
});

export const changeProductSizeInListThunk =
    (dataIndex, list, token) => (dispatch) => {
        const { index, sizeIndex, cart } = dataIndex;

        const productToRemove = list[index];
        const productToAdd = cart[index][sizeIndex];

        //remove product in current size
        axios
            .post('https://examen.pitayasoft.mx/api/User/QuitarProducto', {
                Idproducto: productToRemove.idProducto,
                Idregistro: token,
            })
            .then(() => {
                //add product in new size
                axios
                    .post(
                        'https://examen.pitayasoft.mx/api/User/AgregarProducto',
                        {
                            sku: productToAdd.sku,
                            Idproducto: productToAdd.idProducto,
                            Idtalla: productToAdd.idTalla,
                            Idregistro: token,
                        }
                    )
                    .then(() => {
                        dispatch(changeSizeFromList(dataIndex));
                    });
            });
    };

export const addFirstToListThunk =
    ({ productSizes, token }) =>
    (dispatch) => {
        try {
            const firstInStock = productSizes.find(
                (product) => product.disponibilidad === true
            );

            if (!firstInStock) {
                throw 'este producto no esta disponible';
            }

            const data = {
                sku: firstInStock.sku,
                Idproducto: firstInStock.idProducto,
                Idtalla: firstInStock.idTalla,
                Idregistro: token,
            };

            axios
                .post(
                    'https://examen.pitayasoft.mx/api/User/AgregarProducto',
                    data
                )
                .then(() => {
                    dispatch(addFirstToList(firstInStock));
                    dispatch(addToCart(productSizes));
                });
        } catch (error) {
            throw error;
        }
    };

export const { addFirstToList, deleteFromList, changeSizeFromList } =
    listSlice.actions;

export default listSlice.reducer;
