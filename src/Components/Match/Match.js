import React, { useState, useEffect } from 'react';

const playerOne = {
	name: 'Kemba',
	rating: 1600,
	wins: 0,
	losses: 0,
};
const playerTwo = {
	name: 'Krenko',
	rating: 1400,
	wins: 0,
	losses: 0,
};

function Match() {
	let winner;
	let loser;
	const initialState = {
		winner: '',
		loser: '',
	};

	const [selectState, setSelectState] = useState(initialState);

	const [wins, setWins] = useState(0);
	const [losses, setLosses] = useState(0);

	const countWins = (event) => {
		event.preventDefault();

		let playerWon = wins + 1;
		setWins(playerWon);
	};

	function countLosses() {
		let playerLost = losses + 1;
		setLosses(playerLost);
	}
	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(selectState);
		console.log(selectState.winner, 'wins');
		// console.log(selectState.winner[wins]);

		setSelectState(initialState);
		// let winner = selectWinner();
		// let loser = selectLoser();

		// console.log(playerOne);
		// console.log(playerTwo);
	};

	const handleChange = (event) => {
		console.log(event.target.id);
		setSelectState({ ...selectState, [event.target.id]: event.target.value });
		console.log(event.target.value);
	};

	useEffect(() => {}, []);

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
