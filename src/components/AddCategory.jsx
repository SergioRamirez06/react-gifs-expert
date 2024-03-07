import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onAddChange = ({ target }) => {
        setInputValue( target.value );
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        const newInputValue = inputValue.trim();
        if(  newInputValue <= 1 ) return;
        setInputValue('');
        onNewCategory( newInputValue );
        
    }

  return (
    <form onSubmit={ onSubmit }>
        <input 
            type="text"
            placeholder="Buscar Gifs"
            value={ inputValue } 
            onChange={ onAddChange }/>
    </form>
  )
}
