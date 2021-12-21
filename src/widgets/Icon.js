import { useState } from "react"


export const SvgIcon = ({ id, image, width, height, color, hoverColor, onClick }) => {
    const [hover, sethover] = useState(false)
    return (
        <div
            id={id? id: null}
            className="hoverable-icon"
            style={{
                WebkitMaskImage: `url(${image})`,
                width: width,
                height: height,
                backgroundColor: hover ? hoverColor : color,
            }}
            onMouseEnter={() => sethover(true)}
            onMouseLeave={() => sethover(false)}
            onClick={onClick}
            >
        </div>
    )
}