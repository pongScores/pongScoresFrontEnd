import React, { useState, useEffect } from 'react';
import './Match.css';
import API_URL from '../../apiConfig';
import axios from 'axios';
import { ExitToAppTwoTone } from '@mui/icons-material';

function Match(props) {
	useEffect(() => {
		axios(API_URL)
			.then(({ data }) => {
				setPlayersData(data);
				const optionsArr = data.map((option) => {
					return (
						<option key={option.name} value={option.name}>
							{option.name}
						</option>
					);
				});
				setOptions(optionsArr);
			})
			.catch(console.error);
	}, []);

	const initialState = {
		winner: '',
		loser: '',
	};

	const initialPlayerState = {
		name: '',
		rating: 0,
		wins: 0,
		losses: 0,
	};
	const [playersList, setPlayersList] = useState([]);

	const listPlayers = async () => {
		try {
			const response = await axios.get(API_URL);
			setPlayersList(response.data);
			console.log(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	// Hooks
	const [selectState, setSelectState] = useState(initialState);
	const [playersData, setPlayersData] = useState([]);
	const [options, setOptions] = useState([]);
	const [selectDisabled, setSelectDisabled] = useState(false);
	const [showResults, setShowResults] = useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(selectState);
		console.log(selectState.winner);
		console.log(playersData);

		for (let i = 0; i < playersData.length; i++) {
			if (selectState.winner === selectState.loser) {
				alert('Select different winners and losers!');
				break;
			} else if (selectState.winner === playersData[i].name) {
				playersData[i].wins = playersData[i].wins + 1;
				axios
					.put(API_URL + `${playersData[i]._id}`, playersData[i])
					.then((res) => {
						if (res.status === 200) {
							listPlayers();
						}
					});
			} else if (selectState.loser === playersData[i].name) {
				playersData[i].losses = playersData[i].losses + 1;
				axios
					.put(API_URL + `${playersData[i]._id}`, playersData[i])
					.then((res) => {
						if (res.status === 200) {
							listPlayers();
						}
					});
			}
			return <p>{selectState.winner}</p>;
		}
		setSelectState(initialState);
		toggleResults(true);
	};

	const toggleResults = () => {
		console.log('Am I working?');
		setShowResults(!showResults);
	};

	const handleChange = (event) => {
		setShowResults(false);
		console.log(event.target.id);
		setSelectState({ ...selectState, [event.target.id]: event.target.value });
		console.log(event.target.value);
	};

	return (
		<div>
			<div>
				<form onSubmit={handleSubmit}>
					<h3>
						<label htmlFor="winner"> Winner:</label>

						<select
							className="selectForm"
							name="players"
							id="winner"
							onChange={handleChange}
							value={selectState.winner}>
							<option value="select">Select</option>
							{options}
						</select>
					</h3>
					<h3>
						<label htmlFor="winner"> Loser:</label>

						<select
							className="selectForm"
							name="players"
							id="loser"
							onChange={handleChange}
							value={selectState.loser}>
							<option value="select">Select</option>
							{options}
						</select>
					</h3>

					<button type="submit" onClick={handleSubmit} onClick={toggleResults}>
						Submit
					</button>
				</form>
			</div>

			{showResults ? <p>{selectState.winner} won!</p> : <></>}
		</div>
	);
}

export default Match;
