function Switch({ toggle, touched}) {

    return (
        <>
            <p>Click to show</p>
            <input type="checkbox" onChange={touched} checked={toggle} />
        </>
    )
}

export default Switch;