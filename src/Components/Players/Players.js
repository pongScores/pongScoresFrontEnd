// Players.js
import React from 'react';
import './Players.css';

function Players(props) {
	// Listing player objects
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

	// if a player wins, wins +1
	// if a play loses, losses + 1

	function match(winner, loser) {
		winner.wins = winner.wins + 1;
		loser.losses = loser.losses + 1;
	}

	return <div>Players Component list
		

	</div>;
}

export default Players;
