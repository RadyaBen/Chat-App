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

export { ChatInput };