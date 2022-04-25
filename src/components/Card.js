function Card({details}) { 
    return (
        <div>
            <ul>
                <li>{details.name}</li>
                <li>{details.number}</li>
                <li>{details.exp}</li>
                <li>{details.cvv}</li>
            </ul>
        </div>
    )
}

export default Card;