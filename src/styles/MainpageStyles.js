import styled from 'styled-components';
import bg from '../images/bg.jpg'
import {createGlobalStyle} from "styled-components";


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
    line-height: 30px;

    @media screen and (max-width: 800px){
        line-height: 20px;
    }
`
export const MainpageText = styled.p`
    font-family: 'Vollkorn', serif;
    font-size: 20px;
    color: #fff;
    line-height: 5px;
    
    @media screen and (max-width: 800px){
        line-height: 3px;
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
    width: 60vw;
    flex-direction: column;
    border-radius: 40px;
    background-color: rgba( 0, 0, 0, 0.3 );
    padding: 30px 0 ;
`