import React from 'react'
import './Card.css'
import styled from 'styled-components'

export default function Cards() {
    return (

            <div class="container">
  <div class="card">
    <h3 class="title">Portfolio</h3>
 
    <div class="circle">
    </div>

  </div>
  <div class="card">
    <h3 class="title">About Me</h3>
    <div class="bar">
   
    </div>
    <div class="circle">
     
  
    </div>
  </div>
  <div class="card">
    <h3 class="title">Article</h3>

    <GoToArtBtn onClick={event =>  window.location.href='/article'}>View Articles</GoToArtBtn>
   
  
  </div>

</div>
      
    )
}


const GoToArtBtn = styled.button`

height: 30px;
width:100px;
position: absolute;
    top: 100px;
    left: 50px;
    border-radius:5px;
    outline: none;
    border: none;
    background-color: rgb(47, 54, 82);
    cursor: pointer;
    color:white;
:hover {
    border-style: solid;
    border-color: white;

}
`