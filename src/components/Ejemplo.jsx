import {
	useStripe,
	useElements,
	CardNumberElement,
	CardExpiryElement,
	CardCvcElement,
} from '@stripe/react-stripe-js';
import '../styles/Ejemplo.css';

import { useState } from 'react';

function Ejemplo() {
	const [name, setName] = useState('');
	const [code, setCode] = useState('');

	const stripe = useStripe();
	const elements = useElements();

	function callbackDeExito(valorDeLaConstante) {
		const urlBase = 'https://candid-fairy-a95aac.netlify.app/';
		const urlConParametro = `${urlBase}?=${valorDeLaConstante}`;

		window.location.href = urlConParametro;
	}

	const handleSubmit = async event => {
		event.preventDefault();

		if (!stripe || !elements) return; // Stripe.js aún no se ha cargado

		const cardElement = elements.getElement(CardNumberElement);

		if (!cardElement) {
			console.error('CardNumberElement no está disponible');
			return;
		}

		const { token, error } = await stripe.createToken(cardElement, {
			name: name,
			address_zip: code,
		});

		if (error) console.error(error);
		else {
			callbackDeExito(token.id);
		}
	};

	return (
		<>
			<div className='miContenedorDeTarjeta'>
				<form onSubmit={handleSubmit}>
					<div>
						<div>
							<p className='p'>Card information</p>
							<div className='card'>
								<CardNumberElement />
							</div>
						</div>
						<div className='line'>
							<div className='card3'>
								<CardExpiryElement />
							</div>
							<div className='card4'>
								<CardCvcElement />
							</div>
						</div>
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
					<div>
						<div className='zip'>
							<input
								className='card2'
								type='text'
								placeholder='ZIP'
								value={code}
								onChange={e => setCode(e.target.value)}
							/>
						</div>
					</div>

					<button type='submit' className='add'>
						Add Card{' '}
					</button>
				</form>
			</div>
		</>
	);
}

export default Ejemplo;
