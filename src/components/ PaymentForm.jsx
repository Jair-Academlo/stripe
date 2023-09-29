import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

function PaymentForm() {
	const stripe = useStripe();
	const elements = useElements();

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
			console.log(token);

			// Crea un objeto que contenga los datos que deseas enviar al webhook
			const payload = {
				token: token.id, // El ID del token
				// Otros datos relacionados con el pago si es necesario
			};

			// Realiza una solicitud HTTP POST al webhook
			fetch('https://editor.apphive.io/hook/ccp_jGpT2AJZLWwoLTKiKZbCK5', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json', // Establece el tipo de contenido como JSON
				},
				body: JSON.stringify(payload), // Convierte el objeto en una cadena JSON
			})
				.then(response => {
					if (!response.ok) {
						throw new Error(
							'Hubo un problema al enviar los datos al webhook.'
						);
					}
					return response.json();
				})
				.then(data => {
					// Maneja la respuesta del webhook si es necesario
					console.log('Respuesta del webhook:', data);
				})
				.catch(error => {
					console.error('Error al enviar datos al webhook:', error);
				});
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<CardElement />
			<button type='submit'>Pagar</button>
		</form>
	);
}

export default PaymentForm;
