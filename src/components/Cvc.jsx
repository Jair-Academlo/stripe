import MaskedInput from 'react-text-mask';

// eslint-disable-next-line react/prop-types
function CvcInput({ value, onChange }) {
	return (
		<MaskedInput
			mask={[/\d/, /\d/, /\d/]}
			guide={false}
			value={value}
			onChange={onChange}
		/>
	);
}

export default CvcInput;
