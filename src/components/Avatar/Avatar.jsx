import {useState} from "react";

const Avatar = ({clicks = 4}) => {
const [amountOfClicks, setAmountOfClicks] = useState(3)
    // amountOfClicks = clicks

//let amountOfClicks = 0
const handleClick = () => {
    setAmountOfClicks(amountOfClicks + 1);
}

    return (
        <div>
            {/*<img src={imageSrc} alt={imgAltText} />*/}
            {/*<div>{imgAltText}</div>*/}

                <button onClick={handleClick}>Click!!!</button>
                <div>{amountOfClicks}</div>

        </div>
    )
}

export  default Avatar;