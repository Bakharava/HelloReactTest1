import React, { useState } from 'react';
import { Header } from './components/Header';
import { ErrorComponent } from './components/ErrorComponent';
import { FormExample } from './components/FormExample';
import { FormikLibExample } from './components/FormikLibExample';
import { address } from './__mocks__/address';
import { NewsSection } from './components/NewsSection';
import { User } from './components/User';
import { TodosSection } from './components/TodosSection';

const App = () => {
  const [name, setName] = useState<string>('');
  const [comment, setComment] = useState('Hello');
  const [selectedAddress, setSelectedAddress] = useState(address[2]);

  return (
    <div className="App">
      <ErrorComponent />
      <Header />
      <FormExample
        comment={comment}
        name={name}
        selectedAddress={selectedAddress}
        setComment={setComment}
        setName={setName}
        setSelectedAddress={setSelectedAddress}
      />
      <FormikLibExample />
      <NewsSection />
      <User />
      <TodosSection />
    </div>
  );
};

export default App;
