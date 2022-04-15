import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AddPlayers.css';
import API_URL from '../../apiConfig';

function AddPlayers(props) {
	const navigate = useNavigate();

	const [player, setPlayer] = useState({
		name: '',
		wins: '',
		losses: '',
		rating: '',
	});

	const handleChange = (event) => {
		setPlayer({ ...player, [event.target.id]: event.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(player);
		axios
			.post('https://fierce-shelf-71912.herokuapp.com/players', player)
			.then((res) => {
				if (res.status === 200) {
					navigate('/');
				} else {
					console.log('something went wrong!');
				}
			})
			.catch(console.error);
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="player">Name:</label>
			<input
				onChange={handleChange}
				id="player"
				value={player.player}
				placeholder="Loki"
				key={player.name}
			/>
			<label htmlFor="wins">Wins: </label>
			<input
				onChange={handleChange}
				id="wins"
				value={player.wins}
				placeholder="0"
				key={player.wins}
			/>
			<label htmlFor="losses">Losses: </label>
			<input
				onChange={handleChange}
				id="losses"
				value={player.losses}
				placeholder="0"
				key={player.losses}
			/>
			<button type="submit">Add Player</button>
		</form>
	);
}

export default AddPlayers;
