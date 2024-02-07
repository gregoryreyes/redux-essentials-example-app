import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: '1',
    title: 'First Post!',
    content: 'Lorem ipsum dolor sit amet'
  },
  {
    id: '2',
    title: 'Second Post!',
    content: 'Second lorem ipsum'
  }
]

const postsSlice = createSlice({
  name: 'posts',
  initialState, 
  reducers: {}
})

export default postsSlice.reducer