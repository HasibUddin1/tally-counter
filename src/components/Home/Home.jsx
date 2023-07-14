import { useDispatch, useSelector } from "react-redux";
import './Home.css'
import { decrementCounter, incrementCounter, resetCounter, setCounter } from "../../reduxServices/actions/counterActions";
import { useRef } from "react";


const Home = () => {

    const valueRef = useRef()

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

    return (
        <div className="count-container">
            <div className="tally-counter-container">
                <h1>Tally Counter</h1>
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
                </div>
            </div>
        </div>
    );
};

export default Home;