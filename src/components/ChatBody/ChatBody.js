import { useState } from 'react';

import { ChatList } from '../ChatList';
import { ChatView } from '../ChatView';

import './ChatBody.scss';

const ChatBody = () => {
	const [activeChatId, setActiveChatId] = useState(1);

	const handleActiveChat = (activeId) => {
		setActiveChatId(activeId)
	};

	return (
		<div className='chatbody'>
			<ChatList onSelectedChatId={handleActiveChat} />
			<ChatView selectedChatId={activeChatId} />
		</div>
	);
};

export { ChatBody };