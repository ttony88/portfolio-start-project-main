import styled from "styled-components"
import { Contacts } from "./contacts/Contacts"
import { FooterNav } from "./footer-nav/FooterNav"
import { Container } from "../../components/container/Container"

export function Footer() {

    return(
        <FooterStyled>
            <Container>
                <Contacts />
                <FooterNav />
            </Container>
            
        </FooterStyled>
    )
}

const FooterStyled = styled.footer`
    padding-bottom: 60px;
`