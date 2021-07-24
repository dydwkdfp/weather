import React from 'react';
import { useState } from "react";
import { MainpageContainer, MainpageWrapper,
    SearchBarContainer, DataContainer,
    SearchTextWrapper, SearchButtonWrapper,
    MainpageH1, Mainpagetextwrapper,
    Mainpagetemp, MainpageWeather,
    MainpageText, Loadingdiv,
    WeatherContainer, WeatherWrapper,
    WeatherLeft, WeatherRight,
    WeatherDaily,
    WeatherWrapper2} from '../styles/MainpageStyles';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { motion } from 'framer-motion';
import { Keyboard } from '@material-ui/icons';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import OpacityIcon from '@material-ui/icons/Opacity';
import CloudIcon from '@material-ui/icons/Cloud';
import FlareIcon from '@material-ui/icons/Flare';
import WavesIcon from '@material-ui/icons/Waves';



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
    icon:{
        width: '120px',
        height: '120px',
        [theme.breakpoints.down('xs')]: {
            width: '50px',
            height: '50px',
        },
        [theme.breakpoints.up('sm')]: {
            width: '75px',
            height: '75px',
        },
        [theme.breakpoints.up('md')]: {
            width: '100px',
            height: '100px',
        },
    },
    icons:{
        margin: '0 5px',
        fontSize: '15px',
    },
    temp:{
        marginRight: '10px',
    },
    disfont:{
        [theme.breakpoints.down('xs')]: {
            fontSize: 0,
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: '14px',
        },
    },
  }));

const Mainpage = ({ keyApi, hourly }) => {
    const [weather, setWeather] = useState(null);
    const [weatherda, setWeatherda] = useState(null);
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

                const responce = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${keyApi}`);
                
                await setWeather(responce.data);

                const responce2 = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${keyApi}`);
                
                await setWeatherda(responce2.data);

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
                                <WeatherContainer>
                                    <WeatherWrapper>
                                        <WeatherLeft>
                                        <MainpageText>
                                            {weather.city.name}
                                        </MainpageText>
                                        <MainpageH1>
                                            {Math.floor(weatherda.main.temp)}°F
                                        </MainpageH1>
                                        <MainpageText>
                                            {weatherda.weather[0].main}
                                        </MainpageText>
                                        </WeatherLeft>
                                        <WeatherLeft>
                                            <img className={classes.icon} src={`http://openweathermap.org/img/wn/${weatherda.weather[0].icon}@2x.png`} />
                                        <MainpageText>
                                            {Math.floor(weatherda.main.temp_min)}/{Math.floor(weatherda.main.temp_max)}
                                        </MainpageText>
                                        </WeatherLeft>

                                        <WeatherRight>
                                        <MainpageText>
                                            <FlareIcon className={classes.icons}/> <text className={classes.disfont}>Feels like</text> : {weatherda.main.feels_like}°F
                                        </MainpageText>
                                        <MainpageText>
                                            <OpacityIcon className={classes.icons}/> <text className={classes.disfont}>Humidity</text> : {weatherda.main.humidity} %
                                        </MainpageText>
                                        <MainpageText>
                                            <WavesIcon className={classes.icons}/> <text className={classes.disfont}> Wind</text> : {weatherda.wind.speed} m/s
                                        </MainpageText>
                                        <MainpageText>
                                            <CloudIcon className={classes.icons}/> <text className={classes.disfont}>Cloud</text> : {weatherda.clouds.all} %
                                        </MainpageText>
                                        </WeatherRight>
                                    </WeatherWrapper>
                                </WeatherContainer>
                                <WeatherContainer>
                                    <WeatherWrapper2>
                                        <WeatherDaily>
                                            <MainpageText>
                                                Morning
                                            </MainpageText>
                                            <MainpageH1>
                                                {Math.floor(weather.list[0].main.temp)}°F
                                            </MainpageH1>
                                            <img className={classes.icon} src={`http://openweathermap.org/img/wn/${weather.list[0].weather[0].icon}@2x.png`} />
                                        </WeatherDaily>  
                                        <WeatherDaily>
                                            <MainpageText>
                                                Noon
                                            </MainpageText>
                                            <MainpageH1>
                                                {Math.floor(weather.list[2].main.temp)}°F
                                            </MainpageH1>
                                            <img className={classes.icon} src={`http://openweathermap.org/img/wn/${weather.list[2].weather[0].icon}@2x.png`} />
                                        </WeatherDaily>  
                                        <WeatherDaily>
                                            <MainpageText>
                                                evening
                                            </MainpageText>
                                            <MainpageH1>
                                                {Math.floor(weather.list[4].main.temp)}°F
                                            </MainpageH1>
                                            <img className={classes.icon} src={`http://openweathermap.org/img/wn/${weather.list[4].weather[0].icon}@2x.png`} />

                                        </WeatherDaily>  
                                        <WeatherDaily>
                                            <MainpageText>
                                                Midnight
                                            </MainpageText>
                                            <MainpageH1>
                                                {Math.floor(weather.list[6].main.temp)}°F
                                            </MainpageH1>
                                            <img className={classes.icon} src={`http://openweathermap.org/img/wn/${weather.list[6].weather[0].icon}@2x.png`} />

                                        </WeatherDaily>                                        
                                    </WeatherWrapper2>
                                </WeatherContainer>
                            </MainpageWeather>
                        </Mainpagetextwrapper>
                        }
                    </DataContainer>

            </MainpageWrapper>
        </MainpageContainer>
    )
}

export default Mainpage
