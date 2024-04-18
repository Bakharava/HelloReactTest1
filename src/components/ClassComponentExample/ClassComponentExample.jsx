import React from 'react'
class ClassComponentExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            amountOfClicks: 0,
            todos: []
        }
    }

    handleCountClick = () => {
       this.setState({amountOfClicks: this.state.amountOfClicks + 1})
    }
    updateName = (event) => {
        if(event.target.value.indexOf(" ") > -1) {
            throw "Name Cannot Contain blank Spaces";
        }
    }

    async componentDidMount() {
        const result = await fetch("https://jsonplaceholder.typicode.com/todos");
        const todos = await result.json();
        this.setState({todos})
    }

    render() {
        return (
            <>
               <div>Hello</div>
                Enter Name: <input type="text" placeholder="Enter Name" onChange={this.updateName} />
               <button style={{backgroundColor: this.props.backgroundBtnColor}} onClick={this.handleCountClick}>Click me</button>
                <div>{this.state.amountOfClicks}</div>
                {this.state.todos.map((todo, i) => {
                    if (i < 10) {
                        return (
                            <li>{todo.title}</li>
                        )
                    }
                }
                )}
            </>
        )
    }
}

export default ClassComponentExample;