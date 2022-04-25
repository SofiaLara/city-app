
function Button(props) { 

    return (
        <>
            <button onClick={() => props.onClick(props.counter + 1)}>+</button>
        </>
    )
}

export default Button;