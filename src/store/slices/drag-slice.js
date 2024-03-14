import { createSlice } from "@reduxjs/toolkit";

const drageSlice = createSlice({
  name: "drag",
  initialState: {
    isDrag: false,
    id:null,
    items:[]
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
    }

  },
});

export const dragActions = drageSlice.actions;
export default drageSlice;
