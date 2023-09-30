import MaskedInput from 'react-text-mask';

// eslint-disable-next-line react/prop-types
function TarjetaInput({ value, onChange }) {
	return (
		<MaskedInput
			mask={[
				/\d/,
				/\d/,
				/\d/,
				/\d/,
				' ',
				/\d/,
				/\d/,
				/\d/,
				/\d/,
				' ',
				/\d/,
				/\d/,
				/\d/,
				/\d/,
				' ',
				/\d/,
				/\d/,
				/\d/,
				/\d/,
			]}
			guide={false}
			value={value}
			onChange={onChange}
			placeholder='4242 4242 4242 4242'
		/>
	);
}

export default TarjetaInput;
