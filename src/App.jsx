import React from 'react';
import Button from './components/Button';
import Result from './components/Result';
import './App.css';
import MathOperations from './components/MathOperations';

const App = () => {
    //debugger;
    console.log('rendering app');
    return (
        <main className='react-calculator'>
            <Result />
            <div className="numbers">
                <Button text="1" clickHandler={pressButton}></Button>
                <Button text="2" clickHandler={pressButton}></Button>
                <Button text="3" clickHandler={pressButton}></Button>
                <Button text="4" clickHandler={pressButton}></Button>
                <Button text="5" clickHandler={pressButton}></Button>
                <Button text="6" clickHandler={pressButton}></Button>
                <Button text="7" clickHandler={pressButton}></Button>
                <Button text="8" clickHandler={pressButton}></Button>
                <Button text="9" clickHandler={pressButton}></Button>
                <Button text="0" clickHandler={pressButton}></Button>
            </div>

            <div className="functions">
                <Button text="clear"></Button>
                <Button text="r"></Button>
            </div>
            <MathOperations onClickOperation={operate} onClickEqual={functionEqual} />
        </main>
    )
}

const operate = (operation) => {
    console.log('operation: ', operation);
}

const functionEqual = () => {
    console.log('equals');
}

const pressButton = () => {
    console.log('press button')
}

export default App;