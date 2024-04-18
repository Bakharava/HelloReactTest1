import {useEffect, useLayoutEffect, useState} from "react";

function UseLayotEffectExample()  {
    const [amountOfClicks, setAmountOfClicks] = useState(0);

    // useEffect(() => {
    //     if(amountOfClicks === 0) {
    //         setAmountOfClicks(Math.random() * 99 + 99)
    //     }
    // }, [amountOfClicks])
    const handleAddClick = () => {
        setAmountOfClicks(0)
    }

    useLayoutEffect(() => {
        if(amountOfClicks === 0) {
            setAmountOfClicks(Math.random() * 99 + 99)
        }
    }, [amountOfClicks])


    console.log("render", amountOfClicks);

    return (
        <div>
            <button onClick={handleAddClick}>Add Click</button>
            <h1>Amount of clicks: {amountOfClicks}</h1>
        </div>
    )
}

export default UseLayotEffectExample;