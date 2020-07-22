import React, { useState, useRef, useEffect } from 'react';
import { Container } from './styles';
import Button from '../Button';
import Results from '../Results';

const TestBox = (props) => {
	const [min, setMin] = useState(0);
	const [ddd, setDdd] = useState(0);
	const [plan, setPlan] = useState(0);
	const [prices, setPrices] = useState([0,0]);
	const [results, setResults] = useState('-800px');
	const inputRef = useRef(null)
	const dddRef = useRef(null)
	const planRef = useRef(null)
	const plans = [{ name: 'FaleMais 30', min: 30 }, { name: 'FaleMais 60', min: 60 }, { name: 'FaleMais 120', min: 120 }]
	const values = {dsix: 1.90, dsev: 1.70, deig: 0.90}


	useEffect(()=>{
		setDdd(parseInt(dddRef.current.value));
		setPlan(planRef.current.value);

		inputRef.current.addEventListener('keyup',(e) => {
			setMin(Number(inputRef.current.value));
		});
		dddRef.current.addEventListener('change',(e) => {
			setDdd(parseInt(dddRef.current.value));
		});
		planRef.current.addEventListener('change',(e) => {
			setPlan(parseInt(planRef.current.value));
		});

	}, [])

	const handleClickButton = () => {
		let fullPrice;
		let minExc = 0;
		let planPrice;

		if(min > plan){
			minExc = min-plan;
		}

		if(ddd === 0 || min <= 0){
			alert('Preencha os campos corretamente')
		}

		else{
			if(props.defaultDdd === '11') {
				if( ddd === 16 ) {
					fullPrice = min * values.dsix;
					planPrice = (minExc * values.dsix) + (minExc * values.dsix)/10;
				}
				else if( ddd === 17 ) {
					fullPrice = min * values.dsev;
					planPrice = (minExc * values.dsev) + (minExc * values.dsev)/10;
				}
				else if( ddd === 18 ) {
					fullPrice = min * values.deig;
					planPrice = (minExc * values.deig) + (minExc * values.deig)/10;
				}
			}

			else if(props.defaultDdd === '16'){
				fullPrice = min * (values.dsix+1);
				planPrice = (minExc * values.dsix) + (minExc * values.dsix)/10;
			}
			else if(props.defaultDdd === '17'){
				fullPrice = min * (values.dsev+1);
				planPrice = (minExc * values.dsev) + (minExc * values.dsev)/10;
			}
			else if(props.defaultDdd === '18'){
				fullPrice = min * (values.deig+1);
				planPrice = (minExc * (values.deig+1)) + (minExc * (values.deig+1))/10;
			}
			setPrices([fullPrice, planPrice]);
			setResults('0px')
		}
	}



	return (
		<>
		<Container className="content">
			<h1>Teste agora um dos planos FaleMais!</h1>
			<div className="testBox">
				<h3>Veja qual plano<br/>   se adequa a você.</h3>
				<label>ligar para:
					<select ref={dddRef}>
						<option value={0}>Selecione uma cidade</option>
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
				<Button onClick={()=>handleClickButton()} text='Conferir' background={'#ffd53f'} />
			</div>
		</Container>
		<Results onClick={()=>setResults('-800px')} visible={results} valor={prices} plan={plan} />
		</>
	);
}

export default TestBox;