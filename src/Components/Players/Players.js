// Players.js
import React, { useState, useEffect } from 'react';
import './Players.css';
import { Link } from 'react-router-dom';
import API_URL from '../../apiConfig';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { lightBlue } from '@mui/material/colors';

import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
	Typography,
} from '@mui/material';

function Players(props) {
	console.log(props);
	const { playersData, setPlayersData } = props;
	// Curly braces will look for keys in specific object (playersData)

	// const { pet } = obj;

	// const pet = obj.pet; // same thing

	// obj
	// {
	// 	pet: 'comfy',
	// 	kick: 'karate',
	//   square: 'shape',
	// }


	useEffect(() => {
		fetch(API_URL)
			.then((res) => res.json())
			.then((data) => {
				setPlayersData(data);
			})
			.catch(console.error);
	}, []);
	// pass down setPlayersData as a prop to addPlayers

	return (
		<div className="playersBodyContainer">
			<div className="addPlayersLinkContainer">
				<Link to="/AddPlayers">
					<Typography variant="h5" color="secondary">
						Add Players <AddBoxIcon />
					</Typography>
				</Link>
			</div>

			<TableContainer
				className="tableContainer"
				sx={{ maxWidth: '500px', boxShadow: 3 }}
				component={Paper}
				align="center">
				<Table aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>Name:</TableCell>
							<TableCell>Wins:</TableCell>
							<TableCell>Losses:</TableCell>
						</TableRow>
					</TableHead>

					<TableBody
						sx={{
							bgcolor: lightBlue[50],
							color: 'text.primary',
							justifyContent: 'center',
						}}>
						{playersData.map((element) => {
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
		</div>
	);
}

export default Players;
