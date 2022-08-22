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
			</div>
		</div>
	);
};

export { ChatList };