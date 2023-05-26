import { ChatList, ChatView } from '../index';

import './ChatBody.scss';

export const ChatBody = () => {
    return (
        <div className='chatbody'>
            <ChatList />
            <ChatView />
        </div>
    );
};
