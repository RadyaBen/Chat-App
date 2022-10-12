import { Avatar } from '../Avatar';

import './ChatItem.scss';

const ChatItem = (props) => {

	const { user, message, createdDateTime, image } = props;

	return (
		<div
			style={{ animationDelay: '0.8s' }}
			className={`chat-view__item ${user ? user : ''}`}
		>
			<div className='chat-view__content'>
				<div className='chat-view__message'>{message}</div>
				<div className='chat-view__meta'>
					{/* eslint-disable-next-line */}
					<span>{createdDateTime.replace(/\:\d+ /, ' ')}</span>
				</div>
			</div>
			<Avatar isOnline='active' image={image} />
		</div>
	);
};

export { ChatItem };