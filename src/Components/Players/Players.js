// Players.js
import React, { useState, useEffect } from 'react';
import './Players.css';
import { Link, useParams } from 'react-router-dom';
import API_URL from '../../apiConfig';
import axios from 'axios';
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
} from '@mui/material';

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
		<>
			<Link to="/AddPlayers">
				<h2>Add Players</h2>
			</Link>
			<TableContainer component={Paper}>
				<Table aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>Name:</TableCell>
							<TableCell>Wins:</TableCell>
							<TableCell>Losses:</TableCell>
						</TableRow>
					</TableHead>

					<TableBody>
						{props.playersData.map((element) => {
							// return (
							// 	<div
							// 		element={element}
							// 		key={element._id}
							// 		className="playersLinksBody">
							// 		<Link to={'/players/' + element._id}>{element.name} </Link>{' '}
							// 		{element.wins} - {element.losses}
							// 	</div>
							// );

							return (
								<TableRow
									element={element}
									key={element._id}
									className="playersLinksBody">
									<TableCell>
										<Link to={'/players/' + element._id}>{element.name} </Link>
									</TableCell>

									<TableCell>{element.wins} </TableCell>

									<TableCell>{element.losses}</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
}

export default Players;
