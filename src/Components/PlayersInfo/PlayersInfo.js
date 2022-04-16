import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_URL from '../../apiConfig';
import Players from '../Players/Players';
import { useNavigate, useParams } from 'react-router';

function PlayersInfo() {
	const navigate = useNavigate();

	const [playersData, setPlayersData] = useState([]);
	const [formData, setFormData] = useState(null);
	const [modal, setModal] = useState(false);
	const { name } = useParams();
	// const { _id } = useParams();

	useEffect(() => {
		axios(API_URL)
			.then(({ data }) => {
				const item = data.find((element) => {
					return element.name === name;
				});
				setPlayersData(item);
				setFormData(item);
			})
			.catch(console.error);
	}, []);

	const handleDelete = async () => {
		const confirm = window.confirm(
			'Once you delete a player, this cannot be undone. Continue?'
		);
		if (confirm) {
			try {
				const res = await axios.delete(API_URL);
				if (res.status === 200) {
					navigate('/');
				}
			} catch (error) {
				console.log(error);
			}
		}
	};

	return (
		<div>
			<p>Name:{playersData.name}</p>
			<p>Wins:{playersData.wins}</p>
			<p>Losses:{playersData.losses}</p>
		</div>
	);
}

export default PlayersInfo;
