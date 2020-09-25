import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled';
import useMoneda from '../hooks/useMoneda';
import useCriptomoneda from '../hooks/useCriptomoneda';
import { AxiosAPI } from '../helpers/consultarAPI';
import Error from './Error';



/** STYLED COMPONENTS **/
const StButton = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    border-radius: 10px;
    color: #ffffff;
    transition: background-color .3s ease;
    width: 100%;

    &:hover{
        background-color: #326AC0;
        cursor: pointer;
    }
`;


/** FUNCTIONAL COMPONENT **/
const Form = ({setMoneda,setCryptomoneda,setSpinner}) => {

    // Arreglo de Monedas
    const monedas =[
        { codigo:  'USD', nombre: 'Dolar Estadounidense'},
        { codigo:  'MXN', nombre: 'Peso Mexicano'},
        { codigo:  'EUR', nombre: 'Euro'},
        { codigo:  'GBP', nombre: 'Libras Esterlinas'},
        { codigo:  'PAB', nombre: 'Balboa Panameño'}
    ]
    // State con Arreglo de Cryptomonedas
    const [listacripto, setlistacripto] = useState([])
    
    // State de Error al validar el Submit
    const [error, setError] = useState(false)

    // Utilizar CustomHook useMoneda
    const [moneda , SelectMonedas] = useMoneda('Elige tu Moneda', '', monedas)
    // Utilizar CustomHook useCriptomoneda
    const [cripto , SelectCripto] = useCriptomoneda('Elige tu Cryptomoneda', '', listacripto)
    
    
    useEffect(() => {
        

        AxiosAPI(moneda)
            .then(  ({ data }) =>{

                (data.Response==="Error") ? setlistacripto([]) : setlistacripto(data.Data)

                
            })

        
        
       
    }, [moneda])

    const handleSubmit = e =>{
        e.preventDefault();
        
        // Validar formulario
        if( cripto === "" || moneda === ""){
            setError(true)

            return
        }
        setError(false)

        //Pasar el resultado al componente principal
        setMoneda(moneda)
        setCryptomoneda(cripto)
        
        //Mostrar y ocultar el Spinner de cargando
        setSpinner(true)
        setTimeout(() => {
            setSpinner(false) 
        }, 2500);
    }

    
    return (
        <form
        onSubmit={ handleSubmit }
        >   
            { error && <Error msg='Todos lo campos son obligatorios'/> }
            <SelectMonedas/>
            <SelectCripto/>
            <StButton
                type="submit"
                value= "Calcular"
            />
            
        </form>
    )
}

Form.propTypes = {
    setMoneda: PropTypes.func.isRequired,
    setCryptomoneda: PropTypes.func.isRequired,
    setSpinner: PropTypes.func.isRequired
}

export default Form
