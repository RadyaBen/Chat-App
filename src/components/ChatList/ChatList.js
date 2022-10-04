import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ChatListItems } from '../ChatListItems';
import { selectedChatId } from '../../features/chat/chatSlice';
import avatarImage from '../../assets/images/anonymous-avatar.png';

import './ChatList.scss';

const ChatList = () => {
	const [activeChatId, setActiveChatId] = useState(1);

	const { usersData } = useSelector((state) => state.chat);
	const dispatch = useDispatch();

	const handleActiveChat = (id) => {
		setActiveChatId(id); // Save the current id, which was received from the child's class, to the state
		dispatch(selectedChatId(id));
	};

	return (
		<div className='chatlist'>
			<div className='chatlist__box'>
				<div className='chatlist__avatar'>
					<img
						className='chatlist__image'
						src={avatarImage}
						alt='Anonymous Avatar'
						title='Anonymous Avatar'
					/>
				</div>
				<div className='chatlist__search'>
					<label htmlFor='search-input'>
						<span className='fa fa-search'></span>
					</label>
					<input type='text' id='search-input' placeholder='Search contacts...' />
				</div>
			</div>
			<div className='chatlist__header'>
				<h1>Chats</h1>
			</div>
			<div className='chatlist__items'>
				{usersData && usersData.map((chat, index) => {
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