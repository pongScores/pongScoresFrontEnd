// Players.js
import React, { useState, useEffect } from 'react';
import './Players.css';
import { Link, useParams } from 'react-router-dom';
import API_URL from '../../apiConfig';

import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
	Avatar,
	Grid,
	Typography,
	TablePagination,
	TableFooter,
} from '@mui/material';

// import { palette } from '@mui/system';
import { lightBlue } from '@mui/material/colors';

function Players(props) {
	const [playersData, setPlayersData] = useState([]);

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

			<TableContainer
				className="tableContainer"
				sx={{ maxWidth: '500px' }}
				component={Paper}>
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
							p: 2,
							justifyContent: 'center',
						}}>
						{props.playersData.map((element) => {
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
