import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
    name: "category",
    initialState: {
        categories: []
    },
    reducers: {
        // for fetch all gategory
        setCategories(state, action) {
            state.categories = action.payload
        },
        // add a new category
        addCategory(state, action) {
            state.categories.push(action.payload)
        },

    }
})
const categoryReducer = categorySlice.reducer
const categoryActions = categorySlice.actions

export { categoryReducer, categoryActions }