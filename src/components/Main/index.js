import React, { useState } from 'react';
import { Modal } from '../Modal';
import Header from '../Header';
import TestBox from '../TestBox';
import api from '../../services/api';

const Main = () => {

  const [visible, setVisible] = useState('0px');
  const [city, setCity] = useState([]);
  const [dispcities, setDispcities] = useState([]);
  const validCities = api.payload.filter((i) => i.ddd === 11 || i.ddd === 16 || i.ddd === 17 || i.ddd === 18)


  const handleChangeModal = async (e) =>{
    const newCity = e.target.value.split(',');
    setCity(newCity);
    await setDispcities(validCities.filter(i =>  newCity[0] === '11' ? i.ddd !== 11 : i.ddd === 11))
    setVisible('-800px');
  }

  return (
    <>
      <Header openModal={() => setVisible('0px')} text={city[1]} />
      <TestBox defaultDdd={city[0]} cities={dispcities} />
      <Modal visible={visible}>
        <div>
          <h1>Selecione a sua cidade!</h1>
          <select onChange={(e) => handleChangeModal(e)}>
            {validCities.map((i) => <option key={i.cidade} value={[i.ddd, i.cidade]}>{i.cidade}</option>)}
          </select>
        </div>
      </Modal>
    </>
  );
}
export default Main;