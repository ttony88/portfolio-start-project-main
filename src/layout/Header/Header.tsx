import styled from "styled-components"
import { Icon } from "../../components/icon/Icon"
import { NavBar } from "../../components/nav-bar/NavBar"
import { NavLinksSocial } from "../../components/nav-link-social/NavLinksSocial"
import { FlexWrapper } from "../../components/flex-wrapper/FlexWrapper"

export function Header(){

    return(
        <HeaderStyled>
            <Icon iconId="logo" width="97" height="59" viewBox="0 0 97 59"/>
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