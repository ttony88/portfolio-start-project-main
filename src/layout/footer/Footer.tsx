import styled from "styled-components"
import { Contacts } from "./contacts/Contacts"
import { FooterNav } from "./footer-nav/FooterNav"

export function Footer() {

    return(
        <FooterStyled>
            <Contacts />
            <FooterNav />
        </FooterStyled>
    )
}

const FooterStyled = styled.footer`
    
`