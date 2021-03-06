// import logo from './logo.svg';
import './App.css';
import Homepage from './Components/Homepage/Homepage';
import Players from './Components/Players/Players';
import PlayersInfo from './Components/PlayersInfo/PlayersInfo';
import AddPlayers from './Components/AddPlayers/AddPlayers';
import Match from './Components/Match/Match';
import API_URL from './apiConfig';
import Nav from './Components/Nav/Nav';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
	const [playersData, setPlayersData] = useState([]);

	useEffect(() => {
		fetch(API_URL)
			.then((res) => res.json())
			.then((data) => {
				setPlayersData(data);
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
				<Route
					path="/players/:name"
					element={
						<PlayersInfo
							playersData={playersData}
							setPlayersData={setPlayersData}
						/>
					}
				/>
				<Route path="/match" element={<Match />} />
				<Route path="/addPlayers" element={<AddPlayers />} />
			</Routes>
		</div>
	);
}

export default App;
