import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav(props) {
	return (
		<header className="app-header">
			<Link to="/">
				<h1 className="homeButton">Home</h1>
			</Link>
			<Link to="/players">
				<h1 className="players">Players</h1>
			</Link>
			<Link to="/match">
				<h2 className="match">Record Match</h2>
			</Link>
			<Link to="/editPlayers">
				<h2>Edit Players</h2>
			</Link>
		</header>
	);
}

export default Nav;
