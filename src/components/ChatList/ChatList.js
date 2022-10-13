import { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ChatListBox } from '../ChatListBox';
import { ChatListItems } from '../ChatListItems';

import { selectedChatId } from '../../features/chat/chatSlice';

import './ChatList.scss';

const ChatList = () => {
	const [activeChatId, setActiveChatId] = useState(1);

	const { usersData } = useSelector((state) => state.chat);
	const dispatch = useDispatch();

	const handleActiveChat = (id) => {
		setActiveChatId(id); // Save the current id, which was received from the child's class, to the state
		dispatch(selectedChatId(id));
	};

	const sortedUsersData = useMemo(() => {
		return Object.values([...usersData]).sort((a, b) => {
			// Convert the date to timestamps in milliseconds
			const latestCreatedAtA = Date.parse(new Date(a.conversation.at(-1)?.createdDateTime));
			const latestCreatedAtB = Date.parse(new Date(b.conversation.at(-1)?.createdDateTime));

			// Check for the NaN values first and sort them to the bottom. 
			// Then sort by timestamps in milliseconds in descending order
			return !isNaN(latestCreatedAtB) - !isNaN(latestCreatedAtA) || latestCreatedAtB - latestCreatedAtA;
		});
	}, [usersData]);

	return (
		<div className='chatlist'>
			<ChatListBox />
			<div className='chatlist__header'>
				<h1>Chats</h1>
			</div>
			<div className='chatlist__items'>
				{sortedUsersData?.map((chat, index) => {
					return (
						<ChatListItems
							{...chat}
							key={chat.id}
							activeChatId={activeChatId}
							isOnline={chat.isOnline ? 'active' : ''}
							animationDelay={index + 1}
							onActiveChatClick={handleActiveChat}
						/>
					);
				})}
			</div>
		</div>
	);
};

export { ChatList };