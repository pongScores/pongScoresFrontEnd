import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './AddPlayers.css';
import API_URL from '../../apiConfig';
import { Button, IconButton } from '@mui/material';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';

function AddPlayers(props) {
	// const { _id } = useParams();
	const navigate = useNavigate();
	// Hooks
	const [player, setPlayer] = useState({
		name: '',
		wins: '',
		losses: '',
	});

	const [initialPlayerState, setInitialPlayerState] = useState({
		name: '',
		wins: '',
		losses: '',
	});

	const handleChange = (event) => {
		setPlayer({ ...player, [event.target.id]: event.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(player);
		axios
			.post(API_URL, player)
			.then((res) => {
				if (res.status === 200) {
					navigate('/');
				}
			})
			.catch(console.error);
		setPlayer(initialPlayerState);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor="player">Name:</label>
				<input
					onChange={handleChange}
					id="name"
					value={player.player}
					placeholder="Loki"
					key={player._id}
					required
				/>
				<label htmlFor="wins">Wins: </label>
				<input
					onChange={handleChange}
					id="wins"
					value={player.wins}
					placeholder="0"
					key={player._id}
				/>
				<label htmlFor="losses">Losses: </label>
				<input
					onChange={handleChange}
					id="losses"
					value={player.losses}
					placeholder="0"
					key={player._id}
				/>
				<Button
					variant="contained"
					type="submit"
					color="warning"
					className="addPlayerButton">
					Add
				</Button>
			</form>

			<section className="playersDetails"></section>
		</div>
	);
}

export default AddPlayers;
