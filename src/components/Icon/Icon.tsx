import iconsSprite from "../../assets/img/icons-sprite.svg"

type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
    fill?: string
}

export function Icon(props:IconPropsType){
    return(
        <svg width={props.width || "120"} height={props.height || "120"} 
                    viewBox={props.viewBox || "0 0 120 120"} xmlns="http://www.w3.org/2000/svg"
                    fill={props.fill || "#000000"}>
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
        </svg>
    )
}
