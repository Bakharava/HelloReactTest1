const Clock = (props) => {
    console.log(props.date)
    return (
    <div>
      <h1>Привет, мир!</h1>
      <h2>Сейчас {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}

export default  Clock;