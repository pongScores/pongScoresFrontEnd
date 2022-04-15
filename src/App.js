// import logo from './logo.svg';
import './App.css';
import Homepage from './Components/Homepage/Homepage';
import Login from './Components/Login/Login';
import Players from './Components/Players/Players';
import AddPlayers from './Components/EditPlayers/AddPlayers';
import Match from './Components/Match/Match';
import API_URL from './apiConfig';
import Nav from './Components/Nav/Nav';
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
			<Nav />

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
				<Route path="/players/id" element={<Players />} />
				<Route path="/match" element={<Match />} />
				<Route path="/editPlayers" element={<AddPlayers />} />
			</Routes>
		</div>
	);
}

export default App;
