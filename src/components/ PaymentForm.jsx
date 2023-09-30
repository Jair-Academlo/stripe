import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import '../App.css';
import { useState } from 'react';
function PaymentForm() {
	const [name, setName] = useState('');

	const stripe = useStripe();
	const elements = useElements();

	function callbackDeExito(valorDeLaConstante) {
		const urlBase = 'https://candid-fairy-a95aac.netlify.app/';
		const urlConParametro = `${urlBase}?=${valorDeLaConstante}`;

		window.location.href = urlConParametro;
	}

	const handleSubmit = async event => {
		event.preventDefault();

		if (!stripe || !elements) {
			return;
		}

		const { token, error } = await stripe.createToken(
			elements.getElement(CardElement),
			{ name }
		);

		if (error) {
			console.error(error);
			alert(error.code);
		} else {
			callbackDeExito(token.id);
		}
	};

	return (
		<>
			<form id='payment-form' onSubmit={handleSubmit} className='uu1'>
				<p className='p'>Card information</p>
				<div className='card5'>
					<CardElement />
				</div>

				<div>
					<div className='name'>
						<p className='p'>Cardholder name</p>
						<input
							className='card2'
							type='text'
							placeholder='Full name on card'
							value={name}
							onChange={e => setName(e.target.value)}
						/>
					</div>
				</div>

				<button type='submit' className='add'>
					Add Card
				</button>
			</form>
		</>
	);
}

export default PaymentForm;
