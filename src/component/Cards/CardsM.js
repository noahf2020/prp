import React from 'react'
import styled from 'styled-components'

export default function Cards() {
    return (
     <MainCardContainer>
          <CardDiv></CardDiv>
          <CardDiv></CardDiv>
          <CardDiv></CardDiv>
     </MainCardContainer>
    )
}

const CardDiv = styled.div`
height: 300px;
width: 200px;
background-color:white;
border-radius:3px;
margin-left: 10px;
margin-top:100px;



`

const MainCardContainer = styled.div`
overflow: none;
display: flex;
justify-content:center;
background-color: rgb(47, 54, 82);
border-radius:5px;
width:800px;
height:500px;
position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

/*
  <CardDivTitle>HelloWorld</CardDivTitle>
              <CardDivSubText>Hello World Was a project i made in 2013 Etc..</CardDivSubText>
              <CardDivButton>Hello World Was a project i made in 2013 Etc..</CardDivButton>
        
*/
`