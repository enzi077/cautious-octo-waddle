import { Card, CardActionArea, CardContent, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles=makeStyles(theme=>({
    card:{
        backgroundColor: theme.palette.secondary.light,
        height: '400px',
        margin: '10px'
    },
    flag:{
        height: '90px',
        width: '160px'
    },
    details:{
        marginTop: '60px'
    }
}))
const Country=({name,capital,flag,currency})=>{
    const classes=useStyles()
    return (
        <CardActionArea>
            <Card className={classes.card}>
                <CardContent>
                    <h1>{name}</h1>
                    <img src={flag} className={classes.flag} alt='img'/>
                    <div className={classes.details}>
                        <Typography variant='h6'><strong>Capital: </strong>{capital}</Typography>
                        <Typography variant='h6'><strong>Currency: </strong>{currency}</Typography>
                    </div>
                </CardContent>
            </Card>
        </CardActionArea>
    )
}

export default Country
