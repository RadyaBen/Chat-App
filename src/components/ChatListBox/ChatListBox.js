import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { searchUsersData } from '../../features/chat/chatSlice';

import avatarImage from '../../assets/images/anonymous-avatar.png';

import './ChatListBox.scss';

export const ChatListBox = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(searchUsersData(searchQuery));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchQuery]);

    const handleSearchQuery = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
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
                <input
                    type='text'
                    id='search-input'
                    placeholder='Search contacts...'
                    value={searchQuery}
                    onChange={handleSearchQuery}
                />
            </div>
        </div>
    );
};
