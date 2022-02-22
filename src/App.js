import './App.css';
import React, {Component} from "react";
import {useState} from "react";

const DisplayName = ({name}) => {
    return (
        <>
            <h3>display Name : {name}</h3>
        </>
    )
}

class App extends Component {
    state = {
        name: 'Lulu',
        exp: 36
    }

    componentDidMount = () => {
        console.log('mounted')
        this.setState({name: 'Bob'})
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

        const {pilou, plop} = {pilou: 'pilouTest', plop: 'plopValue'}
        const [tab1, tab2, ...tabReste] = [1, 2, 3, 4, 5]

        console.log(pilou, plop)
        console.log(tab1, tab2, tabReste)

        return (
            <>
                <h1>Hello {name} - {exp}</h1>
                <h2>{this.props.age}</h2>
                <h3>{age}</h3>
                <DisplayName name={name}/>
                <button onClick={this.handleClick}>Click</button>
                <AppHooks num={2}/>
            </>
        )
    }
}

export default App;

const AppHooks = ({num}) => {
    const [result, setResult] = useState(num)
    const plusDeux = () => setResult(result + 2)

    return (<>
        <h1>le résultat est :: {result}</h1>
        <button onClick={plusDeux}>+2</button>
    </>)
}
