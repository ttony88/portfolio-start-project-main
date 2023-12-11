import styled from "styled-components";
import { ButtonLink } from "../../../../../components/button-link/ButtonLink";
import { FlexWrapper } from "../../../../../components/flex-wrapper/FlexWrapper";
import { IntervalDate } from "../../../../../components/interval-date/IntervalDate";
import { Place } from "../../../../../components/place/Place";
import { ItemTitle } from "../../../../../components/item-title/ItemTitle";

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
                    <ButtonLink href="#">Full Time</ButtonLink>  
                    <IntervalDate interval={props.interval} />
                </div>
            </FlexWrapper>
        </li>
    )
}

const PlaceOfStudy = styled.div`
    display: flex;
`