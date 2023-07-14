import { useDispatch, useSelector } from "react-redux";
import './Home.css'
import { decrementCounter, incrementCounter, resetCounter, setCounter } from "../../reduxServices/actions/counterActions";
import { useRef, useState } from "react";


const Home = () => {

    const [counterName, setCounterName] = useState('Tally Counter')

    const valueRef = useRef()

    const counterNameRef = useRef()

    const count = useSelector(state => state.count)

    const dispatch = useDispatch()

    const handleIncrement = () => {
        dispatch(incrementCounter())
    }

    const handleDecrement = () => {
        dispatch(decrementCounter())
    }

    const handleReset = () => {
        dispatch(resetCounter())
    }

    const handleStartValue = () => {
        dispatch(setCounter(parseFloat(valueRef.current.value)))
    }

    const handleCounterName = () => {
        setCounterName(counterNameRef.current.value)
    }

    return (
        <div className="count-container">
            <div className="tally-counter-container">
                <h1>{counterName}</h1>
                <h2 className="count">Count: {count}</h2>
                <div>
                    <button onClick={handleIncrement} className="button-add">Add</button>
                    <button onClick={handleDecrement} className="button-reduce">Reduce</button>
                    <button onClick={handleReset} className="button-reset">Reset</button>
                    <div className="start-value-container">
                        <input ref={valueRef} className="value-input" type="number" name="" id="" placeholder="Start Value" />
                        <div className="text-center">
                            <button onClick={handleStartValue} className="button-start-value">Enter Your Start Value</button>
                        </div>
                    </div>
                    <div className="counter-name-container">
                        <input ref={counterNameRef} className="value-input" type="text" name="" id="" />
                        <button onClick={handleCounterName} className="button-counter-name">Enter Your Counter Name</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;