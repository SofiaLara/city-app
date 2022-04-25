import ButtonMain from './components/ButtonMain'

function HigherOrder() { 
    //The aim is to create a reusable button component
    //Higher order components take a component and return a component
    //This is not a HOC
    return (
        <>
            <ButtonMain count={2}/>
            <ButtonMain count={20}/>
            <ButtonMain count={200}/>
        </>
    )
}

export default HigherOrder;