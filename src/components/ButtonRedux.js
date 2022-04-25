import { useDispatch, useSelector } from "react-redux";
import {
  decrementValueAction,
  incrementValueAction,
} from "../redux/store";

function ButtonRedux() { 
    const dispatch = useDispatch();
    const value = useSelector((state) => state.value);

    const incrementHandler = () => { 
        dispatch(incrementValueAction(value));
    }

    const decrementHandler = () => { 
        dispatch(decrementValueAction(value));
    }

    return (
        <>
            <button onClick={incrementHandler}>Hey+</button>
            <button onClick={decrementHandler}>Hey-</button>
        </>
    )
}

export default ButtonRedux;