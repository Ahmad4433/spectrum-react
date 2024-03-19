import {createSlice} from '@reduxjs/toolkit'


const tenetSlice = createSlice({

    name:'tenet',
    initialState:{
        itemId:null,
        item:null,
        onDeleteId:null,
        isSelected:false
    },
    reducers:{
        setId(state,action){
            state.itemId = action.payload
        },
        setItem(state,action){
            state.item = action.payload
        },
        setOndeleteId(state,action){
            state.onDeleteId = action.payload
        },
        setSelected(state,action){
            state.isSelected = action.payload
        }

    }

})

export const tenetActions = tenetSlice.actions
export default tenetSlice