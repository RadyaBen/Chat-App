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
		addMessageToChat: (state, action) => {
			state.usersData = state.usersData.map((userItem) => userItem.id === state.activeChatId
				? { ...userItem, conversation: [...userItem.conversation, action.payload] }
				: userItem
			);
		},
	},
});

export const { selectedChatId, addMessageToChat } = chatSlice.actions;

export default chatSlice.reducer;