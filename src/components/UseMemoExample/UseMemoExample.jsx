import {useEffect, useMemo, useState} from "react";


function complexCount (num) {
    console.log('Count...')
    for (let i = 0; i < 1000000000; i++) {
        num += 1;
    }
    return num;
}
function UseMemoExample()  {
    const [amountOfClicks, setAmountOfClicks] = useState(1);
    const [isBlockVisible, setIsBlockVisible] = useState(false);
    const [isRed, setIsRed] = useState(false);

    const handleAddClick = () => {
        setAmountOfClicks((prevAmount) => {
            return prevAmount + 1
        })
    }

    const handleASubClick = () => {
        setAmountOfClicks((prevAmount) => {
            return prevAmount -1
        })
    }

 //   const computed = complexCount(amountOfClicks)

const computed = useMemo(() => {
return complexCount(amountOfClicks)
}, [amountOfClicks])

    const handleShowBlock = () => {
   setIsBlockVisible(!isBlockVisible)
    }

    // const blockStyles = {
    //         color: isRed ? "red" : "black"
    // }

    // const blockStyles = {
    //         color: isRed ? "red" : "black"
    // }

    const blockStyles = useMemo(() => {
        return {color: isRed ? "red" : "black"}
    }, [isRed])

    const handleChangeStyle = () => {
        setIsRed(!isRed)
    }

    useEffect(() => {
        console.log('Styles changed')
    }, [blockStyles])



    return (
        <div>
            <h1>Amount of clicks: {amountOfClicks}</h1>
            <button onClick={handleAddClick}>Add Click</button>
            <button onClick={handleASubClick}>Sub Click</button>

            <h1>Computed {computed}</h1>

            <div style={blockStyles}>Changing styles</div>
            <button onClick={handleChangeStyle}>Change style</button>

            <button onClick={handleShowBlock}>Show block</button>
            {isBlockVisible && <div>Block to show</div>}
        </div>
    )
}

export default UseMemoExample;