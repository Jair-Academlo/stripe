import MaskedInput from 'react-text-mask';

function ExpireInput({ value, onChange }) {
	return (
		<MaskedInput
			mask={[/\d/, /\d/, '/', /\d/, /\d/]}
			guide={true}
			value={value}
			onChange={onChange}
		/>
	);
}

export default ExpireInput;
