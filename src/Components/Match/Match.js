import React, { useState, useEffect } from 'react';
import API_URL from '../../apiConfig';
import axios from 'axios';

// put states for players
let players = [
	{
		name: 'Kemba',
		rating: 1600,
		wins: 0,
		losses: 0,
	},
	{
		name: 'Krenko',
		rating: 1400,
		wins: 0,
		losses: 0,
	},
];

function Match(props) {
	const initialState = {
		winner: '',
		loser: '',
	};

	const initialPlayerState = {
		name: '',
		rating: 0,
		wins: 0,
		losses: 0,
	};

	// const [playerOneState, setPlayerOneState] = useState(initialPlayerState);
	// const [playerTwoState, setPlayerTwoState] = useState(initialPlayerState);

	const [selectState, setSelectState] = useState(initialState);
	// playersData for API data
	const [playersData, setPlayersData] = useState([]);

	// const [wins, setWins] = useState(0);
	// const [losses, setLosses] = useState(0);

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(selectState);
		// console.log(selectState.winner, 'wins');
		console.log(selectState.winner);
		// chooseWinner();
		// addWins();
		for (let i = 0; i < players.length; i++) {
			// if name of winner matches player at index, add 1 to that player's number of wins
			if (selectState.winner === players[i].name) {
				players[i].wins = players[i].wins + 1;
			} else if (selectState.loser === players[i].name) {
				players[i].losses = players[i].losses + 1;
			}
			// if name of loser matches player at index, add 1 to that player's number of losses
		}

		setSelectState(initialState);
		console.log(players);
		// let winner = selectWinner();
		// let loser = selectLoser();
	};

	const handleChange = (event) => {
		console.log(event.target.id);
		setSelectState({ ...selectState, [event.target.id]: event.target.value });
		console.log(event.target.value);
	};

	const listPlayers = () => {};

	useEffect(() => {
		fetch(API_URL)
			.then((res) => res.json())
			.then((data) => {
				setPlayersData(data);
			})
			.catch(console.error);
	}, []);

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<h3>
					<label htmlFor="winner"> Winner:</label>
					<select
						name="players"
						id="winner"
						onChange={handleChange}
						value={selectState.winner}>
						<option value="select"> Select Player </option>
						<option value={players[0].name}> {players[0].name} </option>
						<option value={players[1].name}> {players[1].name} </option>
					</select>
				</h3>
				<h3>
					<label htmlFor="loser"> Loser:</label>
					<select
						name="players"
						id="loser"
						onChange={handleChange}
						value={selectState.loser}>
						<option value="select"> Select Player </option>
						<option value={players[0].name}> {players[0].name} </option>
						<option value={players[1].name}> {players[1].name} </option>
					</select>
				</h3>
				<button type="submit" onClick={handleSubmit}>
					Submit
				</button>
			</form>
		</div>
	);
}

export default Match;
