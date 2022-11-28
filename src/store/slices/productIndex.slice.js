import { createSlice } from '@reduxjs/toolkit';

export const productIndexSlice = createSlice({
    name: 'productIndex',
    initialState: null,
    reducers: {
        setProductIndex: (state, action) => {
            return action.payload;
        },
    },
});

export const { setProductIndex } = productIndexSlice.actions;

export default productIndexSlice.reducer;
