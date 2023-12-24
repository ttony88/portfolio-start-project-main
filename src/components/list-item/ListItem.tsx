import styled from "styled-components"
import { ItemTitle } from "./item-title/ItemTitle"
import { Place } from "./place/Place"
import { Location } from "./location/Location"
import { IntervalDate } from "./interval-date/IntervalDate"
import { ButtonItem } from "./button-item/ButtonItem"

type ListItemPropsType = {
    itemTitle: string
    textButton: string
    placeName: string
    locationName: string
    interval: string
}

export function ListItem(props: ListItemPropsType) {

    return(
        <li>
            <RowTop>
                <ItemTitle>
                    {props.itemTitle}
                </ItemTitle>
                <ButtonItem textButton={props.textButton} />
            </RowTop>
            <RowBottom>
                <Place placeName={props.placeName} />
                <Location locationName={props.locationName} />
                <IntervalDate interval={props.interval} />
            </RowBottom>
        </li>
    )
}
const RowTop = styled.div`
    display: flex;
    justify-content: space-between;
`
const RowBottom = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    letter-spacing: 1px;
`