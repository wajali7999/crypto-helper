const Styles = theme => ({
    red: {
        color: 'red',
    },
    green: {
        color: 'green',
    },
    contentWrapper: {
        padding: '1.6rem 0.8rem',
        [theme.breakpoints.up('sm')]: {
            padding: '1rem 1.6rem',
        },
    },
    exchange: {
        color: '#093a6e',
    },
    header: {
        color: '#3a4d45'
    }
});

export default Styles;
