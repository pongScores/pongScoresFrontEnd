import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_URL from '../../apiConfig';
import Players from '../Players/Players';
import { useParams } from 'react-router';

function PlayersInfo() {
	const [playersData, setPlayersData] = useState([]);
	const { name } = useParams();

	useEffect(() => {
		axios(API_URL)
			.then(({ data }) => {
				const item = data.find((element) => {
					return element.name === name;
				});
				setPlayersData(item);
			})
			.catch(console.error);
	}, []);
	// console.log(playersData);

	// useEffect(() => {
	// 	fetch(API_URL)
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			// console.log(data);
	// 			const item = data.find((element) => {
	// 				return element.name === name;
	// 			});
	// 			setPlayersData(data);
	// 		});
	// }, []);
	// console.log(playersData);

	return (
		<div>
			<p>Name:{playersData.name}</p>
			<p>Wins:{playersData.wins}</p>
			<p>Losses:{playersData.losses}</p>
		</div>
	);
}

export default PlayersInfo;
