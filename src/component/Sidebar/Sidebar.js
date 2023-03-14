import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components';
import { AiOutlineMenu } from 'react-icons/ai';

export default function Header() {
   

    return (
        <>
<MainNavBaby>

</MainNavBaby>

        </>
    )
}
const MyName = styled.div`
display:flex;
padding:10px;
padding-left: 20px;
padding-right:70px;
font-size:20px;
justify-content: start;


`
const MainNavBaby = styled.nav`
display:flex;
justify-content: right;   
float:right;
padding:10px 10px 10px 10px;
`

const MainDropDownIcon = styled.button`
width: 145px;
height: 35px;
color: white;
background-color: rgb(47, 54, 82);
outline: none;
border-radius: 5px;
border: none;
cursor: pointer;
:hover {
    border-style: solid;
    border-color: white;

}


`

const Pages = styled.div`
display: flex;

a {
  color: white;
  text-decoration: none;
}
span{
    padding:10px;
    align-items:center;
    text-decoration:center;
    font-size:20px;

}
`
