import { ChatList } from '../ChatList';
import { ChatView } from '../ChatView';

import './ChatBody.scss';

const ChatBody = () => {
	return (
		<div className='chatbody'>
			<ChatList />
			<ChatView />
		</div>
	);
};

export { ChatBody };