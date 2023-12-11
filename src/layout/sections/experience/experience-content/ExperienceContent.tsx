import { ExperienceItem } from "./experience-item/ExperienceItem";

export function ExperienceContent() {

    return(
        <ul>
            <ExperienceItem placeName="NKLT" 
                            locationName="Ryazan"
                            interval="May2021 - Nov2023"
                            itemTitle="Frontend developer" />
        </ul>
    )
}