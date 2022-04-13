import React, { useState, useEffect } from 'react';
import API_URL from '../../apiConfig';
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

// target player one and player two instead of win
// if player 1 = winner, player 1.wins +1
// on submit, pass back player 1 or player 2 instead of names

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

	// initializing playerOne and playerTwo states, the states to be set once dropdown menu selects player name
	// setPlayer state will use the state of player's name selected

	const [playerOneState, setPlayerOneState] = useState(initialPlayerState);
	const [playerTwoState, setPlayerTwoState] = useState(initialPlayerState);

	const [selectState, setSelectState] = useState(initialState);
	// playersData for API data
	const [playersData, setPlayersData] = useState([]);

	const [wins, setWins] = useState(0);
	const [losses, setLosses] = useState(0);

	/* const array = [1, 2, 3, 4, 5];

// checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// expected output: true
 */

	/* const arr = [{ id: 1, username: 'fred' }, { id: 2, username: 'bill' }, { id: 3, username: 'ted' }];

function add(arr, name) {
  const { length } = arr;
  const id = length + 1;
  const found = arr.some(el => el.username === name);
  if (!found) arr.push({ id, username: name });
  return arr;
}

console.log(add(arr, 'ted')); */

	const chooseLoser = () => {};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(selectState);
		// console.log(selectState.winner, 'wins');
		console.log(selectState.winner);
		// chooseWinner();
		// addWins();

		setSelectState(initialState);
		console.log(players);
		// let winner = selectWinner();
		// let loser = selectLoser();
	};

	const handleChange = (event) => {
		// console.log(event.target.id);
		setSelectState({ ...selectState, [event.target.id]: event.target.value });
		console.log(event.target.value);
		// chooseWinner();

		// set playerOne state to the the array index in players that matches the name of winner

		// set playerTwo state to the the array index in players that matches the name of loser

		// use array.some method to find if a match exists
	};
	// const chooseWinner = (event, name) => {
	// 	const winner = players.some((element) => element.name === name);
	// 	if (event.target.value === winner) {
	// 		setPlayerOneState(winner);
	// 	}
	// };

	// const addWins = (playerOneState) => {
	// 	playerOneState.wins = playerOneState.wins + 1;
	// 	console.log(players);
	// };

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
