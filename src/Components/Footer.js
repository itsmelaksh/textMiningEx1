import React from 'react'
import logo from '../assets/pinup-icon-trans.png'
import { Container,  
         Image,  
         Segment } from 'semantic-ui-react';

const Footer = () => (
    <Segment
        inverted
        vertical
        style={{ margin: '0em', height: '106px', padding: '2em 0em' }}
    >
        <Container textAlign='center'>
            <Image
                centered
                size='mini'
                src={logo}
            />
            <p style={{ color:'#999' }}>Copyright &copy; 2018 Team-03 NUS-ISS KE-30</p>
        </Container>
    </Segment>
)

export default Footer