import PropTypes from 'prop-types';

const ChatInput = (props) => {

	const { type, className, placeholder, value, onChange, onKeyDown } = props;

	return (
		<input
			type={type}
			className={className}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
			onKeyDown={onKeyDown}
		/>
	);
};

ChatInput.propTypes = {
	type: PropTypes.string,
	className: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	onKeyDown: PropTypes.func.isRequired,
};

export { ChatInput };