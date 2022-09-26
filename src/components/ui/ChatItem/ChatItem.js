import { Avatar } from '../Avatar';

const ChatItem = (props) => {

	const { user, message, createdDateTime, image } = props;

	return (
		<div className={`chat-view__item ${user ? user : ''}`}>
			<div className='chat-view__content'>
				<div className='chat-view__message'>{message}</div>
				<div className='chat-view__meta'>
					<span>{createdDateTime}</span>
				</div>
			</div>
			<Avatar isOnline='active' image={image} />
		</div>
	);
};

export { ChatItem };