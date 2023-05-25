import PropTypes from 'prop-types';

import './Avatar.scss';

export const Avatar = ({ image, isOnline }) => {
    return (
        <div className='avatar'>
            <img
				className='avatar__image'
				src={image} alt='Avatar'
				title='Avatar'
			/>
            <span className={`isOnline ${isOnline}`}></span>
        </div>
    );
};

Avatar.propTypes = {
    image: PropTypes.string.isRequired,
    isOnline: PropTypes.string.isRequired,
};
