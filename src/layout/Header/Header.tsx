import styled from "styled-components"
import { Icon } from "../../components/Icon/Icon"
import { NavBar } from "../../components/NavBar/NavBar"
import { NavLinksSocial } from "../../components/NavLinksSocial/NavLinksSocial"

export function Header(){

    return(
        <HeaderStyled>
            <Icon iconId="logo" width="97" height="59" viewBox="0 0 97 59"/>
            <Row>
                <NavBar />
                <NavLinksSocial />
            </Row>
        </HeaderStyled>
    )
}

const HeaderStyled = styled.header`
    display: flex;
    justify-content: space-between;
`

const Row = styled.div`
    display: flex;
`