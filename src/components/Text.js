import { useSelector } from "react-redux";

function Text() { 
    const value = useSelector((state) => state.value);
    
    return (
        <p>Hello! {value}</p>
    )
}

export default Text;