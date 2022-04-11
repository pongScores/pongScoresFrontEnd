import React from 'react';

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

function Match(winner, loser) {
	// winner.wins = winner.wins + 1;
	// loser.losses = loser.losses + 1;

	return (
		<div>
			<h4>
				Winner:
				<select name="players" id="players">
					<option value="select"> Select Player </option>
					<option value={playerOne.name}> {playerOne.name} </option>
					<option value={playerTwo.name}> {playerTwo.name} </option>
				</select>
			</h4>
			<h4>
				Loser:
				<select name="players" id="players">
					<option value="select"> Select Player </option>
					<option value={playerOne.name}> {playerOne.name} </option>
					<option value={playerTwo.name}> {playerTwo.name} </option>
				</select>
			</h4>

			{/* submit logic here */}
			<button type="submit">Submit</button>
		</div>
	);
}

export default Match;

// if a player wins, wins +1
// if a play loses, losses + 1
