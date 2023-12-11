import styled from "styled-components";
import { ButtonLink } from "../../../../../components/button-link/ButtonLink";
import { FlexWrapper } from "../../../../../components/flex-wrapper/FlexWrapper";
import { IntervalDate } from "../../../../../components/interval-date/IntervalDate";
import { Place } from "../../../../../components/place/Place";

type EducationItemPropsType = {
    placeName: string
    iconId?: string
}

export function EducationItem(props: EducationItemPropsType) {
     
    return(
        <li>
            <FlexWrapper justify="space-between">
                <div>
                    <h3>Engineer</h3>
                    <PlaceOfStudy>
                        <Place placeName={props.placeName}
                               iconId={props.iconId || "office"} />
                    </PlaceOfStudy>
                </div>
                <div>
                    <ButtonLink href="#">Full Time</ButtonLink>  
                    <IntervalDate interval="Sep 2005 - May 2010" />
                </div>
            </FlexWrapper>
        </li>
    )
}

const PlaceOfStudy = styled.div`
    display: flex;
`