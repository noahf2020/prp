import React,{useState} from 'react'
import styled from 'styled-components'
import Sidebar from '../Sidebar/Sidebar'

export default function Header() {

    return (
        <>
        <MainNavBar>
           <Sidebar />
        </MainNavBar>
       
    </>
    )
}


const MainNavBar = styled.nav`

background-color: #0e1229;
height: 45px;
overflow: none;
`


const Nav = styled.div``

const Name = styled.div`
display: flex;
padding-left: 10px;

font-size: 40px;
font-style: bold;
`