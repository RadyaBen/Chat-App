import { createSlice } from '@reduxjs/toolkit';

import { chatUsersData } from '../../data/chatUsersData';

const initialState = {
	usersData: chatUsersData,
	activeChatId: 1,
};

const chatSlice = createSlice({
	name: 'chat',
	initialState,
	reducers: {
		selectedChatId: (state, action) => {
			state.activeChatId = action.payload;
		},
	}
});

export const { selectedChatId } = chatSlice.actions;

export default chatSlice.reducer;