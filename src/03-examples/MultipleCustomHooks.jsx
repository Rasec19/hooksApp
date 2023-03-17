import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "./";
export const MultipleCustomHooks = () => {

    const { counter, increment, decrement } = useCounter(1);

    const { data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);

    // const { author, quote } = !!data && data[0]; 

    return (
    <>
        <h1>BreakingBad Quotes</h1>
        <hr />

        {
            isLoading
                ? <LoadingQuote />
                : data.map( ({ quote, author }) => {
                        return(
                            <Quote quote={ quote } author={ author } key={ Math.random() } />
                        )
                    })
        }

        <button 
            className="btn btn-primary" 
            disabled={ isLoading }
            onClick={ () => increment() }
        >
            Next quote
        </button>
        <button 
            className="btn btn-danger" 
            disabled={ isLoading }
            onClick={ () => decrement() }
        >
            Back quote
        </button>
        

    </>
    )
}
