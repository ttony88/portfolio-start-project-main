import styled from "styled-components"

type StatusItemPropsType = {
    textButton: string
}

export function ButtonItem(props: StatusItemPropsType) {
    return(
        <StatusItemStyled href="#">
            {props.textButton}
        </StatusItemStyled>
    )
}

const StatusItemStyled = styled.a`
    display: block;
    width: 84px;
    height: 24px;
    color: #018C0F;
    font-size: 9px;
    font-weight: 600;
    line-height: 26px;
    background-color: #D7FFE0;
    text-align: center;
    border-radius: 20px;
`