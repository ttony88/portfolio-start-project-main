import styled from "styled-components";
import { Icon } from "../icon/Icon";

type LocationPropsType = {
    iconId?: string
    locationName: string
}

export function Location(props: LocationPropsType) {

    return(
        <LocationStyled>
            <Icon iconId={props.iconId || "location"} width="16" height="12" viewBox="0 0 16 12" />
            <span>{props.locationName}</span>
        </LocationStyled>
        
    )
}

const LocationStyled = styled.div`
    display: flex;
`