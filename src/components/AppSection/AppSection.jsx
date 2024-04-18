import React from "react";

class AppSection extends React.Component {
    render() {
        return (
        <div>
            <div>App Section awesome component</div>
            <button onClick={this.props.showTodos}>Show todos</button>
        </div>
    )
    }


}

export  default AppSection;