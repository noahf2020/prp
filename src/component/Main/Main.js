import React from 'react'

import styled from 'styled-components';






export default function Main() {
    function CopyEmail(){
        window.open("mailto:noahcfrank@outlook.com")
    }
    return (
<MAINEVERYTHING>
<MainHeaderDiv>
  
<MainTextDiv>


       
               <MainText className="typingBarText">Hey, Im Noah</MainText>
               
               <SecondText >Current Programming Languages: NodeJS and Python</SecondText>
            
               <Second3Text > I specialize in software Development</Second3Text>
               <Second3Text >Graduating HighSchool in 2024</Second3Text>
                 

              <ContactMeBtn onClick={CopyEmail}>
                  Contact Me
              </ContactMeBtn>
              
                     
    
          
          </MainTextDiv>


</MainHeaderDiv>
</MAINEVERYTHING>

    )
}
//190
const MAINEVERYTHING = styled.div`
  position: relative;


`
const ContactMeBtn = styled.button `
width: 220px;
height: 40px;
margin-top: 40px;
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

const IMG = styled.img`
 width: 450px;
 height:340px;
 padding-top:10px;
 padding-left: 70px;
 -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
 


`


const MainTextDiv = styled.div`
margin-top: 100px;
margin-left:32%;
align-items: center;
text-align:center;


`
const Second3Text = styled.h2 `
font-size: 15px;

`


const MainText = styled.h1 `

font-size: 40px;
`

const SecondText = styled.h2 `

font-size: 20px;
`



const MainHeaderDiv = styled.header `
display: flex;

 
`