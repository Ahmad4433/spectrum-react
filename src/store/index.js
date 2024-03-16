import {configureStore} from '@reduxjs/toolkit'
import uiSlice from './slices/ui-slice'
import tenetSlice from './slices/tenets-sllice'
import drageSlice from './slices/drag-slice'
const store = configureStore({
    reducer:{ui:uiSlice.reducer,drag:drageSlice.reducer,tenet:tenetSlice.reducer}
})

export default store