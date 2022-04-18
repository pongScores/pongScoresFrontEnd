import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_URL from '../../apiConfig';
import { useNavigate, useParams } from 'react-router';

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
					<h2>Edit Name</h2>
					<form onSubmit={handleSubmit}>
						<label htmlFor="name">Name:</label>
						<input
							type="text"
							onChange={handleChange}
							id="name"
							// value={playersData.name}
							defaultValue={playersData.name}
						/>

						<label htmlFor="wins">Wins:</label>
						<input
							type="number"
							onChange={handleChange}
							id="wins"
							defaultValue={playersData.wins}
						/>

						<label htmlFor="losses">losses:</label>
						<input
							type="number"
							onChange={handleChange}
							id="losses"
							defaultValue={playersData.losses}
						/>

						<button type="submit">Submit</button>
						<button type="button" onClick={closeEditModal}>
							Close
						</button>
					</form>
				</div>
			) : (
				<>
					<div>
						<p>Name:{playersData.name}</p>
						<p>Wins:{playersData.wins}</p>
						<p>Losses:{playersData.losses}</p>
					</div>
					<button onClick={editModal}>Edit</button>

					<button onClick={handleDelete}> Delete</button>
				</>
			)}
		</section>
	);
}
export default PlayersInfo;
