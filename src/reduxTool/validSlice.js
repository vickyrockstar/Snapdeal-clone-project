import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
  userName:"SignUp",
}

export const validSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    isValidUser: (state) => {
      state.value = true;
    },
    userName:(state, action)=>{
      state.userName =action.payload;
      // console.log(state.userName)
    }
  },
})
export const { isValidUser, userName } = validSlice.actions

export default validSlice.reducer