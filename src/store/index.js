import {configureStore} from '@reduxjs/toolkit'
import uiSlice from './slices/ui-slice'
import drageSlice from './slices/drag-slice'
const store = configureStore({
    reducer:{ui:uiSlice.reducer,drag:drageSlice.reducer}
})

export default store