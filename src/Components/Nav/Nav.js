import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import { lime } from '@mui/material/colors';

import {
	AppBar,
	Toolbar,
	Typography,
	Stack,
	Button,
	IconButton,
} from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

function Nav(props) {
	return (
		<AppBar
			position="static"
			color="transparent"
			style={{ background: '#f0f4c3' }}>
			<Toolbar>
				<EmojiEventsIcon size="large" />
				<Link to="/">
					<Button color="inherit" size="large">
						Home
					</Button>
				</Link>

				<Typography
					variant="h1"
					component="div"
					sx={{ flexGrow: 1 }}></Typography>

				<Stack direction="row" spacing={2}>
					<Link to="/players">
						<Button color="secondary" size="large" className="players">
							Players
						</Button>
					</Link>
					<Link to="/match">
						<Button color="error" size="large">
							Record Match
						</Button>
					</Link>
				</Stack>
			</Toolbar>
		</AppBar>
	);
}

export default Nav;
