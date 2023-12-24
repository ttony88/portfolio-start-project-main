import { Icon } from "../../icon/Icon";
import { FlexWrapper } from "../../flex-wrapper/FlexWrapper";

type LocationPropsType = {
    iconId?: string
    locationName: string
}

export function Location(props: LocationPropsType) {

    return(
        <FlexWrapper>
            <Icon iconId={props.iconId || "location"} width="16" height="12" viewBox="0 0 16 12" />
            <span>{props.locationName}</span>
        </FlexWrapper>
        
    )
}