import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    username: 'strider',
    email: 'rasec.camacho19@gmail.com'
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [ name ]: value
    });
  }
  
  useEffect( () => {
    // console.log('useEffect called');
  }, []);
  
  useEffect( () => {
    // console.log('formState changed');
  }, [ formState ]);
  
  useEffect( () => {
    // console.log('email changed');
  }, [ email ]);


  return (
    <>
        <h1>Formulario Simple</h1>
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

        {
          (username === 'strider2') && <Message />
        }
    </>
  )
}
