import { useState } from 'react';

import { ChatListItems } from '../ChatListItems';
import { chatUsersData } from '../../data';
import avatarImage from '../../assets/images/anonymous-avatar.png';

import './ChatList.scss';

const ChatList = ({ onSelectedChatId }) => {
	const [activeChatId, setActiveChatId] = useState(1);

	const handleActiveChat = (id) => {
		setActiveChatId(id); // Save the current id, which was received from the child's class, to the state
		onSelectedChatId(id);
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
				{chatUsersData.map((chat, index) => {
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