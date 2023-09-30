import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Ejemplo from './components/Ejemplo';
import './App.css';

// Aquí, deberías acceder al valor de la variable de entorno, no pasar una cadena de texto.
const stripePromise = loadStripe(process.env.REACT_APP_DEVELOPMENT_KEY);
/* const stripePromisePro = loadStripe(process.env.REACT_APP_PRODUCTION_KEY); */

function App() {
	return (
		<div className='app'>
			<h1>Add method payment</h1>
			<Elements stripe={stripePromise}>
				<Ejemplo />
			</Elements>
		</div>
	);
}

export default App;
