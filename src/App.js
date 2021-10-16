import './App.css';
import PropTypes from 'prop-types';

import { Card, Typography, withStyles, Container } from './MaterialUI';
import Styles from './styles';
import Prices from './Prices';

function App(props) {
  	const { classes } = props;
	return (
		<div className={classes.contentWrapper}>
			<Container maxWidth="xl">
				<Card>
					<Typography variant='h2' style={{ fontWeight: 500 }} className={classes.header} align="center">
						Crypto Helper
					</Typography>
				</Card>
				<Prices/>
			</Container>
		</div>
	);
}

App.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(Styles)(App);
