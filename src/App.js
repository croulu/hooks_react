import './App.css';
import React, {Component} from "react";

class App extends Component {
    state = {
        name: 'Lulu',
        age: 36
    }

    handleClick = () => {
        const name = this.state.name === 'Lulu' ? 'Antho' : 'Lulu'
        this.setState({name})
    }

    render() {
        const {name, age} = this.state
        return (
            <>
                <h1>Hello {name} - {age}</h1>
                <button onClick={this.handleClick}>Click</button>
            </>
        )
    }
}

export default App;
