import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './components/ PaymentForm';
import './App.css';
import MiTarjeta from './components/Prueba';
import Ejemplo from './components/Ejemplo';

const stripePromiseDev = loadStripe('DEVELOPMENT_KEY');

const stripePromisePro = loadStripe('PRODUCTION_KEY');
function App() {
	return (
		<div className='app'>
			<h1>Add method payment</h1>
			<Elements stripe={stripePromiseDev}>
				{/* 	<PaymentForm /> */}
				{/* <MiTarjeta /> */}
				<Ejemplo />
			</Elements>
		</div>
	);
}

export default App;
