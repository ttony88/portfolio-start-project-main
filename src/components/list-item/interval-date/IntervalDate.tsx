import styled from "styled-components"
import { Icon } from "../../icon/Icon"

type IntervalDatePropsType = {
    iconId?: string
    interval: string
}

export function IntervalDate(props: IntervalDatePropsType) {
    return(
        <IntervalDateStyled>
            <Icon iconId={props.iconId || "calendar"} width="16" height="12" viewBox="0 0 16 12" />
            <span>
                {props.interval}
            </span>
        </IntervalDateStyled>
    )
}

const IntervalDateStyled = styled.div`
    display: flex;
`