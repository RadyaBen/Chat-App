import { Avatar } from '../Avatar';
import avatarImage from '../../assets/images/anonymous-avatar.png';

import './ChatListItems.scss';

const ChatListItems = ({ id, ...props }) => {

	const handleChatClick = (id) => {
		props.highlightActiveChat(id); // Pass the id to the parent class 
	};

	return (
		<div
			style={{ animationDelay: `0.${props.animationDelay}s` }}
			className={`chatlist__item ${props.activeChatId === id ? 'active' : ''}`}
			onClick={() => handleChatClick(id)}
		>
			<Avatar
				image={props.image ? props.image : avatarImage}
				isOnline={props.isOnline}
			/>
			<div className='chatlist__conversation'>
				<p className='chatlist__name'>{props.name}</p>
				<p className='chatlist__message'>{props.message.length > 76 ? props.message.substring(0, 76) + '...' : props.message}</p>
			</div>
			<div className='chatlist__date'>{props.createdDate}</div>
		</div>
	);
};

export { ChatListItems }; 