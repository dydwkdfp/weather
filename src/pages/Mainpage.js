import React from 'react';
import { useState } from "react";
import { MainpageContainer, MainpageWrapper,
    SearchBarContainer, DataContainer,
    SearchTextWrapper, SearchButtonWrapper,
    MainpageH1, Mainpagetextwrapper,
    Mainpagetemp, MainpageWeather,
    MainpageText, Loadingdiv} from '../styles/MainpageStyles';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { motion } from 'framer-motion';
import { Keyboard } from '@material-ui/icons';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';


const useStyles = makeStyles((theme) => ({
    circle: {
      color: '#fff',
    },
    searchbar: {
        width: '50vw',
    },
    searchicon:{
        fontSize: '43px',
        color: '#fff',
    },
    button:{
        background: 'none',
        border: 0,
        borderRadius: 3,
        color: 'white',
        paddingTop: '5px',
        marginLeft: '5px',
        paddingLeft: '10px',
    },
  }));

const Mainpage = ({ keyApi }) => {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [city, setCity] = useState('');
    
    const onChange = (e) =>{
        setCity(e.target.value);
    }

    const classes = useStyles();
    const GetApiData = async() => {
            try {
                setError(null);
                setWeather(null);
                setLoading(true);

                const responce = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${keyApi}`);
                
                await setWeather(responce.data);
            } catch (e) {
                setError(e);
            }
            setLoading(false);
    };
    

    if (loading) return (
        <Loadingdiv>
            <div className={classes.circle}>
          <CircularProgress color='inherit' />
          </div>
        </Loadingdiv>)
    if (error) return <div>Error occured : {error}</div>;

    console.log(weather);

    return (
        <MainpageContainer>
            <MainpageWrapper>

                    <SearchBarContainer>
                        <SearchTextWrapper>
                        <TextField
                            onChange={onChange}
                            className={classes.searchbar}
                            id="outlined-required"
                            label="Cities in US"
                           variant="outlined"
                           placeholder="New york"
                           value={city}
                        />
                        </SearchTextWrapper>
                        <SearchButtonWrapper>
                            <motion.button onClick={GetApiData} className={classes.button} whileHover={{
                                textShadow: "0px 0px 12px rgb(255,255,255)",  
                                boxShadow: "0px 0px 12px rgb(255,255,255)",
                            }}>
                            <SearchIcon className={classes.searchicon}/>
                            </motion.button>
                        </SearchButtonWrapper>
                    </SearchBarContainer>

                    <DataContainer>
                        {weather && 
                        <Mainpagetextwrapper>
                            <MainpageWeather>
                                <MainpageH1>
                                    {weather.weather[0].main}
                                </MainpageH1>
                                <MainpageH1>
                                    {Math.floor(weather.main.temp)}°F
                                </MainpageH1>
                                    <MainpageText>
                                        humidity : {weather.main.humidity}%
                                    </MainpageText>
                                    <MainpageText>
                                        wind speed : {weather.wind.speed} m/s
                                    </MainpageText>
                                    <MainpageText>
                                        feels like : {Math.floor(weather.main.feels_like)}°
                                    </MainpageText>
                                    <MainpageText>
                                        temp min : {Math.floor(weather.main.temp_min)}°
                                    </MainpageText>
                                    <MainpageText>
                                        temp max : {Math.floor(weather.main.temp_max)}°
                                    </MainpageText>
                            </MainpageWeather>
                        </Mainpagetextwrapper>
                        }
                    </DataContainer>

            </MainpageWrapper>
        </MainpageContainer>
    )
}

export default Mainpage
