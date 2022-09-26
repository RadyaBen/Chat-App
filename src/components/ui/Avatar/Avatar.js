import './Avatar.scss';

const Avatar = ({ image, isOnline }) => {
	return (
		<div className='avatar'>
			<img
				className='avatar__image'
				src={image}
				alt='Avatar'
				title='Avatar'
			/>
			<span className={`isOnline ${isOnline}`}></span>
		</div>
	);
};

export { Avatar };