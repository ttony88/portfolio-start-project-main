import styled from "styled-components"
import { SectionTitle } from "../../../components/section-title/SectionTitle"
import { font } from "../../../styles/common"

export function Mail() {

    return(
        <MailStyled>
            <SectionTitle fontSize="58px" textAlign="center" >
                For any questions please mail me:
            </SectionTitle>
            <MyMail href="mailto:1988anton62@gmail.com">
                1988anton62@gmail.com
            </MyMail>
        </MailStyled>
    )
}

const MailStyled = styled.section.attrs(() => ({
    id: "Contact"
  }))`
    padding-top: 185px;
    margin-bottom: 200px;
    text-align: center;
    font-family: DM Sans;
`
const MyMail = styled.a`
    ${font({family: "DM Sans", weight: 700, color: "transparent", lineHeight: 2, Fmax: 58, Fmin: 28})};
    background-image: linear-gradient(90deg, #13B0F5 -2.06%, #E70FAA 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`