import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Styles from './styles';
import {
    Card, Box,
    Grid, Typography, withStyles
} from './MaterialUI';
import classNames from 'classnames';

const PriceBox = props => {
    const { classes, heading, btcPrice, ethPrice, green, noPricesLoaded } = props;

    useEffect(() => document.body.style.backgroundColor = "#cedded", []);

    return (
        <Grid item xs={12} md={3}>
        <Typography variant="h3" align="center" className={classNames({
                [classes.red]: !green && noPricesLoaded,
                [classes.green]: green && noPricesLoaded})}>
            {heading}
        </Typography>
        <Card>
            <Box mt={5} mb={5}>
                <Typography variant="h5" align="center" className={classNames({
                [classes.red]: !green && noPricesLoaded,
                [classes.green]: green && noPricesLoaded})}>
                    BTC: {btcPrice}$
                </Typography>
            </Box>
            <Box mt={5} mb={5}>
                <Typography variant="h5" align="center" className={classNames({
                [classes.red]: !green && noPricesLoaded,
                [classes.green]: green && noPricesLoaded})}>
                    ETH: {ethPrice}$
                </Typography>
            </Box>
        </Card>
        </Grid>
    );
};

PriceBox.propTypes = {
    classes: PropTypes.object.isRequired,
    heading: PropTypes.string.isRequired,
    btcPrice: PropTypes.number.isRequired,
    ethPrice: PropTypes.number.isRequired,
    green: PropTypes.bool.isRequired,
    noPricesLoaded: PropTypes.bool,
};

export default withStyles(Styles)(PriceBox);
