///creating a slice to out store

import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addtocart:(state,action)=>{
            //modifying the state directly mutating
            state.items.push(action.payload)
        },
        removeitem: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload.id);
        },
        
        clearcart:(state)=>{
            state.items.length=0
        }
    }
 
})

export const {addtocart,removeitem,clearcart}=cartSlice.actions
export default cartSlice.reducer