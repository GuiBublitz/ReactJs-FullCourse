import React from 'react'
import styled from 'styled-components'

function Login() {
    return (
        <Container>
            <CTA>
                <CTALogoOne src="images/cta-logo-one.svg"/>
                <SingUp>GET ALL THERE</SingUp>
                <Description>
                    Get premier Acess to Raya and the Last Dragon for
                    an additional free with a Disney+ subscription.
                    As of 03/26/21, the price of Disney+ and The Disney 
                    Bundle a will increase by $1.
                </Description>
                <CTALogoTwo src="images/cta-logo-two.png"/>
            </CTA>
        </Container>
    )
}

export default Login

const Container = styled.div` 

    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    justify-content: center;
    &:before{   
        background-position:top;
        background-size: cover;
        background-repeat: no-repeat;
        position: absolute;
        content: "";
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background-image: url('images/login-background.jpg');
        z-index: -1;
        opacity: 0.7;
    }
`
const CTA = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 90%;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
`
const CTALogoOne = styled.img`

`
const SingUp = styled.a`
    width: 100%; 
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0;
    color: #f9f9f9;
    text-align: center;
    border-radius: 4px;
    font-size: 18px; 
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;

    &:hover{
        background: #0483ee; 
    }
`
const Description = styled.p `
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
`
const CTALogoTwo = styled.img`
    width: 90%;
    margin: 0 auto;
`