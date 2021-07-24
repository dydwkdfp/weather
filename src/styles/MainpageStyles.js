import styled from 'styled-components';
import bg from '../images/bg.jpg'
import {createGlobalStyle} from "styled-components";
import { findByLabelText } from '@testing-library/react';


export const MainpageContainer = styled.div`
    width: 100vw;
    height: 100vh;
    
    background: url(${bg}) #060201;
    background-size: cover;
    background-position:center center;
    background-repeat: no-repeat;
    overflow: hidden;
`
export const MainpageWrapper = styled.div`
    display: flex;
    margin: 100px 100px 100px 100px;
    justify-content: center;
    align-items: flex;
    flex-direction: column;
`
export const SearchBarContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex;
`

export const SearchTextWrapper = styled.div`
    border-radius: 4px;
`
export const SearchButtonWrapper = styled.div`

`
export const DataContainer = styled.div`
    margin-top: 10px;

`
export const Loadingdiv = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    background: #5492AB;
    
    width: 100vw;
    height: 100vh;
`
export const MainpageH1 = styled.h1`
    font-family: 'Vollkorn', serif;
    font-size: 40px;
    color: #fff;
    text-transform:uppercase;
    line-height: 0px;

    @media screen and (max-width: 1280px){
        font-size: 36px;
    }
    @media screen and (max-width: 960px){
        font-size: 27px;
    }
    @media screen and (max-width: 600px){
        font-size: 18px;
    }
`
export const MainpageText = styled.p`
    font-family: 'Vollkorn', serif;
    font-size: 20px;
    color: #fff;
    line-height: 0px;
    
    @media screen and (max-width: 1280px){
        font-size: 18px;
    }
    @media screen and (max-width: 960px){
        font-size: 14px;
    }
    @media screen and (max-width: 600px){
        font-size: 9px;
    }
`
export const Mainpagetextwrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex;
`
export const MainpageWeather = styled.div`
    display: flex;
    justify-content: flex;
    align-items: center;
    flex-direction: column;
`

export const WeatherContainer = styled.div`
width: 56vw;
border-radius: 15px;
background-color: rgba( 0, 0, 0, 0.4 );
padding: 15px 0 ;
margin:7px;

`
export const WeatherWrapper = styled.div`
    display: flex;
    margin:15px 30px;
    flex-direction: row;
    justify-content:center;
    align-items:center;
`
export const WeatherLeft = styled.div`
    display: flex;
    align-items:center;
    flex-direction: column;
    width:14vw;
`
export const WeatherRight = styled.div`
    display: flex;
    justify-content: flex;
    align-items: flex;
    flex-direction: column;
    width:28vw;
`

export const WeatherDaily = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction: column;
    margin:0 5px;
`

export const WeatherWrapper2 = styled.div`
    display: flex;
    margin:0 30px;
    flex-direction: row;
    justify-content:space-evenly;
    align-items:center;
    flex-wrap:wrap;
`