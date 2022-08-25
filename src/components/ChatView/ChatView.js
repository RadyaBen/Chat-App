import { useState } from 'react';

import { ChatItem } from '../ui/ChatItem';
import { Avatar } from '../ui/Avatar';
import { chatItemsData } from '../../data';

const ChatView = ({ selectedChatId }) => {

	const [chats, setChats] = useState(chatItemsData);

	const chat = chats.find(chat => chat.id === selectedChatId); // By default, the selectedChatId value is set to 1
	const conversation = chat.conversation.map(item => item);

	return (
		<div className='chat-view'>
			<div className='chat-view__header'>
				<div className='profile-wrapper'>
					<div className='profile-wrapper__current-user'>
						{chat && (
							<>
								<Avatar
									image={chat.profileImage}
									isOnline='active'
								/>
								<p>{chat.profileName}</p>
							</>
						)}
					</div>
				</div>
			</div>
			<div className='chat-view__content'>
				<div className='chat-view__items'>
					{conversation && conversation.map((chatItem) => (
						<ChatItem
							key={chatItem.key}
							image={chatItem.image}
							user={chatItem.type ? chatItem.type : 'me'}
							createdDate={chatItem.createdDate}
							time={chatItem.time}
							message={chatItem.message}
						/>
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