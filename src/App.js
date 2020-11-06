import React, { useEffect, useState } from 'react';
import Country from './components/Country'
import {AppBar, Button, Grid, Link, makeStyles, Toolbar, Typography} from '@material-ui/core'

const useStyles=makeStyles((theme)=>({
    root:{
        backgroundColor: theme.palette.primary.light,
        overflowX: 'hidden'
    },
    searchField:{
        display: 'flex',
        flex: '20%',
        justifyContent: 'right'
    },
    title: {
        flexGrow: 1,
    },
    link:{
        color: 'white'
    },
    inputSearch:{
        padding: '10px',
        borderRadius: '2px 0px 0px 2px',
        border: 'none',
        width: '50%',
    },
    searchBtn:{
        marginLeft: 0,
        borderRadius: '0px 2px 2px 0px'
    },
    gridMain:{
        padding: '20px'
    },
}))

function App() {
    const [countries,setCountries]=useState([])
    const [searchTxt,setSearchTxt]=useState('')
    const [query,setQuery]=useState('')
    const classes=useStyles()
    
    useEffect(() => {
        callCountries()
    }, [])
    
    const callCountries=async()=>{
        const response=await fetch('https://restcountries.eu/rest/v2/all')
        const data=await response.json()
        console.log(data)
        setCountries(data)
    }
    
    const formSubmit=(e)=>{
        e.preventDefault()
        setQuery(searchTxt)
        setSearchTxt('')
    }
    
    const searchUpd=(e)=>{
        setSearchTxt(e.target.value)
    }
    
  return (
    <div className={classes.root}>
        <AppBar position='sticky'>
            <Toolbar>
                <Typography className={classes.title} variant="h6">
                    <Link 
                        className={classes.link} 
                        href='#' 
                        onClick={formSubmit}
                        underline='none'
                    >
                        Country App
                    </Link>
                </Typography>
                <form onSubmit={formSubmit} className={classes.searchField}>
                    <input 
                        type='text'
                        value={searchTxt}
                        onChange={searchUpd}
                        placeholder='Country name...'
                        className={classes.inputSearch}
                    />
                    <Button 
                        type='submit' 
                        className={classes.searchBtn}
                        variant='contained'
                        color='secondary'
                    >
                        Search
                    </Button>
                </form>
            </Toolbar>
        </AppBar>
        <Grid container spacing={3} className={classes.gridMain}>
            
            {query ? (
                countries.map(country=>(
                    country.name.toLowerCase().includes(query.toLowerCase()) &&
                        <Grid item xs={12} md={6} lg={4}>
                            <Country
                                key={country.alpha2Code}
                                name={country.name}
                                capital={country.capital}
                                flag={country.flag}
                                currency={country.currencies[0].name}
                            />
                        </Grid>
                )
            )):
            (countries.map(country=>(
                <Grid item xs={12} md={6} lg={4}>
                <Country
                    key={country.alpha2Code}
                    name={country.name}
                    capital={country.capital}
                    flag={country.flag}
                    currency={country.currencies[0].name}
                />
                </Grid>
            )))}
        </Grid>
    </div>
  );
}

export default App;
