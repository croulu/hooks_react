import './App.css';
import React, {Component} from "react";

class App extends Component {
    state = {
        name: 'Lulu',
        age: 36
    }

    render() {
        const {name, age} = this.state
        return (
            <h1>Hello {name} - {age}</h1>
        )
    }
}

export default App;
