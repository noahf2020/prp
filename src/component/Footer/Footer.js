import React from 'react'
import styled from 'styled-components'
import gitHubimg from './github.svg'
import twit from './twitter.svg'
import Particles from 'react-particles-js';
import Typing from 'react-typing-animation';

export default function Footer() {
    return (
        <div>
            
          <Foot>
        <Typing>
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