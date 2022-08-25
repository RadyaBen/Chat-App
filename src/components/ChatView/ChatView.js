import { useState } from 'react';

import { Avatar } from '../Avatar';
import { chatItemsData } from '../../data';

const ChatView = () => {

	const [chats, setChats] = useState(chatItemsData);

	const chat = chats.find(chat => chat.id === 1);
	const conversation = chat.conversation.map(item => item);

	return (
		<div className='chat-view'>
			<div className='chat-view__header'>
				<div className='profile-wrapper'>
					<div className='profile-wrapper__current-user'>
						<Avatar
							image={chat.profileImage}
							isOnline='active'
						/>
						<p>{chat.profileName}</p>
					</div>
				</div>
			</div>
			<div className='chat-view__content'>
				<div className='chat-view__items'>
					{conversation && conversation.map((chatItem) => (
						<div key={chatItem.key}>
							<div>{chatItem.image}</div>
							<div>{chatItem.message}</div>
							<div>{chatItem.createdDate}</div>
							<div>{chatItem.time}</div>
						</div>
					))}
				</div>
			</div>
			<div className='chat-view__footer'>
				<div className='chat-view__input'>
					<input
						type='text'
						id='chat-message'
						placeholder='Type your message'
					/>
					<label htmlFor='chat-message'>
						<span className='fa fa-paper-plane'></span>
					</label>
				</div>
			</div>
		</div>
	);
};

export { ChatView };