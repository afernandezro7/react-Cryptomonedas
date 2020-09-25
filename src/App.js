import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import imagen from './cryptomonedas.png'
import Form from './components/Form';
import { helperCalcularCrypto } from './helpers/consultarAPI';
import Cotizacion from './components/Cotizacion';
import Spinner from './components/Spinner';

/** STYLED COMPONENTS **/
const StContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width:992px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }

`;

const StImage = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const StHeading = styled.h1`
  color: #ffffff;
  font-family: 'Bebas Neue', cursive;
  font-size: 50px;
  font-weight: 700;
  margin-bottom: 50px;
  margin-top: 80px;
  text-align: center;

  &::after {
    background-color: #66a2fe;
    content: '';
    display: block;
    height: 6px;
    
  }
`;

/** GLOBAL FUNCTIONAL COMPONENT **/
function App() {

  const [moneda, setMoneda] = useState('')
  const [cryptomoneda, setCryptomoneda] = useState('')
  const [cotizacion, setCotizacion] = useState({})
  const [spinner, setSpinner] = useState(false)

  useEffect(() => {
    //evitar primera ejecución
    if(moneda === '') return;

    // Consultar la API para obtener la cotización
    helperCalcularCrypto(moneda,cryptomoneda)
      .then( ( {data} )=>{

        setCotizacion(data.DISPLAY[cryptomoneda][moneda]);
      })

  }, [moneda,cryptomoneda])

  return (
    <StContainer>
      <div>
        <StImage
            src = { imagen }
            alt= "imagen Crypto"
        />
      </div>
      <div>

        <StHeading>Cotiza Cryptomonedas al Instante</StHeading>

        <Form 
          setMoneda={ setMoneda } 
          setCryptomoneda={ setCryptomoneda } 
          setSpinner = { setSpinner }
        />
        { spinner 
            ? 
              <Spinner/>
            :
              <Cotizacion
                cotizacion = {cotizacion}
              />
        }
        
      </div>
      
    </StContainer>
  );
}

export default App;
