import logo from './logo.svg';
import './App.css';
import Homepage from './Components/Homepage/Homepage';
import Login from './Components/Login/Login';
import Players from './Components/Players/Players';

function App() {
	return (
		<div className="App">
			React App 🏓
			<Homepage />
			<Login />
			<Players />
		</div>
	);
}

export default App;
