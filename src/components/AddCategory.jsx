import { useState } from "react";


export const AddCategory = ({onNewCategory}) => {
  
    const [inputValue, setInputValue] = useState( "" );

    const onInputChange = (event) => {

        // console.log(event.target.value);
        setInputValue(event.target.value);
    };

    const onSubmitt = (event) => {

        event.preventDefault(); // Para evitar que se actualice la Pagina
        if ( inputValue.trim().length <= 1) return;
        
        onNewCategory(inputValue.trim());
        setInputValue( "" );


    };

    return (
        <form onSubmit={ onSubmitt }>
            <input 
            type="text" 
            placeholder="Buscar gifs" 
            value={ inputValue } 
            onChange={ onInputChange } 
            />

        </form>
   
    );
}
