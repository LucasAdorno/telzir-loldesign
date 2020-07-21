import React, { useState, useRef, useEffect } from 'react';
import { Container } from './styles';

const TestBox = (props) => {
  const [min, setMin] = useState(0);
  const [ddd, setDdd] = useState(0);
  const [plan, setPlan] = useState(0);
  const inputRef = useRef(null)
  const dddRef = useRef(null)
  const planRef = useRef(null)
  const plans = [{ name: 'FaleMais 30', min: 30 }, { name: 'FaleMais 60', min: 60 }, { name: 'FaleMais 120', min: 120 }]
  const values = {dsix: 1.90, dsev: 1.70, deig: 0.90}


  useEffect(()=>{
    inputRef.current.addEventListener('keyup',(e) => {
      setMin(parseInt(inputRef.current.value));
    });
    dddRef.current.addEventListener('click',(e) => {
      setDdd(parseInt(dddRef.current.value));
    });
    planRef.current.addEventListener('click',(e) => {
      setPlan(planRef.current.value);
    });
  }, [])

  const handleClickButton = () => {

     if( ddd === 16 ) {const fullPrice = min * values.dsix;
     alert(fullPrice.toFixed(2))}
     else if( ddd === 17 ) {const fullPrice = min * values.dsiv;
     alert(fullPrice.toFixed(2))}
     else if( ddd === 18 ) {const fullPrice = min * values.deig;
     alert(fullPrice.toFixed(2))}
  }


  return (
    <Container className="content">
      <h1>Teste agora um dos planos FaleMais!</h1>
      <div className="testBox">
        <label>ligar para:
          <select ref={dddRef}>
            {props.cities.map(i => <option value={i.ddd} key={i.cidade}>{i.cidade}</option>)}
          </select>
        </label>
        <label>minutos:
          <input type='number' ref={inputRef}/>
        </label>
        <label>plano FaleMais:
          <select ref={planRef}>
            {plans.map(i => <option key={i.min} value={i.min}>{i.name}</option>)}
          </select>
        </label>
        <button onClick={()=>handleClickButton()}>Conferir</button>
      </div>
    </Container>
  );
}

export default TestBox;