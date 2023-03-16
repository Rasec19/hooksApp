import { useEffect, useState } from "react"
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {

  const { formState, onInputChange, username, email, password, onResetForm } = useForm({
    username: '',
    email: '',
    password: '',
  });

  // const { username, email, password } = formState;

  return (
    <>
        <h1>Formulario con custom Hook</h1>
        <hr />

        <input 
            type="text" 
            name="username" 
            className="form-control"
            placeholder="username"
            value={ username }
            onChange={ onInputChange }
        />
        
        <input 
            type="email" 
            name="email" 
            className="form-control mt-2"
            placeholder="example@example.com"
            value={ email }
            onChange={ onInputChange }
        />
        
        <input 
            type="password" 
            name="password" 
            className="form-control mt-2"
            placeholder="Contraseña"
            value={ password }
            onChange={ onInputChange }
        />

        <button onClick={ onResetForm } className="btn btn-primary mt-2">Borrar</button>
    </>
  )
}
