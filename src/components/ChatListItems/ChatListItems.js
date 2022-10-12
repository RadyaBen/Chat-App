import { Avatar } from '../ui/Avatar';

import avatarImage from '../../assets/images/anonymous-avatar.png';

import './ChatListItems.scss';

const ChatListItems = ({ id, ...props }) => {

	const handleChatClick = (id) => {
		props.onActiveChatClick(id); // Pass the id to the parent class 
	};

	return (
		<div
			style={{ animationDelay: `0.${props.animationDelay}s` }}
			className={`chatlist__item ${props.activeChatId === id ? 'active' : ''}`}
			onClick={() => handleChatClick(id)}
		>
			<Avatar
				image={props.profileImage ? props.profileImage : avatarImage}
				isOnline={props.isOnline}
			/>
			<div className='chatlist__conversation'>
				<p className='chatlist__name'>{props.profileName}</p>
				<p className='chatlist__message'>
					{
						props.conversation[props.conversation.length - 1]?.message.length > 76
							? props.conversation[props.conversation.length - 1]?.message.substring(0, 76) + '...'
							: props.conversation[props.conversation.length - 1]?.message
					}
				</p>
			</div>
			<div className='chatlist__date'>
				{props.conversation[props.conversation.length - 1]?.createdDateTime.slice(0, 9)}
			</div>
		</div>
	);
};

export { ChatListItems };