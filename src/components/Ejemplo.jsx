import {
	useStripe,
	useElements,
	CardNumberElement,
	CardExpiryElement,
	CardCvcElement,
} from '@stripe/react-stripe-js';
import '../styles/Ejemplo.css';

function Ejemplo() {
	const stripe = useStripe();
	const elements = useElements();

	function callbackDeExito(valorDeLaConstante) {
		// Construimos la URL a la que queremos redirigir, añadiendo el valor de la constante como parámetro
		const urlBase = 'https://candid-fairy-a95aac.netlify.app/';
		const urlConParametro = `${urlBase}?=${valorDeLaConstante}`;

		// Redirigimos a la nueva URL
		window.location.href = urlConParametro;
	}

	const estiloCardElement = {
		base: {
			color: 'red',
			'::placeholder': {
				color: 'grey',
			},
		},
	};

	const handleSubmit = async event => {
		console.log(estiloCardElement);
		event.preventDefault();

		if (!stripe || !elements) return; // Stripe.js aún no se ha cargado

		const { token, error } = await stripe.createToken(
			elements.getElement(CardNumberElement)
		);
		if (error) console.error(error);
		else {
			// Envía el token a tu servidor para procesar el pago

			callbackDeExito(token.id);
		}
	};

	return (
		<div className='miContenedorDeTarjeta'>
			<form onSubmit={handleSubmit}>
				<h2>Credit Card</h2>
				<h4>Card Number</h4>
				<div className='card'>
					<CardNumberElement style={estiloCardElement} />
				</div>
				<div className='line'>
					<div>
						<h4>Expiration</h4>
						<div className='card'>
							<CardExpiryElement style={estiloCardElement} />
						</div>
					</div>
					<div className='cvc'>
						<h4>cvc</h4>
						<div className='card'>
							<CardCvcElement style={estiloCardElement} />
						</div>
					</div>
				</div>
				<button type='submit'>Add Card</button>
			</form>
		</div>
	);
}

export default Ejemplo;
