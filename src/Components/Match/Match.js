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

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(selectState);
		setSelectState(initialState);
		// let winner = selectWinner();
		// let loser = selectLoser();

		console.log(playerOne);
		console.log(playerTwo);
	};

	const handleChange = (event) => {
		console.log(event.target.id);
		setSelectState({ ...selectState, [event.target.id]: event.target.value });
	};

	const [wins, setWins] = useState(0);
	const [losses, setLosses] = useState(0);

	function countWins() {
		let playerWon = wins + 1;
		setWins(playerWon);
	}

	function countLosses() {
		let playerLost = losses + 1;
		setLosses(playerLost);
	}

	// const selectWinner = document.getElementById('winner').value;

	// const selectLoser = document.getElementById('loser').value;

	// this.handleChange = this.handleChange.bind(this);
	// this.handleSubmit = this.handleSubmit.bind(this);

	useEffect(() => {}, []);

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<h3>
					<label for="winner"> Winner:</label>
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
					<label for="loser"> Loser:</label>
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
				{/* submit logic here */}
				<button type="submit" onClick={handleSubmit}>
					Submit
				</button>
				{/* onclick, invoke winner/loser function */}
				{/* if winner, wins+1 */}
				{/* if loser, losses + 1 */}
			</form>
		</div>
	);
}

export default Match;

// if a player wins, wins +1
// if a play loses, losses + 1
