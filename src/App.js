// import logo from './logo.svg';
import './App.css';
import Homepage from './Components/Homepage/Homepage';
import Login from './Components/Login/Login';
import Players from './Components/Players/Players';
import Match from './Components/Match/Match';
import API_URL from './apiConfig';
import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
	const [playersData, setPlayersData] = useState([]);

	useEffect(() => {
		fetch(API_URL)
			.then((res) => res.json())
			.then((data) => {
				setPlayersData(data);
				// console.log(data);
				// console.log(data[0]);
			})
			.catch(console.error);
	}, []);

	return (
		<div className="App">
			<header className="app-header">
				<Link to="/">
					<h1 className="homeButton">Home</h1>
				</Link>
				<Link to="/players">
					<h1 className="players">Players</h1>
				</Link>
				<Link to="/match">
					<h2 className="match">Record Match</h2>
				</Link>
			</header>

			{/* Routes - Do I need a div? */}
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route
					path="/players"
					element={
						<Players
							playersData={playersData}
							setPlayersData={setPlayersData}
						/>
					}
				/>
				<Route path="/match" element={<Match />} />
			</Routes>
		</div>
	);
}

export default App;
