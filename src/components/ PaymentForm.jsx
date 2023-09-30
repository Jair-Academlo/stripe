/* import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
 */ import { useState } from 'react';
import TarjetaInput from './Tarjeta';

function PaymentForm() {
	/* const stripe = useStripe();
	const elements = useElements(); */
	const [numeroTarjeta, setNumeroTarjeta] = useState('');

	const handleChange = e => {
		setNumeroTarjeta(e.target.value);
	};
	/* const estiloCardElement = {
		base: {
			iconColor: 'red',
			color: 'red',
			fontWeight: '500',
			fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
			fontSize: '16px',
			fontSmoothing: 'antialiased',
			':-webkit-autofill': {
				color: '#fce883',
			},
			'::placeholder': {
				color: '#87BBFD',
			},
		},
		invalid: {
			iconColor: '#FFC7EE',
			color: '#FFC7EE',
		},
	}; */

	/* function callbackDeExito(valorDeLaConstante) {
		// Construimos la URL a la que queremos redirigir, añadiendo el valor de la constante como parámetro
		const urlBase = 'https://candid-fairy-a95aac.netlify.app/';
		const urlConParametro = `${urlBase}?=${valorDeLaConstante}`;

		// Redirigimos a la nueva URL
		window.location.href = urlConParametro;
	} */

	/* const handleSubmit = async event => {
		event.preventDefault();

		if (!stripe || !elements) {
			// Stripe.js aún no se ha cargado, espera unos segundos o maneja el error de otra manera
			return;
		}

		const { token, error } = await stripe.createToken(
			elements.getElement(CardElement)
		);

		if (error) {
			console.error(error);
		} else {
			// Envía el token a tu servidor para procesar el pago

			callbackDeExito(token.id);
		}
	}; */

	return (
		<>
			<form>
				<TarjetaInput value={numeroTarjeta} onChange={handleChange} />
			</form>
			{/* <form id='payment-form' onSubmit={handleSubmit}>
				<label htmlFor='card'>Card</label>
				<CardElement id='card' />

				<button type='submit'>Agregar Tarjeta</button>
			</form> */}
		</>
	);
}

export default PaymentForm;
