import React,{ useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import StarIcon from '@material-ui/icons/Star';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
        height:'100px',
        width:'240px',
        color:'white',
    },
    linkTextDecoration:{
        textDecoration:'none'
    }
}));

export default function Home() {
    const classes = useStyles();
    return (
        <div className="container">
            <Link to="/detail" className={classes.linkTextDecoration}>
            <Button
                variant="contained"
                style={{backgroundColor:'black'}}
                className={classes.button}
                startIcon={<StarIcon />}
            >
                See into the stars !
            </Button>
            </Link>
        </div>
    )
}

