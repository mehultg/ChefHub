import { createSlice } from '@reduxjs/toolkit'

interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  role: string
}

interface UserState {
  data: User | null
  isAuthenticated: boolean
  loading: boolean
}

const initialState: UserState = {
  data: null,
  isAuthenticated: false,
  loading: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.data = action.payload
      state.isAuthenticated = true
    },
    logout: (state) => {
      state.data = null
      state.isAuthenticated = false
    },
  },
})

export const { setUser, logout } = userSlice.actions
export default userSlice.reducer
