const Avatar = ({ image, isOnline }) => {
	return (
		<div className='avatar'>
			<img
				className='avatar__image'
				src={image}
				alt='Avatar Image'
				title='Avatar Image'
			/>
			<span className={`isOnline ${isOnline}`}></span>
		</div>
	);
};

export { Avatar };