import styled from 'styled-components'

export const MainCon=styled.div`
    background-image:url("https://assets.ccbp.in/frontend/react-js/reviews-bg.png");
    display:flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    padding-top:60px;
`

export const Con=styled.div`
    display:flex;
    flex-direction: row;
    margin:10px;
    justify-content: center;
    align-items: center;
`

export const Button=styled.button`
    background-color: transparent;
    border:none;
    cursor: pointer;
`

export const Heading=styled.h1`
    font-weight: bold;
    color:white;
`

export const LeftImg=styled.img`
    margin:1px;
`

export const RightImg=styled.img`
    margin:1px;
`

export const Img=styled.img`
    margin:1px;
`
export const Contain=styled.div`
    flex-direction: column;
    justify-content: center;
    align-content: center;
    text-align: center;
`

export const Name=styled.p`
    font-weight: 500;
    color:white;
`

export const Company=styled.p`
    font-weight: 500;
`

export const Description=styled.p`
    font-weight: 400;
    width:550px;
    @media screen and (max-width:576px){
        width:300px;
    }
`