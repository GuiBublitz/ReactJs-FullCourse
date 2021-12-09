import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Nav>
            <Logo src=""/>
            <NavMenu/>
        </Nav>

    )
}

export default Header

const Nav = styled.nav`
    background: red;
`
const Logo = styled.img`
    width: 80px;
`
const NavMenu = styled.div`
    
`