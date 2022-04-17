import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_URL from '../../apiConfig';
import Players from '../Players/Players';
import { useNavigate, useParams } from 'react-router';

function PlayersInfo() {
	const navigate = useNavigate();

	const [playersData, setPlayersData] = useState([]);
	const [modal, setModal] = useState(false);
	const { name } = useParams();

	// useEffect(() => {
	// 	fetch(API_URL)
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			setPlayersData(data);
	// 		});
	// }, []);

	useEffect(() => {
		const url = 'https://fierce-shelf-71912.herokuapp.com/players/' + name;

		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				setPlayersData(data);
			});
	}, [name]);
	console.log(playersData);

	const handleChange = (event) => {
		setPlayersData({ ...playersData, [event.target.id]: event.target.value });
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
			const res = await axios.put(`API_URL ${name}`, playersData);

			if (res.status === 200) {
				setModal(false);
			}
		} catch (error) {
			console.log(error);
		}
	};

	const handleDelete = async () => {
		const confirm = window.confirm(
			'Once you delete a player, this cannot be undone. Continue?'
		);
		if (confirm) {
			try {
				const res = await axios.delete(API_URL`${name}`);
				if (res.status === 204) {
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
						<label htmlFor="editName">Name:</label>
						<input
							type="text"
							onChange={handleChange}
							id="editName"
							value={playersData.name}
						/>

						<label htmlFor="editWins">Wins:</label>
						<input
							type="text"
							onChange={handleChange}
							id="editWins"
							value={playersData.wins}
						/>

						<label htmlFor="editLosses">losses:</label>
						<input
							type="text"
							onChange={handleChange}
							id="editLosses"
							value={playersData.losses}
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
