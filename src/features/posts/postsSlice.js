// postsSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { POSTS } from '../../app/data';

export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: POSTS,
        postContent: {}, // Add a new state to store post content
    },
    reducers: {
        setPostContent: (state, action) => {
            const { path, content } = action.payload;
            state.postContent[path] = content;
        },
    },
});

export const { setPostContent } = postsSlice.actions;

export const selectPosts = (state) => state.posts.posts;
export const selectPostContent = (state, path) => state.posts.postContent[path];

export default postsSlice.reducer;
