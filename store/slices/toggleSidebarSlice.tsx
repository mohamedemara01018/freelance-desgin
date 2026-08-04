import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
// import { RootState } from "@reduxjs/toolkit/query";

const toggleSidbarSlice = createSlice({
    name: 'toggleSidbarSlice',
    initialState: {
        isOpen: false
    },
    reducers: {
        onOpen: (state) => {
            state.isOpen = true
        },
        onClose: (state) => {
            state.isOpen = false
        }
    },
})

export const { onOpen, onClose } = toggleSidbarSlice.actions
// select
export const selectToggleSidebar = (state: RootState) => state.toggleSidbarSlice
export default toggleSidbarSlice.reducer