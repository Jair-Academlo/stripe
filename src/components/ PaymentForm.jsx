import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

function PaymentForm() {
	const stripe = useStripe();
	const elements = useElements();
	const estiloCardElement = {
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
	};

	function callbackDeExito(valorDeLaConstante) {
		// Construimos la URL a la que queremos redirigir, añadiendo el valor de la constante como parámetro
		const urlBase = 'https://candid-fairy-a95aac.netlify.app/';
		const urlConParametro = `${urlBase}?=${valorDeLaConstante}`;

		// Redirigimos a la nueva URL
		window.location.href = urlConParametro;
	}

	const handleSubmit = async event => {
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
	};

	return (
		<>
			<div
				className='miContenedorDeTarjeta'
				style={{
					backgroundColor: '#000',
					padding: '20px',
					borderRadius: '8px',
					color: 'red',
					width: '400px',
					height: '300px',
					display: 'inline-grid',
					alignItems: 'center',
				}}
			>
				<form onSubmit={handleSubmit}>
					<div
						style={{
							padding: '10px',
							borderBottom: '1px solid white',
						}}
					>
						<label
							style={{ display: 'block', marginBottom: '10px' }}
						>
							Número de Tarjeta
						</label>
						<CardElement style={estiloCardElement} />
					</div>
					<button
						type='submit'
						style={{
							marginTop: '20px',
							padding: '10px 20px',
							borderRadius: '4px',
							backgroundColor: 'blue',
							color: 'white',
						}}
					>
						Agregar Tarjeta
					</button>
				</form>
			</div>
		</>
	);
}

export default PaymentForm;
