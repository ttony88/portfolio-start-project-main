import styled from "styled-components"
import { NavBar } from "../../components/nav-bar/NavBar"
import { NavLinksSocial } from "../../components/nav-link-social/NavLinksSocial"
import { FlexWrapper } from "../../components/flex-wrapper/FlexWrapper"
import { Logo } from "../../components/logo/Logo"
import { Container } from "../../components/container/Container"

export function Header(){

    return (
      <HeaderStyled>
        <Container>
          <FlexWrapper justify="space-between">
            <Logo />
            <FlexWrapper align="center">
              <NavBar />
              <NavLinksSocial />
            </FlexWrapper>
          </FlexWrapper>
        </Container>
      </HeaderStyled>
    );
}

const HeaderStyled = styled.header`
    margin: 40px 0 220px;
`