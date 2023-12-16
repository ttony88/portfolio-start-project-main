import styled from "styled-components"
import { SectionTitle } from "../../../components/section-title/SectionTitle"

export function Mail() {

    return(
        <MailStyled>
            <SectionTitle fontSize="58px">
                For any questions please mail me:
            </SectionTitle>
            <a href="mailto:1988anton62@gmail.com">
                1988anton62@gmail.com
            </a>
        </MailStyled>
    )
}

const MailStyled = styled.section`
    
`