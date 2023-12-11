import { Icon } from "../icon/Icon"

type PlacePropsType = {
    iconId?: string
    placeName: string
}

export function Place(props: PlacePropsType) {
    return(
        <>
            <Icon iconId={props.iconId || "office"} width="16" height="12" viewBox="0 0 16 12" />
            <span>{props.placeName}</span>
        </>
    )
} 