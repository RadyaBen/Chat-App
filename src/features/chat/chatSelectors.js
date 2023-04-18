export const selectChat = (state) => state.chat;

export const selectChatItem = (state) =>
    state.chat.usersData.find((userItem) => userItem.id === state.chat.activeChatId);
