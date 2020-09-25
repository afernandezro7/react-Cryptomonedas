import React, { useState } from 'react';
import styled from '@emotion/styled';

/** STYLED COMPONENTS **/
const StLabel = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #ffffff;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
`;
const StSelect = styled.select`
    width: 100%;
    display: block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
    font-size: 1.2rem;
`;



/** CUSTOM HOOK **/
const useMoneda = ( label, state, opciones )=>{

    // State del custom Hook
    const [estado, setEstado] = useState(state)

    // Manejar el Select Handlechange
    const handleChange = ( { target } )=>{
        setEstado(target.value)
       
    }

    const Seleccionar = ( )=> (
        <>
            <StLabel> {label} </StLabel>
            <StSelect
                onChange={ handleChange }
                value = { estado }
            >
                <option value="">-- Seleccione --</option>
                { opciones.map( ({ codigo, nombre}) => (

                    <option value={ codigo } key={codigo}>{ nombre }</option>

                ))}
            </StSelect>
        </>
    );

    return [estado, Seleccionar, setEstado]
}

export default useMoneda;