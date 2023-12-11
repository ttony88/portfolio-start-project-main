import styled from "styled-components";
import { ButtonLink } from "../../../../../components/button-link/ButtonLink";
import { FlexWrapper } from "../../../../../components/flex-wrapper/FlexWrapper";
import { IntervalDate } from "../../../../../components/interval-date/IntervalDate";
import { Place } from "../../../../../components/place/Place";
import { Location } from "../../../../../components/location/Location";
import { ItemTitle } from "../../../../../components/item-title/ItemTitle";

type ExperienceItemPropsType = {
    placeName: string
    locationName: string
    placeIconId?: string
    locationIconId?: string
    interval: string
    itemTitle: string
}

export function ExperienceItem(props: ExperienceItemPropsType) {
     
    return(
        <li>
            <FlexWrapper justify="space-between">
                <div>
                    <ItemTitle>{props.itemTitle}</ItemTitle>
                    <FlexWrapper>
                        <PlaceOfWork>
                            <Place placeName={props.placeName}
                                   iconId={props.placeIconId || "office"} />
                        </PlaceOfWork>
                        <LocationWork>
                            <Location locationName={props.locationName}
                                      iconId={props.locationIconId || "location"}/>
                        </LocationWork>
                    </FlexWrapper>

                    
                </div>
                <div>
                    <ButtonLink href="#">Full Time</ButtonLink>  
                    <IntervalDate interval={props.interval} />
                </div>
            </FlexWrapper>
        </li>
    )
}

const PlaceOfWork = styled.div`
    display: flex;
`
const LocationWork = styled.div`
    display: flex;
`