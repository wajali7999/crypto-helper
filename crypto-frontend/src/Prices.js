import React from 'react';
import PropTypes from 'prop-types';
import Styles from './styles';
import PriceBox from './PriceBox';
import axios from 'axios';
import {
    Container, Card, Box,
    Grid, Typography, withStyles
} from './MaterialUI';

class Prices extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
           Prices: {}
        };
    }

    componentDidMount() {
        this.getPrices();
        this.interval = setInterval(() => {
            this.getPrices();
          }, 6000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    getPrices = () => {
        axios.get(`https://crypto-app-wajahat.herokuapp.com/prices/`)
            .then(res => {
                this.setState({ Prices: res.data })
        })
    };

    render() {
        const { classes } = this.props;
        const { Prices } = this.state;
        const CoinbaseBuyBtc = Prices?.Coinbase?.BTC?.buy < Prices?.Bitfinex?.BTC?.buy;
        const CoinbaseSellBtc = Prices?.Coinbase?.BTC?.sell > Prices?.Bitfinex?.BTC?.sell;
        
        const CoinbaseBuyEth = Prices?.Coinbase?.BTC?.buy < Prices?.Bitfinex?.BTC?.buy;
        const CoinbaseSellEth = Prices?.Coinbase?.BTC?.sell > Prices?.Bitfinex?.BTC?.sell;
        const noPricesLoaded = Prices?.Coinbase?.BTC?.buy || Prices?.Bitfinex?.BTC?.buy 
            || Prices?.Coinbase?.BTC?.sell || Prices?.Bitfinex?.BTC?.sell;

        return <Container maxWidth="xl" className={classes.contentWrapper}>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Box mt={2} mb={1}>
                        <Card>
                            <Typography variant="h5">
                                Recommended to &nbsp;
                                <Box sx={{ fontWeight: 'bold' }} display='inline'>
                                    buy BTC
                                </Box>
                                    &nbsp; from &nbsp;
                                {noPricesLoaded ? <Box sx={{ fontWeight: 'bold' }} display='inline'>
                                    {CoinbaseBuyBtc ? 'Coinbase' : 'Bitfinex'}
                                </Box> : 'any exchange'
                                }
                            </Typography>
                            <Typography variant="h5">
                                Recommended to &nbsp;
                                <Box sx={{ fontWeight: 'bold' }} display='inline'>
                                    buy ETH
                                </Box>
                                    &nbsp; from &nbsp;
                                {noPricesLoaded ? <Box sx={{ fontWeight: 'bold' }} display='inline'>
                                    {CoinbaseBuyEth ? 'Coinbase' : 'Bitfinex'}
                                </Box> : 'any exchange'
                                }
                            </Typography>
                        </Card>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box mt={2} mb={1}>
                        <Card>
                            <Typography variant="h5">
                                Recommended to &nbsp;
                                <Box sx={{ fontWeight: 'bold' }} display='inline'>
                                    sell BTC
                                </Box>
                                    &nbsp; from &nbsp;
                                {noPricesLoaded ? <Box sx={{ fontWeight: 'bold' }} display='inline'>
                                    {CoinbaseSellBtc ? 'Coinbase' : 'Bitfinex'}
                                </Box> : 'any exchange'
                                }
                            </Typography>
                            <Typography variant="h5">
                                Recommended to &nbsp;
                                <Box sx={{ fontWeight: 'bold' }} display='inline'>
                                    sell ETH
                                </Box>
                                    &nbsp; from &nbsp;
                                {noPricesLoaded ? <Box sx={{ fontWeight: 'bold' }} display='inline'>
                                    {CoinbaseSellEth ? 'Coinbase' : 'Bitfinex'}
                                </Box> : 'any exchange'
                                }
                            </Typography>
                        </Card>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box mt={13}>
                        <Typography variant="h2" className={classes.exchange} 
                            style={{ fontWeight: 500 }} align="center">
                            Coinbase
                        </Typography>
                    </Box>
                </Grid>

                <PriceBox heading='Buy' btcPrice={Prices?.Coinbase?.BTC?.buy || 0} 
                    ethPrice={Prices?.Coinbase?.ETH?.buy || 0} 
                    green={CoinbaseBuyBtc}
                    noPricesLoaded={noPricesLoaded}/>

                <PriceBox heading='Sell' btcPrice={Prices?.Coinbase?.BTC?.sell || 0}
                    ethPrice={Prices?.Coinbase?.ETH?.sell || 0} 
                    green={CoinbaseSellBtc}
                    noPricesLoaded={noPricesLoaded}/>

                <Grid item xs={12} md={6}>
                    <Box mt={13}>
                        <Typography variant="h2" className={classes.exchange} 
                            style={{ fontWeight: 500 }} align="center">
                            Bitfinex
                        </Typography>
                    </Box>
                </Grid>

                <PriceBox heading='Buy' btcPrice={Prices?.Bitfinex?.BTC?.buy || 0} 
                    ethPrice={Prices?.Bitfinex?.ETH?.buy || 0} 
                    green={!CoinbaseBuyEth} 
                    noPricesLoaded={noPricesLoaded}/>

                <PriceBox heading='Sell' btcPrice={Prices?.Bitfinex?.BTC?.sell || 0} 
                    ethPrice={Prices?.Bitfinex?.ETH?.sell || 0} 
                    green={!CoinbaseSellEth}
                    noPricesLoaded={noPricesLoaded}/>

                <Grid item xs={12} md={12}>
                    <Box>
                        <Typography className={classes.red} align="center">
                            Note: Prices are updated every 6 seconds(Green means recommended for buy/sell)
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>;
    }
};

Prices.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(Styles)(Prices);
