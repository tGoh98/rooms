import React, { useEffect } from 'react';
import { Container, Grid, Box, Typography } from '@material-ui/core';
import RoomGrid from './RoomGrid';
import Sidebar from './Sidebar';
import { makeStyles } from '@material-ui/core/styles';
import useQuery from '../util/useQuery';
// import { useHistory } from 'react-router-dom';
import Axios from 'axios';

const api = Axios.create({
    baseURL: 'https://papps2020.uc.r.appspot.com/'
});
const headers = {
    'Content-Type': 'application/json'
}

const useStyles = makeStyles(() => ({
    cont: {
        marginTop: '5rem'
    },
    rightBox: {
        marginTop: '5rem'
    },
    card: {

    }
}));

export default function Home() {
    const classes = useStyles();
    const query = useQuery();
    const code = query.get("code");

    useEffect(() => {
        // Get gym and cafe id
        api.get('/br/11', {headers: headers})
        .then(res => {
            console.log("br/11 res: ");
            console.log(res);
            localStorage.setItem("gym_id", res.data.gym_id);
            localStorage.setItem("cafe_id", res.data.cafe_id);
        })
        .catch((err) => {
            console.log(err.response);
        });

        // zoom login
        if (code) {
            console.log("code: " + code);
            const body = {
                "auth_code" : code
            }
            api.post('/user/tmg5/zoom_login', body, {headers: headers})
            .then(res => {
                console.log("zoom login res: ");
                console.log(res);
            })
            .catch((err) => {
                console.log(err.response);
            })
        }
    }, [code])
    
    return (
        <>
            <Grid container spacing={0}>
                <Grid item xs={2}>
                    <Sidebar />
                </Grid>
                <Grid item xs={10}>
                    <Container className={classes.cont} maxWidth='lg'>
                        <Typography variant='h3' align='center'>
                            <Box fontWeight="fontWeightBold" style={{marginTop:'-1rem'}}>Roomies<br /></Box>
                        </Typography>
                        <Box mt='1rem'>
                            <RoomGrid />
                        </Box>
                    </Container>
                </Grid>
            </Grid>
            
        </>
    )
}