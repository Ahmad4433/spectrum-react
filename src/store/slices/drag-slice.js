import { createSlice } from "@reduxjs/toolkit";

const drageSlice = createSlice({
  name: "drag",
  initialState: {
    isDrag: false,
    id:null,
    items:[],
    itemId:null,
    delteItemId:null,
    sourceIndex:null,
    destinationIndex:null

  },
  reducers: {
    setStatus(state, action) {
      state.isDrag = action.payload;
    },
    setId(state,action){
        state.id = action.payload
    },
    setItems(state,action){
        console.log(action.payload)
        state.items.push(action.payload)
    },
    setItemId(state,action){

      state.itemId = action.payload

    },
    setOndeleteItem(state,action){
    
      state.delteItemId = action.payload

    },
    setSourceIndex(state,action){
      state.sourceIndex = action.payload
    },
    setDestinationIndex(state,action){
      state.destinationIndex = action.payload
    }

  },
});

export const dragActions = drageSlice.actions;
export default drageSlice;
