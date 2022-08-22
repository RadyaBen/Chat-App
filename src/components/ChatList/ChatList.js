import { ChatListItems } from '../ChatListItems';
import { chatUsersData } from '../../data';

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
			<div className='chatlist__items'>
				{chatUsersData.map((chat) => {
					return (
						<ChatListItems
							key={chat.id}
							name={chat.name}
							image={chat.image}
							createdDate={chat.createdDate}
							message={chat.message}
						/>
					);
				})}
			</div>
		</div>
	);
};

export { ChatList };