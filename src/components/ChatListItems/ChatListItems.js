const ChatListItems = ({ name, createdDate, message }) => {

	return (
		<div className='chatlist__item'>
			<div className='chatlist__conversation'>
				<p>{name}</p>
				<p>{message}</p>
				<span className='chatlist__date'>{createdDate}</span>
			</div>
		</div>
	);
};

export { ChatListItems }; 