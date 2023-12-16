import styled from "styled-components"
import { SectionTitle } from "../../../components/section-title/SectionTitle"
import { MyMail } from "../../../components/my-mail/MyMail"

export function Mail() {

    return(
        <MailStyled>
            <SectionTitle fontSize="58px">
                For any questions please mail me:
            </SectionTitle>
            <MyMail href="mailto:1988anton62@gmail.com">
                1988anton62@gmail.com
            </MyMail>
        </MailStyled>
    )
}

const MailStyled = styled.section`
    
`