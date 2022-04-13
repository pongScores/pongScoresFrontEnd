// Players.js
import React from 'react';
import './Players.css';
import { Link } from 'react-router-dom';
import API_URL from '../../apiConfig';

function Players(props) {
	return (
		<div className="players-list">
			{props.playersData.map((element) => {
				return (
					<div element={element} key={element.id} className="playersLinksBody">
						{/* <Link to={'/players/' + element.name}>{element.name} </Link> */}
						<p>
							{element.name} {element.rating}
						</p>
					</div>
				);
			})}
		</div>
	);
}

export default Players;
