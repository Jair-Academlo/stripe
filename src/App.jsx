import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './components/ PaymentForm';
import './App.css';
import MiTarjeta from './components/Prueba';
import Ejemplo from './components/Ejemplo';

const stripePromise = loadStripe(
	'pk_test_51NqbCjE2i202Okp0cokZjItpc9YZ6y6BOm1TVCvPd74rW408etPgmJBVTYoK9QStzmGkahBsJctCXYQVLD9dFtiM006XAOVzfP'
);

function App() {
	return (
		<div className='app'>
			<h1>Añade un metodo de Pago</h1>
			<Elements stripe={stripePromise}>
				{/* 	<PaymentForm /> */}
				{/* <MiTarjeta /> */}
				<Ejemplo />
			</Elements>
		</div>
	);
}

export default App;
