import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from './counterSilce';
import { Button } from 'react-bootstrap';


CounterFeature.propTypes = {};

function CounterFeature(props) {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter);
    const handleIncreaseClick = () => {
        const action = increase(); // action creator
        dispatch(action);
    };

    const handleDecreaseClick = () => {
        const action = decrease(); // action creator
        dispatch(action);
    };
    return (
        <div>
            Counter: {counter}
            <div>
                <Button variant="outline-primary" onClick={handleIncreaseClick}>
                    Increase
                </Button>
                <Button variant="outline-warning" onClick={handleDecreaseClick}>
                    Decrease
                </Button>
            </div>
        </div>
    );
}

export default CounterFeature;
