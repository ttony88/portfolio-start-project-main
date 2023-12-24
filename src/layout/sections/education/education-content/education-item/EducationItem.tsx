import styled from "styled-components";
import { FlexWrapper } from "../../../../../components/flex-wrapper/FlexWrapper";
import { IntervalDate } from "../../../../../components/list-item/interval-date/IntervalDate";
import { Place } from "../../../../../components/list-item/place/Place";
import { ItemTitle } from "../../../../../components/list-item/item-title/ItemTitle";

type EducationItemPropsType = {
    placeName: string
    iconId?: string
    interval: string
    itemTitle: string
}

export function EducationItem(props: EducationItemPropsType) {
     
    return(
        <li>
            <FlexWrapper justify="space-between">
                <div>
                    <ItemTitle>{props.itemTitle}</ItemTitle>
                    <PlaceOfStudy>
                        <Place placeName={props.placeName}
                               iconId={props.iconId || "office"} />
                    </PlaceOfStudy>
                </div>
                <div>
                     
                    <IntervalDate interval={props.interval} />
                </div>
            </FlexWrapper>
        </li>
    )
}

const PlaceOfStudy = styled.div`
    display: flex;
`