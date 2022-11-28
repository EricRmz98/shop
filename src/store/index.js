import { configureStore } from '@reduxjs/toolkit';

//slices
import cartSlice from './slices/cart.slice';
import listSlice from './slices/list.slice';
import productIndexSlice from './slices/productIndex.slice';
import userSlice from './slices/user.slice';

export default configureStore({
    reducer: {
        user: userSlice,
        cart: cartSlice,
        list: listSlice,
        productIndex: productIndexSlice,
    },
});
