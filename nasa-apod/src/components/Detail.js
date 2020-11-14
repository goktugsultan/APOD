import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
        height: '100px',
        width: '240px',
        color: 'white',
    },
    linkTextDecoration: {
        textDecoration: 'none'
    }
}));



export default function Detail() {
    const classes = useStyles();

    const [photoData, setPhotoData] = useState(null)

    useEffect(() => {
        fetchData()


        async function fetchData() {
            const res = await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=bR6XnLsgizLCaMrHeJbLgdUCXfsMiSDsrDIubOhP`
            )
            const data = await res.json()
            setPhotoData(data)
            console.log(data)

        }
    }, [])

    if (!photoData) return <div />

    return (
        <div className="detail-container">
            <div className="detail-container-header">
                <span>{photoData.title}</span>
            </div>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <div>
                        <img src={photoData.url} style={{width:'100%',height:'80vh'}} />
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div style={{textAlign:'justify'}}>
                        <span>{photoData.date}</span>
                        <p>{photoData.explanation}</p>
                    </div>
                </Grid>
            </Grid>

        </div>
    )
}

