import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { ChatItem } from '../ui/ChatItem';
import { Avatar } from '../ui/Avatar';
import { chatItemsData } from '../../data';

const ChatView = ({ selectedChatId }) => {

	const [chatItems, setChatItems] = useState(
		JSON.parse(localStorage.getItem('conversation')) || chatItemsData
	);
	const [chatMessage, setChatMessage] = useState('');

	const selectedChat = chatItems.find(chat => chat.id === selectedChatId); // By default, the selectedChatId value is set to 1

	useEffect(() => {
		localStorage.setItem('conversation', JSON.stringify(chatItems));
	}, [chatItems]);

	const handleInputChange = (e) => {
		setChatMessage(e.target.value);
	};

	const handleKeyDown = (e) => {
		if (e.keyCode === 13) {
			addMessageToChat();
		}
	};

	const getCurrentDateTime = () => {
		const dateObj = new Date();
		const options = { hour: 'numeric', hour12: true, minute: 'numeric' };

		return dateObj.toLocaleDateString('en', options);
	};

	const addMessageToChat = () => {

		if (!chatMessage) {
			return
		}

		const newMessageItem = {
			key: uuidv4(),
			image: 'http://emilcarlsson.se/assets/mikeross.png',
			type: '',
			createdDate: getCurrentDateTime(),
			message: chatMessage,
		};

		setChatItems((prevChatItem) => {
			return prevChatItem.map((chatItem) => {
				return chatItem.id === selectedChatId
					// Add the message to the current conversation
					? { ...chatItem, conversation: [...chatItem.conversation, newMessageItem] }
					: chatItem
			});
		});

		setChatMessage('');
	};

	return (
		<div className='chat-view'>
			<div className='chat-view__header'>
				<div className='profile-wrapper'>
					<div className='profile-wrapper__current-user'>
						{selectedChat && (
							<>
								<Avatar
									image={selectedChat.profileImage}
									isOnline='active'
								/>
								<p>{selectedChat.profileName}</p>
							</>
						)}
					</div>
				</div>
			</div>
			<div className='chat-view__content'>
				<div className='chat-view__items'>
					{selectedChat.conversation &&
						selectedChat.conversation.map((chatItem) => (
							<ChatItem
								key={chatItem.key}
								image={chatItem.image}
								user={chatItem.type ? chatItem.type : 'me'}
								createdDate={chatItem.createdDate}
								time={chatItem.time}
								message={chatItem.message}
							/>
						))
					}
				</div>
			</div>
			<div className='chat-view__footer'>
				<div className='chat-view__input'>
					<input
						type='text'
						id='chat-message'
						value={chatMessage}
						placeholder='Type your message'
						onChange={handleInputChange}
						onKeyDown={handleKeyDown}
					/>
					<button htmlFor='chat-message' onClick={addMessageToChat}>
						<span className='fa fa-paper-plane'></span>
					</button>
				</div>
			</div>
		</div>
	);
};

export { ChatView };