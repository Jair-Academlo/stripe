import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './components/ PaymentForm';

const stripePromise = loadStripe(
	'pk_test_51NqbCjE2i202Okp0cokZjItpc9YZ6y6BOm1TVCvPd74rW408etPgmJBVTYoK9QStzmGkahBsJctCXYQVLD9dFtiM006XAOVzfP'
);

function App() {
	return (
		<Elements stripe={stripePromise}>
			<PaymentForm />
		</Elements>
	);
}

export default App;
