import React from 'react'
import styled from 'styled-components'

import Typed from 'typing-ind' // import component from library


export default function Footer() {
    return (
        <div>
            
          <Foot>
          <Typed 
      type={['Github: Noahf2020 ', 'Discord: Noahc#0001',]} // if no backspace animation just write 1 string only (no need to use array)
      backspace={[]} // contains the index value of the type property, if only 1 index no need to use array (will execute from the smallest index)
      delay={1000} // delay backspace animation (in milliseconds)
      duration={50} // duration of typing animation per character (in milliseconds). Default 100
      cursor={'blinking-text-cursor'} // style for blinking text cursor animation. can be filled directly with css properties or class names in your css file
      />
        {/* <Typing>
        <a href="https://github.com/noahf2020">
                
                <span>Github: Noahf2020</span>
            </a>
            <a href="https://twitter.com/Noahc0001">
            
                <span >Twitter: Noahc0001</span>
            </a>
            <a>
                <span>Discord: Noahc#0001</span>
            </a>
        </Typing>
             */}
              
          </Foot>  
        </div>
    )
}


const Foot = styled.footer `
align-items: center;
padding-top:150px;
text-align: center;
position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;   
a{
    padding-left: 25px;
    color: white;
}
a:link {
  text-decoration: none;
}
`

const GithubImg = styled.img `
padding-right: 5px;
width: 19px;
height: 19px;

`