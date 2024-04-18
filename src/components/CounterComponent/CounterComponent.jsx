import {useId, useState} from "react";

const getInitialStateForCount = () => {
    console.log('Count')
             return   Math.floor(Math.random() *10)
}
const CounterComponent = () => {
 //const [amountOfClicks, setAmountOfClicks] = useState(1);
 const [amountOfClicks, setAmountOfClicks] = useState(() => getInitialStateForCount());
 const [user, setUser] = useState({name: 'Tom', age: 7})

 const handleAddClick = () => {
     setAmountOfClicks(amountOfClicks + 1) //1 = 2
     setAmountOfClicks(amountOfClicks + 1) //1 = 2

     setAmountOfClicks((prevAmount) => {  //2 = 3
         return prevAmount + 1
     })
 }

 const handleChangeName = () => {
      setUser({...user, name: 'Jery'})
 }

       return (
        <div>
            <button onClick={handleAddClick}>Add Click</button>
            <h1>Amount of clicks: {amountOfClicks}</h1>

            <div>{JSON.stringify(user)}</div>
            <button onClick={handleChangeName}>Change Name</button>

        </div>

    )
}

export default CounterComponent;