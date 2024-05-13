import React, {useState} from 'react';
import { Header } from './components/Header';
import { ErrorComponent } from './components/ErrorComponent';
import { FormExample } from './components/FormExample';
import { FormikLibExample } from './components/FormikLibExample';
import {address} from "./__mocks__/address";

const App = () => {
    const [name, setName] = useState<string>('');
    const [comment, setComment] = useState('Hello');
    const [selectedAddress, setSelectedAddress] = useState(address[2]);

  return (
    <div className="App">
      <ErrorComponent />
      <Header />
      <FormExample
          name={name}
          setName={setName}
          comment={comment}
          setComment={setComment}
          selectedAddress={selectedAddress}
          setSelectedAddress={setSelectedAddress}
      />
      <FormikLibExample />
    </div>
  );
};

export default App;
