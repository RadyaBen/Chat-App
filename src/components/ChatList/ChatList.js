import avatarImage from '../../assets/images/anonymous-avatar.png';

import './ChatList.scss';

const ChatList = () => {
	return (
		<div className='chatlist'>
			<div className='chatlist__box'>
				<div className='chatlist__avatar'>
					<img
						className='chatlist__image'
						src={avatarImage}
						alt='Anonymous Avatar'
						title='Anonymous Avatar'
					/>
				</div>
				<div className='chatlist__search'>
					<label htmlFor='search-input'>
						<span className='fa fa-search'></span>
					</label>
					<input type='text' id='search-input' placeholder='Search contacts...' />
				</div>
			</div>
			<div className='chatlist__header'>
				<h1>Chats</h1>
			</div>
		</div>
	);
};

export { ChatList };