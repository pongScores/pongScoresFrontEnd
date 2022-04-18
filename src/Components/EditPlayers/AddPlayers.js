import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './AddPlayers.css';
import API_URL from '../../apiConfig';
import { Button, IconButton, Stack, TextField } from '@mui/material';

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
					navigate('/players');
				}
			})
			.catch(console.error);
		setPlayer(initialPlayerState);
	};

	return (
		<div>
			<form className="addPlayersform" onSubmit={handleSubmit}>
				<Stack direction="row" spacing={2}>
					<TextField
						label="Name"
						onChange={handleChange}
						id="name"
						value={player.player}
						key={player._id}
						variant="outlined"
						required
					/>
					<TextField
						label="Wins"
						type="Number"
						onChange={handleChange}
						id="wins"
						value={player.wins}
						placeholder="0"
						key={player._id}
						variant="outlined"
						required
					/>
					<TextField
						onChange={handleChange}
						type="Number"
						label="Losses"
						id="losses"
						value={player.losses}
						placeholder="0"
						required
						key={player._id}
					/>
					<Button
						variant="contained"
						type="submit"
						color="warning"
						onSubmit={handleSubmit}
						className="addPlayerButton">
						Add
					</Button>
				</Stack>
			</form>
		</div>
	);
}

export default AddPlayers;
