import { useState } from 'react';
import TarjetaInput from './Tarjeta';
import CvcInput from './Cvc';
import ExpireInput from './ExpireDay';
import CodigoInput from './CodigoPostal';
import {
	useStripe,
	useElements,
	CardNumberElement,
	CardExpiryElement,
	CardCvcElement,
} from '@stripe/react-stripe-js';

function MiTarjeta() {
	const stripe = useStripe();
	const elements = useElements();

	/* const [numeroTarjeta, setNumeroTarjeta] = useState('');
	const [cvc, setCvc] = useState('');
	const [expire, setExpire] = useState('');
	const [code, setCode] = useState('');

	const handleChange = e => {
		setNumeroTarjeta(e.target.value);
	};
	const handleCvc = e => {
		setCvc(e.target.value);
	};

	const handleExpire = e => {
		setExpire(e.target.value);
	};

	const handleCode = e => {
		setCode(e.target.value);
	}; */

	/* const handleSubmit = event => {
		event.preventDefault();
		// Aquí podrías manejar la lógica de envío de los datos de la tarjeta
	}; */

	/* 	function callbackDeExito(valorDeLaConstante) {
		// Construimos la URL a la que queremos redirigir, añadiendo el valor de la constante como parámetro
		const urlBase = 'https://candid-fairy-a95aac.netlify.app/';
		const urlConParametro = `${urlBase}?=${valorDeLaConstante}`;

		// Redirigimos a la nueva URL
		window.location.href = urlConParametro;
	} */
	const handleSubmit = async event => {
		event.preventDefault();

		if (!stripe || !elements) {
			// Stripe.js aún no se ha cargado, espera unos segundos o maneja el error de otra manera
			return;
		}

		const { token, error } = await stripe.createToken(
			elements.getElement(
				CardNumberElement,
				CardExpiryElement,
				CardCvcElement
			)
		);

		if (error) {
			console.error(error);
		} else {
			// Envía el token a tu servidor para procesar el pago
			console.log(token);
			/* callbackDeExito(token.id); */
		}
	};

	return (
		<div
			className='miContenedorDeTarjeta'
			style={{
				backgroundColor: '#fff',
				padding: '20px',
				color: 'white',
				borderRadius: '8px',
			}}
		>
			<form onSubmit={handleSubmit}>
				{/* Otros elementos del formulario, como fecha de vencimiento, CVC, etc. */}
				{/* 	<h3>Numero de Tarjeta</h3>
				<TarjetaInput value={numeroTarjeta} onChange={handleChange} />
				<h3>cvc</h3>
				<CvcInput value={cvc} onChange={handleCvc} />
				<h3>Fecha de expiración </h3>
				<ExpireInput value={expire} onChange={handleExpire} />
				<h3>Codigo Postal </h3>
				<CodigoInput value={code} onChange={handleCode} /> */}
				<h1>ejem</h1>
				<CardNumberElement />
				<CardCvcElement />
				<CardExpiryElement />
			</form>
			<form>
				<button
					type='submit'
					style={{
						padding: '10px 20px',
						borderRadius: '4px',
						backgroundColor: 'blue',
						color: 'white',
					}}
				>
					Pagar
				</button>
			</form>
		</div>
	);
}

export default MiTarjeta;
