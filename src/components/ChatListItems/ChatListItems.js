import PropTypes from 'prop-types';

import { Avatar } from '../ui/Avatar';

import avatarImage from '../../assets/images/anonymous-avatar.png';

import { truncateAfterWord } from '../../utils';

import './ChatListItems.scss';

const ChatListItems = (props) => {

	const {
		id,
		onActiveChatClick,
		animationDelay,
		activeChatId,
		profileImage,
		profileName,
		isOnline,
		conversation,
	} = props;

	const handleChatClick = (id) => {
		onActiveChatClick(id); // Pass the id to the parent class 
	};

	const createMarkup = (html) => {
		return { __html: html };
	};

	return (
		<div
			style={{ animationDelay: `0.${animationDelay}s` }}
			className={`chatlist__item ${activeChatId === id ? 'active' : ''}`}
			onClick={() => handleChatClick(id)}
		>
			<Avatar
				image={profileImage ? profileImage : avatarImage}
				isOnline={isOnline}
			/>
			<div className='chatlist__conversation'>
				<p
					className='chatlist__name'
					dangerouslySetInnerHTML={createMarkup(profileName)}
				>
				</p>
				<div className='chatlist__message'>
					{conversation.length > 0 ? (
						truncateAfterWord(conversation.at(-1)?.message, 76)
					) : (
						<p>No messages</p>
					)}
				</div>
			</div>
			<div className='chatlist__date'>
				{/* eslint-disable-next-line */}
				{conversation.at(-1)?.createdDateTime.slice(0, 10).replace(/[\,]/g, '')}
			</div>
		</div>
	);
};

ChatListItems.propTypes = {
	id: PropTypes.number.isRequired,
	onActiveChatClick: PropTypes.func.isRequired,
	animationDelay: PropTypes.number.isRequired,
	activeChatId: PropTypes.number.isRequired,
	profileImage: PropTypes.string.isRequired,
	profileName: PropTypes.string.isRequired,
	isOnline: PropTypes.string.isRequired,
	conversation: PropTypes.array.isRequired,
};

export { ChatListItems };