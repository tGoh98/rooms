import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import gymDefault from '../assets/gymDefault.png';
import gymOpen from '../assets/gymOpen.png';
import gymWhiteboard from '../assets/gymWhiteboard.png';
import gymSpotify from '../assets/gymSpotify.png';
import gymYT from '../assets/gymYT.png';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';

const api = Axios.create({
    // baseURL: 'https://papps2020.uc.r.appspot.com/'
    baseURL: 'https://20200912t152951-dot-papps2020.uc.r.appspot.com/'
});
const headers = {
    'Content-Type': 'application/json'
}


const useStyles = makeStyles(() => ({
    defaultBackground: {
        backgroundImage: `url(${gymDefault})`,
        height: '100vh',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }, ytHighlight: {
        backgroundImage: `url(${gymYT})`,
        height: '100vh',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }, spotifyHighlight: {
        backgroundImage: `url(${gymSpotify})`,
        height: '100vh',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }, whiteboardHighlight: {
        backgroundImage: `url(${gymWhiteboard})`,
        height: '100vh',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }, openDoor: {
        backgroundImage: `url(${gymOpen})`,
        height: '100vh',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },youtubeBtn: {
        height: '4rem',
        width: '6rem',
        position: 'absolute',
        top: '22.5rem',
        left: '39rem',
        color: 'transparent',
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        cursor: 'pointer',
        outline: 0
    },
    spotifyBtn: {
        height: '12rem',
        width: '15rem',
        position: 'absolute',
        top: '3rem',
        right: '34rem',
        color: 'transparent',
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        cursor: 'pointer',
        outline: 0
    },
    doorBtn: {
        height: '25rem',
        width: '12rem',
        position: 'absolute',
        top: '24rem',
        left: '3rem',
        color: 'transparent',
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        cursor: 'pointer',
        outline: 0
    },
    whiteboardBtn: {
        height: '8rem',
        width: '7rem',
        position: 'absolute',
        top: '22rem',
        right: '27rem',
        color: 'transparent',
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        cursor: 'pointer',
        outline: 0
    },
    spotifyFrame: {
        position: 'absolute',
        right: '34.5rem',
        top: '12.5rem',
        transform: 'rotate(30deg)'
    }
}));

export default function Gym() {
    const classes = useStyles();
    const history = useHistory();
    const [showSpotify, setShowSpotify] = useState(false);
    const [gClass, setGClass] = useState(classes.defaultBackground);

    const body = {
        "username" : localStorage.getItem("username"),
        "id" : 4
    }
    // api.put('/gym/' + localStorage.getItem("gym_id") + '/joined_gym', body, {headers: headers})
    // .then(res => {
    //     localStorage.setItem("meeting", res.data.meeting);
    //     window.open(
    //         res.data.meeting,
    //         '_blank' // <- This is what makes it open in a new window.
    //     );
    // })
    // .catch((err) => {
    //     console.log(err.response);
    // })
    
    function handleYTHover() {
        setGClass(classes.ytHighlight);
    }

    function handleYTClick() {
        // TODO: play YT vid
    }
    
    function handleWhiteboardHover() {
        setGClass(classes.whiteboardHighlight);
    }

    function handleWhiteboardClick() {
        // TODO: show embedded whiteboard
    }
    
    function handleSpotifyHover() {
        setGClass(classes.spotifyHighlight);
    }

    function handleSpotifyClick() {
        setShowSpotify(!showSpotify);
    }
    
    function handleDoorHover() {
        setGClass(classes.openDoor);
    }

    function handleDoorClick() {
        history.push('/home');
    }

    function resetBackground() {
        setGClass(classes.defaultBackground);
    }

    return (
        <div className={gClass}>
            <button className={classes.youtubeBtn} onMouseEnter={() => handleYTHover()} onMouseOut={() => resetBackground()} onClick={() => handleYTClick()}/>
            <button className={classes.spotifyBtn} onMouseEnter={() => handleSpotifyHover()} onMouseOut={() => resetBackground()} onClick={() => handleSpotifyClick()}/>
            <button className={classes.doorBtn} onMouseEnter={() => handleDoorHover()} onMouseOut={() => resetBackground()} onClick={() => handleDoorClick()}/>
            <button className={classes.whiteboardBtn} onMouseEnter={() => handleWhiteboardHover()} onMouseOut={() => resetBackground()} onClick={() => handleWhiteboardClick()}/>
            { showSpotify && 
                <iframe title="spotify" src="https://open.spotify.com/embed/playlist/5sHebLj2M8wPPc1rfLKtX9?si=ulRKMYT9R8C7Scmcny3fJQ" className={classes.spotifyFrame} width="300" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            }
        </div>
    )
}