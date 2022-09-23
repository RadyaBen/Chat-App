import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

import { ChatItem } from '../ui/ChatItem';
import { ChatInput } from '../ui/ChatInput';
import { Avatar } from '../ui/Avatar';
import { chatItemsData } from '../../data';
import messageNotification from '../../assets/sounds/message-notification.mp3';

const ChatView = ({ selectedChatId }) => {
	const [chatItems, setChatItems] = useState(
		JSON.parse(localStorage.getItem('conversation')) || chatItemsData
	);
	const [chatMessage, setChatMessage] = useState('');
	const [randomJokeMessage, setRandomJokeMessage] = useState(null);
	const [isBotMessage, setIsBotMessage] = useState(false);
	const [isClicked, setIsClicked] = useState(false);
	let timeoutRef = useRef(null);
	let messagesEndRef = useRef(null);

	const selectedChat = chatItems.find(chat => chat.id === selectedChatId); // By default, the selectedChatId value is set to 1
	const audio = new Audio(messageNotification);

	useEffect(() => {
		const controller = new AbortController();

		const axiosRequest = async () => {
			try {
				const { data } = await axios.get('https://api.chucknorris.io/jokes/random/');
				setRandomJokeMessage(data.value);
			} catch (error) {
				if (axios.isAxiosError(error)) {
					console.log('Axios Error with Message: ' + error.message);
				} else {
					console.log(error);
				}
			}
		};

		axiosRequest();

		return () => {
			controller.abort();
		};
	}, [isBotMessage]);

	useEffect(() => {
		localStorage.setItem('conversation', JSON.stringify(chatItems));

		if (messagesEndRef.current) {
			scrollToBottom();
		}
	}, [chatItems]);

	useEffect(() => {
		if (isClicked) {

			if (timeoutRef.current) {
				// Clear the running timer and start a new one each time the user clicks
				clearTimeout(timeoutRef.current);
			}

			timeoutRef.current = setTimeout(() => {
				addMessageToChat(true);
				audio.play();
			}, 5000);

			setIsBotMessage(false);
			setIsClicked(false);
		}
		// eslint-disable-next-line
	}, [isClicked]);

	const handleInputChange = (e) => {
		setChatMessage(e.target.value);
	};

	const handleKeyDown = (e) => {
		if (e.keyCode === 13) {

			if (isDisabled()) {
				return
			}

			setIsClicked(true);
			setIsBotMessage(true);
			addMessageToChat();
		}
	};

	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
	};

	const isDisabled = () => {
		return chatMessage.trim().length === 0;
	};

	const getCurrentDateTime = () => {
		const dateObj = new Date();
		const options = { hour: 'numeric', hour12: true, minute: 'numeric' };

		return dateObj.toLocaleDateString('en', options);
	};

	const addMessageToChat = (isRandomAutoresponse) => {
		if (chatMessage || isRandomAutoresponse) {
			const newMessageItem = {
				key: uuidv4(),
				image: isBotMessage ? selectedChat.profileImage : 'http://emilcarlsson.se/assets/mikeross.png',
				type: isBotMessage ? 'other' : '',
				createdDateTime: getCurrentDateTime(),
				message: isBotMessage ? randomJokeMessage : chatMessage,
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
		}
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
					{selectedChat.conversation.length === 0 ? (
						<p>No messages here yet...</p>
					) : (
						<>
							{selectedChat.conversation &&
								selectedChat.conversation.map((chatItem) => (
									<ChatItem
										key={chatItem.key}
										image={chatItem.image}
										user={chatItem.type ? chatItem.type : 'me'}
										createdDateTime={chatItem.createdDateTime}
										message={chatItem.message}
									/>
								))
							}
						</>
					)}
					<div ref={messagesEndRef} />
				</div>
			</div>
			<div className='chat-view__footer'>
				<div className='chat-view__input'>
					<ChatInput
						type='text'
						className='chat-view__input'
						placeholder='Type your message'
						value={chatMessage}
						onChange={handleInputChange}
						onKeyDown={handleKeyDown}
					/>
					<button
						disabled={isDisabled()}
						onClick={() => {
							addMessageToChat();
							setIsClicked(true);
							setIsBotMessage(true);
						}}>
						<span className='fa fa-paper-plane'></span>
					</button>
				</div>
			</div>
		</div>
	);
};

export { ChatView };