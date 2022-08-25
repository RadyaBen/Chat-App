import { Avatar } from '../Avatar';

const ChatItem = (props) => {

	const { user, message, createdDate, time, image } = props;

	return (
		<div className={`chat-view__item ${user ? user : ''}`}>
			<div className='chat-view__content'>
				<div className='chat-view__message'>{message}</div>
				<div className='chat-view__meta'>
					<span>{createdDate}</span>
					<span>{time}</span>
				</div>
			</div>
			<Avatar isOnline='active' image={image} />
		</div>
	);
};

export { ChatItem };