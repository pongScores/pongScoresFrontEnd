// Homepage.js
import React from 'react';
import { Typography } from '@mui/material';
import './Homepage.css';

function Homepage(props) {
	return (
		<div className="homepageContainer">
			<Typography variant="h3" align="center">
				Welcome to the Homepage 🏓
			</Typography>
			<li>
				Click on Players to view Player win-loss records and to add new players.
			</li>
			<li>Click on Individual players to make edits or delete them. </li>
			<li>
				Click on Record Match Link to record the outcome of some of the most
				epic matches you've ever soon.{' '}
			</li>

			<li>
				<a href="https://github.com/pongScores/pongScoresFrontEnd">
					Github Repo
				</a>
			</li>
		</div>
	);
}

export default Homepage;
