import styled from "styled-components"
import { Icon } from "../../components/icon/Icon"
import { NavBar } from "../../components/nav-bar/NavBar"
import { NavLinksSocial } from "../../components/nav-link-social/NavLinksSocial"
import { FlexWrapper } from "../../components/flex-wrapper/FlexWrapper"
import { Logo } from "../../components/logo/Logo"

export function Header(){

    return(
        <HeaderStyled>
            <Logo />
            <FlexWrapper>
                <NavBar />
                <NavLinksSocial />
            </FlexWrapper>
        </HeaderStyled>
    )
}

const HeaderStyled = styled.header`
    display: flex;
    justify-content: space-between;
`