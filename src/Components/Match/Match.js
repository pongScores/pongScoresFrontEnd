import React, { useState, useEffect } from 'react';
import './Match.css';
import API_URL from '../../apiConfig';
import axios from 'axios';
// import axios from 'axios';

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
	const [playersList, setPlayersList] = useState([]);

	const listPlayers = async () => {
		try {
			const response = await axios
				.get(API_URL)
				.then((data) => setPlayersList(data));
		} catch (error) {
			console.log(error);
		}
		// console.log(playersList);
	};
	listPlayers();

	// const [playerOneState, setPlayerOneState] = useState(initialPlayerState);
	// const [playerTwoState, setPlayerTwoState] = useState(initialPlayerState);

	const [selectState, setSelectState] = useState(initialState);
	// playersData for API data
	const [playersData, setPlayersData] = useState([]);
	const [options, setOptions] = useState([]);

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
				// if name of loser matches player at index, add 1 to that player's number of losses
			} else if (selectState.loser === players[i].name) {
				players[i].losses = players[i].losses + 1;
			}
			axios.put(API_URL).then((res) => {
				if (res.status === 200) {
					listPlayers();
				}
			});
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

	// useEffect(async () => {
	// 	try {
	// 		const response = await axios.get(API_URL).then((data) => {
	// 			setPlayersData(data);
	// 			console.log(playersData);
	// 		});
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// }, []);

	// useEffect(() => {
	// 	try {
	// 		const fetchData = async () => {
	// 			const response = await axios.get(API_URL).then((data) => {
	// 				setPlayersData(data);
	// 			});
	// 		};
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// }, []);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(API_URL);
				const jsonData = await response.json().then((data) => {
					// console.log(data, 'data');
					setPlayersData(data);
					// console.log(data, 'inside use effect');
					// console.log(data);
					const optionsArr = data.map((option) => {
						return <option value={option.name}> {option.name} </option>;
					});
					setOptions(optionsArr);
					// console.log(options);
				});
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, []);

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<h3>
					<label htmlFor="winner"> Winner:</label>

					<select
						className="selectForm"
						name="players"
						id="winner"
						onChange={handleChange}
						value={selectState.winner}>
						<option value="select">Select</option>
						{options}
					</select>
				</h3>
				<h3>
					<label htmlFor="winner"> Loser:</label>

					<select
						className="selectForm"
						name="players"
						id="loser"
						onChange={handleChange}
						value={selectState.loser}>
						<option value="select">Select</option>
						{options}
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
