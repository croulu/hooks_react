import './App.css';
import React, {Component} from "react";

class App extends Component {
    state = {
        name: 'Lulu',
        age: 36
    }

    componentDidMount = () => {
        console.log('mounted')
        this.setState({name: 'Antho'})
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.name === 'Lulu') {
            console.log('update')
        }
    }

    componentWillUnmount() {
        console.log('willunmont')
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
