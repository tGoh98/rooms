import React from 'react';
import { Box, Button, Typography, Container } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
    cont: {
        marginTop: '4rem'
    },
    box: {
        marginTop: '2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    formBox: {
        minWidth: '20rem',
        marginTop: '1rem',
        boxShadow: '0px 3px 6px #00000029',
        borderRadius: '15px',
        padding: '2rem 1.5rem'
    }
}));

export default function ZoomAuth() {
    const classes = useStyles();
    const history = useHistory();

    return (
        <>
            <Container className={classes.cont} maxWidth="xs">
                <Box className={classes.box}>
                    <Typography variant="h4">
                        <Box fontWeight="fontWeightBold">Please login with zoom</Box>
                    </Typography>

                    <Box className={classes.formBox}>
                        <Button 
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                        >
                            Zoom OAuth
                        </Button>
                    </Box>
                </Box>
            </Container>
        </>
    )
}