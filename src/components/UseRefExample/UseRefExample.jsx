import {useEffect, useRef, useState} from "react";

// let amountOfRenders = 1 //variable outside react
function UseRefExample()  {
    const [renders, setRenders] = useState(1)
    const [name, setName] = useState('');
    const amountOfRenders = useRef(1) //Object with property current
    const myInputRef = useRef(null); //We can get references to DOM element
    const prevNameState = useRef('')

    // useEffect(() => {
    //     setRenders(prevState => prevState + 1)
    // })

    // useEffect(() => {
    //     amountOfRenders++
    // })

    useEffect(() => {
        console.log(amountOfRenders)
        amountOfRenders.current++
    })

    useEffect(() => {
        console.log(myInputRef.current.value)
    })

    useEffect(() => {
        prevNameState.current = name
    }, [name])

    const handleClickWithFocus = () => {
        myInputRef.current.focus()
    }

    return (
        // <div>Amount of renders: {renders}</div>
        <div>
            <div>Amount of renders: {amountOfRenders.current}</div>
            <div>Previous name: {prevNameState.current}</div>
            <input
                type="text"
                onChange={event => setName(event.target.value)}
                value={name}
                ref={myInputRef}
            />
            <button onClick={handleClickWithFocus}>Focus</button>
        </div>
    )
}

export default UseRefExample;