// Players.js
import React, { useState, useEffect } from 'react';
import './Players.css';
import { Link, useParams } from 'react-router-dom';
import API_URL from '../../apiConfig';
import { Table } from '@mui/material';
import axios from 'axios';

function Players(props) {
	const [playersData, setPlayersData] = useState([]);
	// const { _id } = useParams();

	useEffect(() => {
		fetch(API_URL)
			.then((res) => res.json())
			.then((data) => {
				// console.log(data);
				setPlayersData(data);
				// console.log(data[0]);
			})
			.catch(console.error);
	}, []);

	return (
		<div className="players-list">
			{/* Working Map */}
			{props.playersData.map((element) => {
				return (
					<div element={element} key={element._id} className="playersLinksBody">
						<Link to={'/players/' + element.name}>{element.name} </Link>{' '}
						{element.wins} - {element.losses}
						{/* End of working map */}
						{/* <p>
							{element.name} {element.rating} Wins: {element.wins} Losses:
							{element.losses}
						</p> */}
					</div>
				);
			})}
		</div>
	);
}

export default Players;
