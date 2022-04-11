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
	const initialState = {
		winner: '',
		loser: '',
	};

	const submitMatch = (event) => {
		event.preventDefault();
		console.log(selectState);

		setSelectState(initialState);
	};
	function submitMatch() {}
	// winner.wins = winner.wins + 1;
	// loser.losses = loser.losses + 1;

	const [selectState, setSelectState] = useState(initialState);
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

	useEffect(() => {}, []);

	return (
		<div>
			<h4>
				Winner:
				<select name="players" id="winner">
					<option value="select"> Select Player </option>
					<option value={playerOne.name}> {playerOne.name} </option>
					<option value={playerTwo.name}> {playerTwo.name} </option>
				</select>
			</h4>
			<h4>
				Loser:
				<select name="players" id="loser">
					<option value="select"> Select Player </option>
					<option value={playerOne.name}> {playerOne.name} </option>
					<option value={playerTwo.name}> {playerTwo.name} </option>
				</select>
			</h4>

			{/* submit logic here */}
			<button type="submit">Submit</button>
			{/* onclick, invoke winner/loser function */}
			{/* if winner, wins+1 */}
			{/* if loser, losses + 1 */}
		</div>
	);
}

export default Match;

// if a player wins, wins +1
// if a play loses, losses + 1
