import { Avatar } from '../Avatar';

import avatarImage from '../../assets/images/anonymous-avatar.png';

const ChatListItems = ({ image, name, createdDate, message, isOnline }) => {

	return (
		<div className='chatlist__item'>
			<Avatar
				image={image ? image : avatarImage}
				isOnline={isOnline}
			/>
			<div className='chatlist__conversation'>
				<p>{name}</p>
				<p>{message}</p>
				<span className='chatlist__date'>{createdDate}</span>
			</div>
		</div>
	);
};

export { ChatListItems }; 