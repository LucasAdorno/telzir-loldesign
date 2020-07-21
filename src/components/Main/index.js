import React, { useState } from 'react';
import { Container } from './styles';
import { Modal } from '../Modal';
import Header from '../Header';
import api from '../../services/api'

const Main = () => {

  const [visible, setVisible] = useState('0px');
  const [city, setCity] = useState([]);
  const [dispcities, setDispcities] = useState([]);
  const validCities = api.payload.filter((i) => i.ddd === 11 || i.ddd === 16 || i.ddd === 17 || i.ddd === 18)


  const handleChangeModal = async (e) =>{
    const newCity = e.target.value.split(',');
    setCity(newCity[1]);
    await setDispcities(validCities.filter(i=>i.ddd !== parseInt(newCity[0])))
    setVisible('-800px');
  }

  return (
    <>
      <Header openModal={() => setVisible('0px')} text={city} />
      <Container className="content">
        <h1>Teste agora um dos planos FaleMais!</h1>
        <div className="testBox">
          <select>
            {dispcities.map(i=><option>{i.cidade}</option>)}
          </select>
        </div>
      </Container>
      <Modal visible={visible}>
        <div>
          <h1>Selecione a sua cidade!</h1>
          <select onChange={(e) => handleChangeModal(e)}>
            {validCities.map((i) => <option value={[i.ddd, i.cidade]}>{i.cidade}</option>)}
          </select>
        </div>
      </Modal>
    </>
  );
}
export default Main;