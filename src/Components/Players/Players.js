// Players.js
import React from 'react';
import './Players.css';
import { Link } from 'react-router-dom';
import API_URL from '../../apiConfig';
import { Table } from '@mui/material';

function Players(props) {
	return (
		<div className="players-list">
			{props.playersData.map((element) => {
				return (
					<div element={element} key={element._id} className="playersLinksBody">
						{/* <Link to={'/players/' + element.name}>{element.name} </Link> */}
						<p>
							{element.name} {element.rating} Wins: {element.wins} Losses:
							{element.losses}
						</p>
					</div>
				);
			})}
		</div>
	);
}

export default Players;
