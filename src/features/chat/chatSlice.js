import { createSlice } from '@reduxjs/toolkit';

import { chatUsersData } from '../../data/chatUsersData';

const initialState = {
	usersData: chatUsersData,
	filteredUsersData: chatUsersData,
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
			const newUsersData = state.usersData.map((userItem) => userItem.id === state.activeChatId
				? { ...userItem, conversation: [...userItem.conversation, action.payload] }
				: userItem
			);
			state.usersData = newUsersData;
			state.filteredUsersData = newUsersData;
		},
		searchUsersData: (state, action) => {
			const excludeValues = ['id', 'profileImage', 'isOnline'];
			const lowerCaseString = action.payload.toLowerCase().trim();

			const filteredUsersData = state.usersData
				.filter((userItem) => {
					return Object.keys(userItem).some((key) =>
						excludeValues.includes(key)
							? false
							: userItem[key].toString().toLowerCase().includes(lowerCaseString)
					);
				})
				.map(userItem => {
					const newProfileName = userItem.profileName?.replace(
						new RegExp(action.payload, 'gi'),
						(match) => `<mark style="background: #2769AA; color: white;">${match}</mark>`
					);
					return {
						...userItem,
						profileName: newProfileName,
					};
				});

			return {
				...state,
				filteredUsersData: action.payload.length > 0 ? filteredUsersData : [...state.usersData],
			};
		},
	},
});

export const {
	selectedChatId,
	addMessageToChat,
	searchUsersData,
} = chatSlice.actions;

export default chatSlice.reducer;