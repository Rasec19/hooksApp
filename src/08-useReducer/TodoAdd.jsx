import { useRef } from "react"

export const TodoAdd = () => {

    const inputRef = useRef();

    const click = () => {
        console.log(inputRef)
    }

    return (
    <form>
        <input 
            type="text"
            placeholder="¿Qué hay que hacer?"
            className="form-control"
            ref={ inputRef }
        />
        <button 
            type="submit"
            className="btn btn-outline-primary mt-1"
            onClick={click}
        >
            Agregar
        </button>
    </form>
    )
}
