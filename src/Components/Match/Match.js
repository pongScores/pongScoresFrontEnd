import React, { useState, useEffect } from 'react';
import API_URL from '../../apiConfig';
// put states for players
let playerOne = {
	name: 'Kemba',
	rating: 1600,
	wins: 0,
	losses: 0,
};
let playerTwo = {
	name: 'Krenko',
	rating: 1400,
	wins: 0,
	losses: 0,
};

// target player one and player two instead of win
// if player 1 = winner, player 1.wins +1
// on submit, pass back player 1 or player 2 instead of names

function Match(props) {
	let winner;
	let loser;

	const initialState = {
		winner: '',
		loser: '',
	};

	const [selectState, setSelectState] = useState(initialState);
	const [playersData, setPlayersData] = useState([]);

	const [wins, setWins] = useState(0);
	const [losses, setLosses] = useState(0);

	const countWins = () => {
		// if winner's name matches a name that exists,
		// add a win
		// let playerWon = wins + 1;
		// setWins(playerWon);
		setWins(wins + 1);
		// console.log(countWins);
	};

	function countLosses() {
		let playerLost = losses + 1;
		setLosses(playerLost);
	}
	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(selectState);
		// console.log(selectState.winner, 'wins');
		console.log(selectState.winner);

		countWins();

		setSelectState(initialState);
		// let winner = selectWinner();
		// let loser = selectLoser();

		console.log(playerOne);
		console.log(playerTwo);
	};

	const handleChange = (event) => {
		console.log(event.target.id);
		setSelectState({ ...selectState, [event.target.id]: event.target.value });
		console.log(event.target.value);
		console.log(event.target);
	};

	// Brainstorm solutions to update wins/losses
	// If/Else statements ;
	// If name of winner === name of somebody in list, add wins

	const listPlayers = () => {};

	// useEffect(() => {
	// 	fetch(API_URL)
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			setPlayersData(data);
	// 		})
	// 		.catch(console.error);
	// }, []);

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
						<option value={playerOne.name}> {playerOne.name} </option>
						<option value={playerTwo.name}> {playerTwo.name} </option>
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
						<option value={playerOne.name}> {playerOne.name} </option>
						<option value={playerTwo.name}> {playerTwo.name} </option>
					</select>
				</h3>
				<button type="submit" onClick={(handleSubmit, countWins, countLosses)}>
					Submit
				</button>
			</form>
		</div>
	);
}

export default Match;
