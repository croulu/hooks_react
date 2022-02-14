import './App.css';
import React, {Component} from "react";

class App extends Component {
    state = {
        name: 'Lulu',
        exp: 36
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
        const {name, exp} = this.state
        const {age} = this.props
        return (
            <>
                <h1>Hello {name} - {exp}</h1>
                <h2>{this.props.age}</h2>
                <h3>{age}</h3>
                <button onClick={this.handleClick}>Click</button>
            </>
        )
    }
}

export default App;
