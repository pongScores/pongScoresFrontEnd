import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './AddPlayers.css';
import Players from '../Players/Players';
import API_URL from '../../apiConfig';
import { Button, Stack, TextField, Typography } from '@mui/material';

function AddPlayers(props) {
	console.log(props);
	const navigate = useNavigate();
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
		axios
			.post(API_URL, player)
			.then((res) => {
				if (res.status === 201) {
					navigate('/players');
				}
			})
			.catch(console.error);
		setPlayer(initialPlayerState);
	};

	return (
		<div className="addPlayersContainer">
			<Typography variant="h5" color="secondary" align="left">
				Add Players Page
			</Typography>
			<form className="addPlayersform" onSubmit={handleSubmit}>
				<Stack direction="row" spacing={2}>
					<TextField
						label="Name"
						onChange={handleChange}
						id="name"
						value={player.name}
						key={player._id}
						variant="outlined"
						required
					/>
					<input
						label="Wins"
						type="Number"
						onChange={handleChange}
						id="wins"
						value={player.wins}
						placeholder="wins"
						min="0"
						key={player._id}
						variant="outlined"
						required
					/>

					<input
						onChange={handleChange}
						type="Number"
						label="Losses"
						id="losses"
						value={player.losses}
						min="0"
						placeholder="losses"
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
