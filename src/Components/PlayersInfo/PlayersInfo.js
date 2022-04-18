import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_URL from '../../apiConfig';
import { useNavigate, useParams } from 'react-router';
import './PlayersInfo.css';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';

import { Button, Stack, TextField, Typography } from '@mui/material';

function PlayersInfo() {
	const navigate = useNavigate();

	const [playersData, setPlayersData] = useState({ name: '' });
	const [modal, setModal] = useState(false);
	const { name } = useParams();

	useEffect(() => {
		const url = 'https://fierce-shelf-71912.herokuapp.com/players/' + name;

		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				setPlayersData(data);
			});
	}, [name]);

	const handleChange = (event) => {
		setPlayersData({ ...playersData, [event.target.id]: event.target.value });
		console.log(event.target.id);
		console.log(event.target.value);
	};

	const editModal = () => {
		setModal(true);
	};

	const closeEditModal = () => {
		setModal(false);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const res = await axios.put(API_URL + `${name}`, playersData);
			console.log(playersData);
			console.log(API_URL + `${name}`);

			if (res.status === 201) {
				setModal(false);
			}
		} catch (error) {
			console.log(error);
		}
		navigate('/');
	};

	const handleDelete = async () => {
		const confirm = window.confirm(
			'Once you delete a player, this cannot be undone. Continue?'
		);
		if (confirm) {
			try {
				const res = await axios.delete(API_URL + `${name}`);
				if (res.status === 201) {
					navigate('/');
				}
			} catch (error) {
				console.log(error);
			}
			navigate('/');
		}
		if (!playersData) {
			return <h1>Loading...</h1>;
		}
	};

	// console.log(API_URL + 'name');

	return (
		<section>
			{modal ? (
				<div className="modal">
					<Typography variant="h5" color="secondary" align="left">
						Edit Page
					</Typography>
					<form onSubmit={handleSubmit}>
						<Stack direction="row" spacing={2}>
							{/* <label htmlFor="name">Name:</label> */}
							<TextField
								type="text"
								variant="outlined"
								onChange={handleChange}
								id="name"
								// value={playersData.name}
								defaultValue={playersData.name}
							/>

							{/* <label htmlFor="wins">Wins:</label> */}
							<TextField
								type="number"
								variant="outlined"
								onChange={handleChange}
								id="wins"
								defaultValue={playersData.wins}
							/>

							{/* <label htmlFor="losses">losses:</label> */}
							<TextField
								type="number"
								variant="outlined"
								onChange={handleChange}
								id="losses"
								defaultValue={playersData.losses}
							/>
							<Button type="submit" variant="contained" color="warning">
								Submit
							</Button>
							<Button
								type="button"
								variant="contained"
								onClick={closeEditModal}>
								Close
							</Button>
						</Stack>
					</form>
				</div>
			) : (
				<>
					<Typography variant="h6">
						<div>
							<p>Name: {playersData.name}</p>
							<p>Wins: {playersData.wins}</p>
							<p>Losses: {playersData.losses}</p>
						</div>
					</Typography>

					<Typography className="editbuttonsContainer">
						<Button variant="contained" color="success" onClick={editModal}>
							{/* Edit
							 */}
							<ModeEditIcon />
						</Button>
						<Button variant="contained" color="error" onClick={handleDelete}>
							{/* Delete */}
							<DeleteIcon />
						</Button>
					</Typography>
				</>
			)}
		</section>
	);
}
export default PlayersInfo;
