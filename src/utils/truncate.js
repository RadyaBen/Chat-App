export const truncateAfterWord = (str, maxLength, placeholder = '...') => {
	// First, clip the message string to the desired length
	// Next, clip the result of that to the last message word boundaries
	return (str.length > maxLength)
		? `${str.substring(0, str.substring(0, maxLength - placeholder.length).lastIndexOf(' '))}${placeholder}`
		: str;
};