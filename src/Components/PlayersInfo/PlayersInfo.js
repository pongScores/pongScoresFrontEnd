import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_URL from '../../apiConfig';

function PlayersInfo(props) {
	const [playersData, setPlayersData] = useState([]);

	useEffect(() => {
		axios(API_URL)
			.then(({ data }) => {
				setPlayersData(data);
			})
			.catch(console.error);
	}, []);
	// console.log(playersData);

	return <div>Players Data Component</div>;
}

export default PlayersInfo;
